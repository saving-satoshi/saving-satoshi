'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  getNextLessonPathUsingChapterIdAndLessonName,
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
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const progressToNextLesson = useSetAtom(progressToNextLessonAtom)
  const queryParams = isDevelopment ? '?dev=true' : ''
  const nextLessonPathUsingCurrentRoute =
    getNextLessonPathUsingChapterIdAndLessonName(
      chapterId,
      lessonName,
      courseProgress
    )
  const Proceed = () => {
    let route
    if (isDevelopment) {
      route = routes.chaptersUrl + nextLessonPathUsingCurrentRoute + queryParams
    } else {
      route = routes.chaptersUrl + nextLessonPath + queryParams
    }
    progressToNextLesson()
    router.push(route, { scroll: true })
  }

  return Proceed
}
