'use client'

import { useRouter } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  getLessonKey,
  getNextLessonUsingChapterIdAndLessonName,
  isLessonCompletedUsingId,
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
  const isCurrentLessonCompleted = currentLessonId
    ? isLessonCompletedUsingId(currentLessonId, courseProgress)
    : false

  const Proceed = () => {
    if (!nextLessonUsingCurrentRoute) return
    let route
    if (!isCurrentLessonCompleted) {
      route =
        routes.chaptersUrl + nextLessonUsingCurrentRoute?.path + queryParams
      if (currentLessonId) {
        markLessonAsComplete(currentLessonId)
      }
    } else {
      route =
        routes.chaptersUrl + nextLessonUsingCurrentRoute?.path + queryParams
      progressToNextLesson()
    }

    router.push(route, { scroll: true })
  }

  return Proceed
}
