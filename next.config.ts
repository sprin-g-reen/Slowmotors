import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slowmoto.tours",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    // @ts-expect-error - Specific experimental property for dev environments
    allowedDevOrigins: ["192.168.131.176:3000"],
  },
};

export default nextConfig;
