import { usePathname } from 'next/navigation'

import { i18n } from 'i18n/config'

export const useLang = () => {
  const pathName = usePathname()

  const parts = pathName.split('/').filter((p) => p)

  const lang = parts.shift()

  if (!lang) {
    return i18n.defaultLocale
  }

  return lang
}
