"use client";

import styles from "./ConnectedGrid.module.css";

function classes(...names) {
  return names.filter(Boolean).join(" ");
}

export function ConnectedGrid({ children, className }) {
  return <div className={classes(styles.grid, className)}>{children}</div>;
}

export function ConnectedGridCell({
  as: Element = "article",
  children,
  className,
}) {
  return (
    <Element className={classes(styles.cell, className)}>{children}</Element>
  );
}
