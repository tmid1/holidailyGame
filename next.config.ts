import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'dist'
}

module.exports = nextConfig

export default nextConfig;
