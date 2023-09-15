/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['saving-satoshi.s3.amazonaws.com', 'placekitten.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.optimization.minimize = false
    return config
  },
}

module.exports = nextConfig
