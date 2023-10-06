import openGraph from './opengraph'
import twitter from './twitter'

const metadata = {
  title: 'Saving Satoshi',
  description:
    'Explore the mysteries of Satoshi and learn about bitcoin along the way.',
  ...openGraph,
  ...twitter,
}

export default metadata
