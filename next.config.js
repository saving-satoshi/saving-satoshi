/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['saving-satoshi.s3.amazonaws.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  i18n: {
    locales: ['en', 'es', 'nl', 'hi'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
