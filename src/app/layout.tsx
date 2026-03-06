import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikrich.github.io"),
  title: "Auction — A Century",
  description:
    "Listen to A Century, the debut single from Auction. Out now on all streaming platforms including Spotify, Apple Music, and more.",
  openGraph: {
    title: "Auction — A Century",
    description:
      "Listen to A Century, the debut single from Auction. Out now on all streaming platforms.",
    type: "music.song",
    images: [
      {
        url: "/aunction-music-website/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Auction — A Century",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auction — A Century",
    description:
      "Listen to A Century, the debut single from Auction. Out now on all streaming platforms.",
    images: ["/aunction-music-website/og-image.svg"],
  },
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
