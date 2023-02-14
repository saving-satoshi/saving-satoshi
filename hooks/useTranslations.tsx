import { t } from 'lib/translate'

export const useTranslations = (lang: string) => {
  return function (key: string) {
    return t(key, lang)
  }
}
