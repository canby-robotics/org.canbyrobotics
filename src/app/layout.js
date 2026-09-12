import "@primer/react-brand/fonts/fonts.css";

import { CanbyThemeProvider } from "@/design-system/CanbyThemeProvider";

import "./globals.css";

export const metadata = {
  title: "Canby Robotics",
  description:
    "A community FIRST LEGO League Challenge team for students in grades 4–8 in Canby.",
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
