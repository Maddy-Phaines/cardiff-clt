import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for hosting on S3 + CloudFront
  output: "export",
  // Emit /about/index.html etc. so paths resolve as S3 objects
  trailingSlash: true,
  // next/image optimisation needs a server; serve images as-is
  images: { unoptimized: true },
};

export default nextConfig;
