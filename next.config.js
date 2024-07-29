/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  webpack5: true,
  fs: false,
  path: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
