import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const assetDirectory = path.join(
  rootDirectory,
  "public",
  "brand",
  "bioglow",
);
const manifestPath = path.join(
  rootDirectory,
  "src",
  "brand",
  "bioglow.assets.json",
);
const tokenPath = path.join(
  rootDirectory,
  "src",
  "brand",
  "bioglow.tokens.json",
);
const publicPathPrefix = "/brand/bioglow/";
const pngSignature = "89504e470d0a1a0a";
const expectedAssetIds = [
  "base-horizontal-full-color",
  "base-horizontal-one-color",
  "base-vertical-full-color",
  "base-vertical-one-color",
  "founders-horizontal-full-color",
  "founders-vertical-full-color",
  "lockup-canopy-full-color",
  "lockup-first-full-color",
  "lockup-first-lego-league-full-color",
  "wordmark-black",
  "wordmark-white",
];
const expectedAssetCount = expectedAssetIds.length;
const allowedKinds = new Set([
  "edition-logo",
  "logo",
  "partner-lockup",
  "wordmark",
]);
const allowedOrientations = new Set([
  "horizontal",
  "stacked",
  "vertical",
]);
const allowedTreatments = new Set([
  "black",
  "full-color",
  "one-color",
  "white",
]);
const allowedBackgrounds = new Set(["any", "dark", "light"]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function getPngDimensions(file, id) {
  assert(
    file.subarray(0, 8).toString("hex") === pngSignature,
    `${id} is not a PNG file`,
  );
  assert(
    file.subarray(12, 16).toString("ascii") === "IHDR",
    `${id} does not start with a PNG IHDR chunk`,
  );

  return {
    width: file.readUInt32BE(16),
    height: file.readUInt32BE(20),
  };
}

function validateManifestShape(manifest, tokens) {
  assert(
    manifest.schemaVersion === 1,
    "The asset manifest schemaVersion must be 1",
  );
  assert(
    manifest.projectEdition === "founders",
    "The project edition must be founders",
  );
  assert(
    manifest.projectEdition === tokens.project?.activeEdition,
    "The asset manifest and color tokens must use the same project edition",
  );
  assert(
    manifest.source?.importPolicy === "byte-identical",
    "The manifest must require byte-identical imports",
  );
  assert(
    manifest.assets &&
      typeof manifest.assets === "object" &&
      !Array.isArray(manifest.assets),
    "The manifest must define an assets object",
  );
  const assetIds = Object.keys(manifest.assets).sort();
  assert(
    assetIds.length === expectedAssetCount &&
      assetIds.every((id, index) => id === expectedAssetIds[index]),
    `The manifest assets must be: ${expectedAssetIds.join(", ")}`,
  );
}

async function validateAsset(id, asset, seenPaths, seenDigests) {
  assert(/^[a-z0-9-]+$/.test(id), `${id} is not a stable kebab-case ID`);
  assert(
    typeof asset.publicPath === "string" &&
      asset.publicPath.startsWith(publicPathPrefix) &&
      !asset.publicPath.includes("..") &&
      !asset.publicPath.includes("\\"),
    `${id} has an unsafe public path`,
  );
  assert(
    /^\/brand\/bioglow\/bioglow-[a-z0-9-]+\.png$/.test(asset.publicPath),
    `${id} has an invalid public filename`,
  );
  assert(
    !seenPaths.has(asset.publicPath),
    `${id} duplicates ${asset.publicPath}`,
  );
  assert(
    typeof asset.sourceFilename === "string" &&
      asset.sourceFilename.endsWith(".png") &&
      !asset.sourceFilename.includes(".."),
    `${id} has an invalid source filename`,
  );
  assert(
    !/future/i.test(
      `${id} ${asset.publicPath} ${asset.sourceFilename} ${asset.edition}`,
    ),
    `${id} includes unsupported Future Edition artwork`,
  );
  assert(
    asset.edition === "general" || asset.edition === "founders",
    `${id} has an unsupported edition`,
  );
  assert(allowedKinds.has(asset.kind), `${id} has an unsupported kind`);
  assert(
    allowedOrientations.has(asset.orientation),
    `${id} has an unsupported orientation`,
  );
  assert(
    allowedTreatments.has(asset.treatment),
    `${id} has an unsupported treatment`,
  );
  assert(
    asset.partner === null ||
      asset.partner === "canopy" ||
      asset.partner === "first" ||
      asset.partner === "first-lego-league",
    `${id} has an unsupported partner`,
  );
  assert(
    (asset.kind === "partner-lockup") === (asset.partner !== null),
    `${id} has inconsistent partner metadata`,
  );
  assert(
    (asset.kind === "edition-logo") === (asset.edition === "founders"),
    `${id} has inconsistent edition metadata`,
  );
  assert(
    allowedBackgrounds.has(asset.recommendedBackground),
    `${id} has an unsupported background recommendation`,
  );
  assert(
    Number.isInteger(asset.width) && asset.width > 0,
    `${id} has an invalid width`,
  );
  assert(
    Number.isInteger(asset.height) && asset.height > 0,
    `${id} has an invalid height`,
  );
  assert(
    Number.isInteger(asset.bytes) && asset.bytes > 0,
    `${id} has an invalid byte count`,
  );
  assert(
    /^[a-f0-9]{64}$/.test(asset.sha256),
    `${id} has an invalid SHA-256 digest`,
  );
  assert(
    !seenDigests.has(asset.sha256),
    `${id} duplicates another asset's SHA-256 digest`,
  );

  const filename = asset.publicPath.slice(publicPathPrefix.length);
  const filePath = path.resolve(assetDirectory, filename);
  assert(
    path.dirname(filePath) === assetDirectory,
    `${id} resolves outside the asset directory`,
  );

  const file = await readFile(filePath);
  const dimensions = getPngDimensions(file, id);
  const digest = createHash("sha256").update(file).digest("hex");

  assert(file.length === asset.bytes, `${id} has an unexpected file size`);
  assert(dimensions.width === asset.width, `${id} has an unexpected width`);
  assert(dimensions.height === asset.height, `${id} has an unexpected height`);
  assert(digest === asset.sha256, `${id} has an unexpected SHA-256 digest`);

  seenPaths.add(asset.publicPath);
  seenDigests.add(asset.sha256);
  return filename;
}

async function main() {
  const [manifest, tokens] = await Promise.all(
    [manifestPath, tokenPath].map(async (filePath) =>
      JSON.parse(await readFile(filePath, "utf8")),
    ),
  );
  validateManifestShape(manifest, tokens);

  const seenPaths = new Set();
  const seenDigests = new Set();
  const manifestFiles = new Set();

  for (const [id, asset] of Object.entries(manifest.assets)) {
    manifestFiles.add(
      await validateAsset(id, asset, seenPaths, seenDigests),
    );
  }

  const directoryEntries = await readdir(assetDirectory, {
    withFileTypes: true,
  });
  const pngFiles = directoryEntries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".png"))
    .map((entry) => entry.name)
    .sort();
  const allowedFiles = new Set(["README.md", ...manifestFiles]);
  const unsupportedEntries = directoryEntries
    .filter((entry) => !entry.isFile() || !allowedFiles.has(entry.name))
    .map((entry) => entry.name);

  assert(
    unsupportedEntries.length === 0,
    `Unsupported entries are present: ${unsupportedEntries.join(", ")}`,
  );
  assert(
    pngFiles.length === expectedAssetCount,
    `The asset directory must contain ${expectedAssetCount} PNG files`,
  );
  assert(
    pngFiles.every((filename) => manifestFiles.has(filename)),
    "The asset directory contains an unmanifested PNG file",
  );

  console.log(
    `BIOGLOW asset manifest and ${expectedAssetCount} immutable PNGs are valid.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
