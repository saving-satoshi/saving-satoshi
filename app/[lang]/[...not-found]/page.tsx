import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Page not found - Saving Satoshi',
}

export default function NotFoundCatchAll() {
  return notFound()
}
