/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/onlytrunch',
  assetPrefix: '/onlytrunch/',
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
