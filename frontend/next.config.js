/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    domains: ['localhost'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
