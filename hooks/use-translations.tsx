import { t } from 'lib/translate'

export default function useTranslations(locale: string) {
  return function (key: string) {
    return t(key, locale)
  }
}
