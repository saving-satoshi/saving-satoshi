'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
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

  const Proceed = () => {
    console.log('Proceeding to next lesson')
    let route
    console.log('nextLessonUsingCurrentRoute', nextLessonUsingCurrentRoute)
    console.log('development', isDevelopment)
    if (isDevelopment && nextLessonUsingCurrentRoute) {
      route =
        routes.chaptersUrl + nextLessonUsingCurrentRoute?.path + queryParams
      markLessonAsComplete(currentLessonId)
    } else {
      route = routes.chaptersUrl + nextLessonPath + queryParams
      progressToNextLesson()
    }
    router.push(route, { scroll: true })
  }

  return Proceed
}
