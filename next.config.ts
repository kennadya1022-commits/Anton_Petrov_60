import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/biography", destination: "/timeline", permanent: true },
      { source: "/family", destination: "/", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/stories", destination: "/", permanent: true },
      { source: "/congratulations", destination: "/", permanent: true },
      { source: "/lessons", destination: "/", permanent: true },
      { source: "/music", destination: "/", permanent: true },
      { source: "/letter", destination: "/", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
