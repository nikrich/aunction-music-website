import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aunction-music-website",
  assetPrefix: "/aunction-music-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
