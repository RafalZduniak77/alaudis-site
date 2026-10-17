import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep server reads and the browser-based Studio on the same dataset.
  env: { NEXT_PUBLIC_GALLERY_ENVIRONMENT: process.env.VERCEL_ENV || "development" },
};

export default nextConfig;
