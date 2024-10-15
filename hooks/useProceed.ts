'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  getLessonById,
  getLessonKey,
  getNextLessonUsingChapterIdAndLessonName,
  markLessonAsCompleteAtom,
  nextLessonPathAtom,
  progressToNextLessonAtom,
  syncedCourseProgressAtom,
} from 'state/progressState'

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
  const currentLesson = getLessonById(currentLessonId, courseProgress)

  const Proceed = () => {
    let route
    if (!currentLesson?.completed && nextLessonUsingCurrentRoute) {
      route =
        routes.chaptersUrl + nextLessonUsingCurrentRoute?.path + queryParams
      markLessonAsComplete(currentLessonId)
    } else {
      route =
        routes.chaptersUrl + nextLessonUsingCurrentRoute?.path + queryParams
      progressToNextLesson()
    }
    router.push(route, { scroll: true })
  }

  return Proceed
}
