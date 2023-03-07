import { usePathname } from 'next/navigation'

const getPathData = (pathName: string) => {
  const pathArray = pathName.split('/').filter((p) => p)
  const [lang, chapters, chapterId, lessonId] = pathArray
  return {
    lang,
    chapters,
    chapterId,
    lessonId,
  }
}

const getChaptersPath = (pathName) => {
  const { lang } = getPathData(pathName)
  return `/${lang}/chapters`
}

export const useContentRoute = () => {
  const pathName = usePathname()
  return {
    getChaptersPath: () => getChaptersPath(pathName),
  }
}
