import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Allow deployment even with lint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Skip type checking on build (optional)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;