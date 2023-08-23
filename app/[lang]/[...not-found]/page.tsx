import openGraph from 'config/opengraph'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Page not found - Saving Satoshi',
  ...openGraph,
}

export default function NotFoundCatchAll() {
  return notFound()
}
