"use client";

import "@primer-brand/css/stylesheets.js";

import { ThemeProvider } from "@primer-brand/ThemeProvider/ThemeProvider.js";

export function CanbyThemeProvider({ children }) {
  return (
    <ThemeProvider className="canby-theme" colorMode="light">
      {children}
    </ThemeProvider>
  );
}
