'use client'

import { useRouter } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { syncedCourseProgressAtom } from 'state/progress/atoms'
import { nextLessonPathAtom } from 'state/progress/selectors'
import {
  markLessonAsCompleteAtom,
  progressToNextLessonAtom,
} from 'state/progress/actions'
import {
  getLessonKey,
  getNextLessonUsingChapterIdAndLessonName,
  isLessonCompletedUsingId,
} from 'state/progress/utils'

export default function useProceed() {
  const { chapterId, lessonId: lessonName } = usePathData()
  const router = useRouter()
  const { isDevelopment } = useEnvironment()
  const routes = useLocalizedRoutes()
  const nextLessonPath = useAtomValue(nextLessonPathAtom)
  const [courseProgress, setCourseProgress] = useAtom(syncedCourseProgressAtom)
  const progressToNextLesson = useSetAtom(progressToNextLessonAtom)
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
    console.log(route, nextLessonUsingCurrentRoute?.path)
    router.push(route, { scroll: true })
  }

  return Proceed
}
