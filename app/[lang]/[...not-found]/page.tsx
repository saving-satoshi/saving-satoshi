import { notFound } from 'next/navigation'
import defaultMetadata from 'config/metadata'

export const metadata = {
  ...defaultMetadata,
  title: 'Page not found - Saving Satoshi',
}

export default function NotFoundCatchAll() {
  return notFound()
}
