/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
