import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // или '2mb', '500kb', '1000000'
    },
  },
  // здесь твои настройки, но без experiment
};

export default nextConfig;
