'use client'

export function generateNewUrl(pathname: string, language: string): string {
  const pathnameWithoutLanguage = pathname.replace(/^\/(en|nl)\b/, '')
  const newUrl = `/${language}${pathnameWithoutLanguage}`
  return newUrl
}

export function getCurrentLocale(pathname) {
  const pathSegments = pathname.split('/')
  const localePattern = /^[a-z]{2}$/
  if (pathSegments.length > 1 && localePattern.test(pathSegments[1])) {
    return pathSegments[1]
  }
  return 'en'
}
