"use client";

import { Text } from "@primer-brand/Text/Text.js";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Text as="p" size="300" weight="bold">
            Canby Robotics
          </Text>
          <Text as="p" size="100" variant="muted">
            Design-system preview with placeholder organization content.
          </Text>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#program">Program</a>
          <a href="#season">Season</a>
          <a href="#top">Back to top</a>
        </nav>
        <Text as="p" className={styles.attribution} size="100" variant="muted">
          FIRST® is a trademark of For Inspiration and Recognition of Science
          and Technology. LEGO® is a registered trademark of the LEGO Group.
          FIRST® LEGO® League and BIOGLOW™ are jointly held trademarks of FIRST
          and the LEGO Group. © 2026 FIRST and the LEGO Group. All rights
          reserved.
        </Text>
      </div>
    </footer>
  );
}
