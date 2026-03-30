import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "Anton_Petrov_60";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  images: { unoptimized: true },
  async redirects() {
    if (isGithubActions) {
      return [];
    }

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
