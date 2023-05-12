/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.giphy.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig
