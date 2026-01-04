'use client'

import { useRouter } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  getLessonById,
  getLessonKey,
  getNextLessonUsingChapterIdAndLessonName,
  markLessonAsCompleteAtom,
  syncedCourseProgressAtom,
} from 'state/progressState'

export default function useProceed() {
  const { chapterId, lessonId: lessonName } = usePathData()
  const router = useRouter()
  const { isDevelopment } = useEnvironment()
  const routes = useLocalizedRoutes()
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const queryParams = isDevelopment ? '?dev=true' : ''
  const nextLessonUsingCurrentRoute = getNextLessonUsingChapterIdAndLessonName(
    chapterId,
    lessonName,
    courseProgress
  )
  const currentLessonId = getLessonKey(chapterId, lessonName)
  const markLessonAsComplete = useSetAtom(markLessonAsCompleteAtom)
  const currentLesson = getLessonById(currentLessonId, courseProgress)

  const Proceed = () => {
    if (!nextLessonUsingCurrentRoute) return

    const route =
      routes.chaptersUrl + nextLessonUsingCurrentRoute.path + queryParams

    if (!currentLesson?.completed) {
      markLessonAsComplete(currentLessonId)
    }

    router.push(route, { scroll: true })
  }

  return Proceed
}
