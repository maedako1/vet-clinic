import type { NextConfig } from "next";

function inferBasePath() {
  // In GitHub Actions, GITHUB_REPOSITORY is typically "owner/repo".
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const explicit = process.env.NEXT_PUBLIC_BASE_PATH;
  if (explicit) return explicit.startsWith("/") ? explicit : `/${explicit}`;
  return repo ? `/${repo}` : "";
}

const basePath = inferBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
