import "@primer/react-brand/fonts/fonts.css";

import { CanbyThemeProvider } from "@/design-system/CanbyThemeProvider";

import "./globals.css";

export const metadata = {
  title: "Canby Robotics",
  description:
    "A design preview for the Canby Robotics club and the BIOGLOW season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CanbyThemeProvider>{children}</CanbyThemeProvider>
      </body>
    </html>
  );
}
