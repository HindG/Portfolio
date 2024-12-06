/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/nextjs-github-pages",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
