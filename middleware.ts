import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'
import { locales } from 'config/locales'

acceptLanguage.languages(locales)

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = acceptLanguage.get(request.headers.get('accept-language'))

    // If incoming request is /products, it will be transformed to /en/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  // TODO: Find a way to handle these dynamically
  matcher: ['/((?!_next|favicon.ico|manifest.json).*)'],
}
