"use client";

import { Button } from "@primer-brand/Button/Button.js";
import { Text } from "@primer-brand/Text/Text.js";
import Link from "next/link";

import styles from "./SiteHeader.module.css";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#program", label: "Program" },
  { href: "/#season", label: "Season" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <div className={styles.inner}>
        <Link
          aria-label="Canby Robotics home"
          className={styles.brand}
          href="/"
        >
          <Text as="span" size="300" weight="bold">
            Canby Robotics
          </Text>
        </Link>
        <nav className={styles.navigation} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button as="a" href="/interest" size="small" variant="primary">
          Join the club
        </Button>
      </div>
    </header>
  );
}
