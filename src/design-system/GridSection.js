"use client";

import { Grid } from "@primer-brand/Grid/Grid.js";

import styles from "./GridSection.module.css";

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function GridSection({
  as: Element = "section",
  children,
  className,
  contentClassName,
  divider = "none",
  padding = "normal",
  tone = "default",
  ...props
}) {
  return (
    <Element
      className={classes(
        styles.section,
        styles[`tone-${tone}`],
        styles[`divider-${divider}`],
        className,
      )}
      {...props}
    >
      <Grid
        className={styles.frame}
        columnGap="none"
        enableGutters={false}
        rowGap="none"
      >
        <Grid.Column
          className={classes(
            styles.content,
            styles[`padding-${padding}`],
            contentClassName,
          )}
          span={12}
        >
          {children}
        </Grid.Column>
      </Grid>
    </Element>
  );
}
