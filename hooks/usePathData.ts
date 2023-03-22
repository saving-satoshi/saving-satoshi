import { usePathname } from 'next/navigation'

export const usePathData = () => {
  const [lang, pageId, chapterId, lessonId] = usePathname()
    .split('/')
    .filter((p) => p)

  // return the default locale when undefined
  if (lang === undefined) {
    return {
      lang: 'en',
      pageId,
      chapterId,
      lessonId,
    }
  }
  return {
    lang,
    pageId,
    chapterId,
    lessonId,
  }
}
