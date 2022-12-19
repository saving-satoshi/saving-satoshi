const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['saving-satoshi.s3.amazonaws.com'],
  },
}

module.exports = withContentlayer({ ...nextConfig })
