import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/collections/bye-bye-narcissist",
        destination: "/collections#featured-collection",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

