import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const font = League_Gothic({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scythe Picker",
  description: "Randomly select Scythe factions initial setup",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Scythe", "Board", "Game", "Picker", "Setup"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "paolosimone",
      url: "https://github.com/paolosimone",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/scythe-128x128.png" },
    { rel: "icon", url: "icons/scythe-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
