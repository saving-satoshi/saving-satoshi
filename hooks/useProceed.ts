'use client'

import React from 'react'
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

  const route = React.useMemo(() => {
    if (
      (isDevelopment || currentLesson?.completed) &&
      nextLessonUsingCurrentRoute
    ) {
      return (
        routes.chaptersUrl + nextLessonUsingCurrentRoute?.path + queryParams
      )
    } else {
      return routes.chaptersUrl + nextLessonPath + queryParams
    }
  }, [
    isDevelopment,
    currentLesson,
    nextLessonUsingCurrentRoute,
    routes.chaptersUrl,
    nextLessonPath,
    queryParams,
  ])

  React.useEffect(() => {
    console.log('prefetching', route)
    router.prefetch(route)
  }, [route, router])

  const Proceed = React.useCallback(() => {
    if (
      (isDevelopment || currentLesson?.completed) &&
      nextLessonUsingCurrentRoute
    ) {
      markLessonAsComplete(currentLessonId)
    } else {
      progressToNextLesson()
    }
    router.push(route, { scroll: true })
  }, [
    isDevelopment,
    currentLesson,
    nextLessonUsingCurrentRoute,
    markLessonAsComplete,
    currentLessonId,
    progressToNextLesson,
    router,
    route,
  ])

  return Proceed
}
