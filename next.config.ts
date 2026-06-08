import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
