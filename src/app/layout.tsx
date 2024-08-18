import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const font = League_Gothic({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scythe Picker",
  description: "Randomly select Scythe factions initial setup",
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
