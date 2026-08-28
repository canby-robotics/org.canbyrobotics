import "./globals.css";

export const metadata = {
  title: "Canby Robotics",
  description: "Informational page for the Canby Robotics club.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
