import Link from "next/link";

import { SeasonLogo } from "@/design-system/SeasonLogo";

import styles from "./SeasonModule.module.css";

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function SeasonModule({
  className,
  id = "season",
  linkHref = "/interest",
  linkLabel = "Join the interest list",
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
            Take on the BIOGLOW™ challenge.
          </h2>
          <p className={styles.body}>
            The 2026–2027 BIOGLOW™ season invites students to explore a
            biodiversity challenge and design a possible solution. Our team
            will pair that innovation project with robot missions, testing, and
            presentation practice as we prepare to attend an ORTOP FIRST® LEGO®
            League event. Event date to be announced.
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
