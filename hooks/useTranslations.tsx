import { t } from 'lib/translate'

export default function useTranslations(lang: string) {
  return function (key: string | undefined) {
    return t(key, lang)
  }
}
