// import acceptLanguage from 'accept-language'
// acceptLanguage.languages(locales)

import { NextRequest, NextResponse } from 'next/server'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from 'i18n/config'

function getLocale(request: NextRequest): string | undefined {
  const pathData = request.nextUrl.pathname.split('/').filter((x) => x)

  let [locale] = pathData

  const supportedLocales: string[] = i18n.locales.map((locale) => locale)

  if (supportedLocales.indexOf(locale) === -1) {
    return i18n.defaultLocale
  }

  return locale
  // // Negotiator expects plain object so we need to transform headers
  // const negotiatorHeaders: Record<string, string> = {}
  // request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // // Use negotiator and intl-localematcher to get best locale
  // let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // // @ts-ignore locales are readonly
  // const locales: string[] = i18n.locales
  // return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  const locale = getLocale(request)

  // Redirect to '/' for homepage
  if (pathname !== '/' || locale !== 'en') {
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      // return NextResponse.redirect(
      //   new URL(`/${locale}${pathname}`, request.url)
      // )
    }
  }
}

export const config = {
  // TODO: Find a way to handle these dynamically
  matcher: [
    '/((?!_next/static|_next/image|assets|favicon.ico|manifest.json).*)',
  ],
}
