import { usePathname } from 'next/navigation'

import { i18n } from 'i18n/config'
import locales from 'i18n/locales'

export default function useLang() {
  const pathName = usePathname() || ''
  const parts = pathName.split('/').filter((p) => p)
  const lang = parts.shift()

  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.languages || [navigator.language]
    if (!lang && browserLang) {
      for (const lang of browserLang) {
        if (locales[`${lang}`]) {
          return lang
        }
        const mainLang = lang.split('-')[0]
        if (locales[`${mainLang}`]) {
          return mainLang
        }
      }
      return i18n.defaultLocale
    }
  }

  return lang ?? 'en'
}
