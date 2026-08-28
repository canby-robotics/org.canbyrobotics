import assetCatalog from "./bioglow.assets.json";

export function getBioglowAsset(assetId) {
  const asset = assetCatalog.assets[assetId];

  if (!asset) {
    throw new Error(`Unknown BIOGLOW asset: ${assetId}`);
  }

  return asset;
}
