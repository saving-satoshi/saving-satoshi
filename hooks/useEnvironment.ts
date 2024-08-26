'use client'

import * as navigation from 'next/navigation'

export default function useEnvironment() {
  const searchParams = navigation.useSearchParams()
  const devParam = searchParams?.get('dev') || ''

  return {
    isDevelopment:
      // Check if we're not in production
      process.env.NODE_ENV !== 'production' ||
      window?.location.host !== 'savingsatoshi.com'
        ? // If not in production, check if devParam is 'true'
          devParam === 'true'
        : // If in production, check if devParam matches the secret
          devParam === process.env.DEV_MODE_SECRET,
  }
}
