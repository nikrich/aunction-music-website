import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auction - A Century",
  description:
    "Official website for the band Auction. Listen to the new album A Century now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased min-h-screen font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
