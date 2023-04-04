import { usePathname } from 'next/navigation'

export const usePathData = () => {
  let [lang, pageId, chapterId, lessonId] = usePathname()
    .split('/')
    .filter((p) => p)

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
