/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    API_URL: process.env.API_URL,
  },
  output: 'standalone',
};

module.exports = nextConfig;
