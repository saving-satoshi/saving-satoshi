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

    // config.module.rules.push({
    //   test: /\.py$/,
    //   use: 'raw-loader',
    // })

    // config.module.rules.push({
    //   test: /\.js$/,
    //   include: [path.resolve(__dirname, 'lib', 'vm', 'langs')],
    //   use: 'raw-loader',
    // })

    return config
  },
}

module.exports = nextConfig
