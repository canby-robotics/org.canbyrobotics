import "@primer/react-brand/fonts/fonts.css";

import { CanbyThemeProvider } from "@/design-system/CanbyThemeProvider";

import "./globals.css";

export const metadata = {
  title: "Canby Robotics",
  description:
    "A design preview for Canby Robotics and its FIRST LEGO League program.",
};

export default function RootLayout({ children }) {
  return (
    <html data-canby-palette="build-bright" lang="en">
      <body>
        <CanbyThemeProvider>{children}</CanbyThemeProvider>
      </body>
    </html>
  );
}
