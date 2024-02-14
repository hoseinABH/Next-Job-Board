/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
