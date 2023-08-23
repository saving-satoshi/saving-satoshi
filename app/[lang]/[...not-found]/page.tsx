import { notFound } from 'next/navigation'
import defaultMetadata from 'config/metadata'

export const metadata = {
  ...defaultMetadata,
}

export default function NotFoundCatchAll() {
  return notFound()
}
