import openGraph from './opengraph'
import twitter from './twitter'

const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: 'Saving Satoshi',
  metadataBase: new URL('https://savingsatoshi.com/'),
  description:
    'Explore the mysteries of Satoshi and learn about bitcoin along the way.',
  ...openGraph,
  ...twitter,
}

export default metadata
