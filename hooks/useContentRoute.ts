import { useRouter, usePathname } from 'next/navigation'
import { chapters } from 'content'
import { useUser } from 'hooks'
import { setUserProgress } from 'lib/user'

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

const checkChallengeAllowed = (pathName, user, router) => {
  const { chapterId, lessonId } = getPathData(pathName)
  let lessonArray = chapters[chapterId].metadata.lessons

  const currentLessonIndex = lessonArray.indexOf(lessonId)

  const userFinalLesson = user?.progress?.lesson
  const userFinalLessonIndex = lessonArray.indexOf(userFinalLesson)

  const result = currentLessonIndex - userFinalLessonIndex > 0 ? false : true
  if (!result) {
    router.push(`/chapters/${chapterId}/${userFinalLesson}`)
  }
  return result
}

const handleNextPathProgress = (path) => () => {
  const pathArray = path.split('/').filter((p) => p)
  const [, chapterId, lessonId] = pathArray
  setUserProgress(chapterId, lessonId)
}

export const useContentRoute = () => {
  const pathName = usePathname()
  const { user } = useUser()
  const router = useRouter()

  return {
    getChaptersPath: () => getChaptersPath(pathName),
    checkChallengeAllowed: () => checkChallengeAllowed(pathName, user, router),
    handleNextPathProgress,
  }
}
