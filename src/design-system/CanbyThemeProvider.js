"use client";

import "@primer-brand/css/stylesheets.js";
// Direct component imports still depend on Primer's shared control geometry.
import "@primer/react-brand/lib/design-tokens/css/tokens/functional/size/size.css";

import { ThemeProvider } from "@primer-brand/ThemeProvider/ThemeProvider.js";

export function CanbyThemeProvider({ children }) {
  return (
    <ThemeProvider className="canby-theme" colorMode="light">
      {children}
    </ThemeProvider>
  );
}
