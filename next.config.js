/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['saving-satoshi.s3.amazonaws.com', 'placekitten.com'],
  },
  eslint: {
    dirs: ['app', 'components', 'content', 'ui', 'utils'],
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.json$/i,
        type: 'javascript/auto',
        use: ['json-loader'],
      }
    )
    return config
  },
}

module.exports = nextConfig
