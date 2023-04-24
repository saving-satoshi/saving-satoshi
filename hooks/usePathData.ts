import { usePathname } from 'next/navigation'

export default function usePathData() {
  const pathName = usePathname() || ''

  let [lang, pageId, chapterId, lessonId] = pathName.split('/').filter((p) => p)

  if (!lang) {
    lang = 'en'
  }

  return {
    lang,
    pageId,
    chapterId,
    lessonId,
  }
}
