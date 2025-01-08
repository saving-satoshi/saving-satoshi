import { usePathname } from 'next/navigation'
import useLang from './useLang'

export default function usePathData() {
  const pathName = usePathname() || ''
  const browserLang = useLang()

  let [lang, pageId, chapterId, lessonId] = pathName.split('/').filter((p) => p)

  if (!lang) {
    lang = browserLang
  }

  return {
    lang,
    pageId,
    chapterId,
    lessonId,
  }
}
