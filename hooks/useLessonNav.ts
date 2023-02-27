import { usePathname } from 'next/navigation'
import { chapters } from 'content'

const handlePath = (pathName: string) => {
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

const writePrevLessonPath = (pathName) => {
  const { lang, chapterId, lessons, indexOfCurrentLesson } =
    handlePath(pathName)

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

export const useLessonNav = () => {
  const pathName = usePathname()
  return {
    prevLessonPath: writePrevLessonPath(pathName),
  }
}
