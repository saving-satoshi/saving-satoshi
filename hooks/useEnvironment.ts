'use client'

import * as navigation from 'next/navigation'

export default function useEnvironment() {
  const searchParams = navigation.useSearchParams()
  const devParam = searchParams?.get('dev') || ''

  return {
    isDevelopment: process.env.NODE_ENV !== 'production' && devParam === 'true',
  }
}
