/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
