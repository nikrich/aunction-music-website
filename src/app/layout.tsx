import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auction - A Century",
  description: "Official website for the band Auction. Listen to the new album A Century now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
