import { usePathname } from 'next/navigation'
import { chapters } from 'content'

const getPathData = (pathName: string) => {
  const pathArray = pathName.split('/').filter((p) => p)
  const isLessonRoute = pathArray.length === 4

  const lessonId = isLessonRoute ? pathArray.pop() : undefined
  const lang = pathArray.shift()

  const chapterId = pathArray.pop()
  const chapter = chapters[chapterId]?.metadata
  const lessons = chapter.lessons
  const indexOfCurrentLesson = chapter.lessons.indexOf(lessonId)

  return {
    lang,
    chapterId,
    lessons,
    indexOfCurrentLesson,
  }
}

const getChaptersPath = (pathName) => {
  const { lang } = getPathData(pathName)

  return `${lang}/chapters`
}

export const useContentRoute = () => {
  const pathName = usePathname()
  return {
    chaptersOverviewPath: getChaptersPath(pathName),
  }
}
