// import acceptLanguage from 'accept-language'
// acceptLanguage.languages(locales)

import { NextRequest, NextResponse } from 'next/server'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from 'i18n/config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: { locale: string; label: string }[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  try {
    const locale = matchLocale(
      languages,
      locales.map((l) => l.locale),
      i18n.defaultLocale
    )
    return locale
  } catch (ex) {
    console.error(ex)
    return 'en'
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  if (!pathname) {
    return NextResponse.next()
  }

  // Redirect to '/' for homepage
  if (pathname !== '/' || getLocale(request) !== 'en') {
    const pathnameIsMissingLocale = i18n.locales.every(
      (language) =>
        !pathname.startsWith(`/${language.locale}/`) &&
        pathname !== `/${language.locale}`
    )
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      const locale = getLocale(request)

      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      return NextResponse.redirect(
        new URL(`/${locale}${pathname}`, request.url)
      )
    }
  }
}

export const config = {
  // TODO: Find a way to handle these dynamically
  matcher: [
    '/((?!_next/static|_next/image|assets|favicon|favicon.ico|android-icon|robots.txt|manifest.json|.well-known/nostr.json).*)',
  ],
}
