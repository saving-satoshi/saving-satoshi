import { usePathname } from 'next/navigation'

export const usePathData = () => {
  const [lang, pageId, chapterId, lessonId] = usePathname()
    .split('/')
    .filter((p) => p)

  return {
    lang,
    pageId,
    chapterId,
    lessonId,
  }
}
