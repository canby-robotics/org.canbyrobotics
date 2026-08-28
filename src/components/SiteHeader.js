"use client";

import { Button } from "@primer-brand/Button/Button.js";
import { Text } from "@primer-brand/Text/Text.js";

import styles from "./SiteHeader.module.css";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#season", label: "Season" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="Canby Robotics home">
          <Text as="span" size="300" weight="bold">
            Canby Robotics
          </Text>
        </a>
        <nav className={styles.navigation} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button as="a" href="#join" size="small" variant="primary">
          Preview joining
        </Button>
      </div>
    </header>
  );
}
