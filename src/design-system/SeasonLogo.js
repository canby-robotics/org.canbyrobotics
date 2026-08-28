import Image from "next/image";

import { getBioglowAsset } from "@/brand/bioglow";

import styles from "./SeasonLogo.module.css";

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function SeasonLogo({
  alt,
  assetId = "founders-horizontal-full-color",
  className,
  loading = "lazy",
  sizes = "(max-width: 48rem) 100vw, 50vw",
}) {
  const asset = getBioglowAsset(assetId);

  return (
    <Image
      alt={alt}
      className={classes(styles.logo, className)}
      height={asset.height}
      loading={loading}
      sizes={sizes}
      src={asset.publicPath}
      width={asset.width}
    />
  );
}
