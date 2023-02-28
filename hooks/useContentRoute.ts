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

const getPreviousLessonPath = (pathName) => {
  const { lang, chapterId, lessons, indexOfCurrentLesson } =
    getPathData(pathName)

  let currentChapterAndLesson

  if (indexOfCurrentLesson === -1) {
    currentChapterAndLesson = ''
  } else if (indexOfCurrentLesson === 0) {
    currentChapterAndLesson = chapterId
  } else {
    currentChapterAndLesson =
      chapterId + '/' + lessons[indexOfCurrentLesson - 1]
  }

  return `${lang}/chapters/${currentChapterAndLesson}`
}

export const useContentRoute = () => {
  const pathName = usePathname()
  return {
    prevLessonPath: getPreviousLessonPath(pathName),
  }
}
