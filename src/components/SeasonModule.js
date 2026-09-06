import Link from "next/link";

import { SeasonLogo } from "@/design-system/SeasonLogo";

import styles from "./SeasonModule.module.css";

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function SeasonModule({
  className,
  id = "season",
  linkHref = "#join",
  linkLabel = "Continue to the preview call to action",
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={classes(styles.module, className)}
      data-bioglow-edition="founders"
      id={id}
    >
      <div className={styles.frame}>
        <div className={styles.copy}>
          <p className={styles.index}>03 / 2026-2027 season</p>
          <h2 className={styles.heading} id={headingId}>
            Meet the BIOGLOW™ season.
          </h2>
          <p className={styles.body}>
            BIOGLOW™ is the 2026-2027 FIRST® LEGO® League season theme.
            Replace the rest of this preview with the team&apos;s official
            season goals, challenge focus, and participation details.
          </p>
          <Link className={styles.link} href={linkHref}>
            {linkLabel}
          </Link>
        </div>
        <div className={styles.visual}>
          <SeasonLogo
            alt="BIOGLOW™ Founders Edition"
            assetId="founders-horizontal-full-color"
            className={styles.logo}
            loading="eager"
            sizes="(max-width: 48rem) 70vw, 32rem"
          />
        </div>
      </div>
    </section>
  );
}
