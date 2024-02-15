'use client'

import { getNextLessonPath } from 'lib/progress'
import { useRouter } from 'next/navigation'
import { usePathData, useLocalizedRoutes } from 'hooks'
import { lessons } from 'content'
import useEnvironment from './useEnvironment'

export default function useProceed() {
  const router = useRouter()
  const { chapterId, lessonId } = usePathData()
  const { isDevelopment } = useEnvironment()
  const routes = useLocalizedRoutes()

  const chapterLessons = lessons?.[chapterId]

  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = lesson?.key ?? 'CH1INT1'
  const queryParams = isDevelopment ? '?dev=true' : ''

  const Proceed = async () => {
    const nextLessonPath = getNextLessonPath(currentLessonKey)
    const route = routes.chaptersUrl + nextLessonPath + queryParams

    router.push(route, { scroll: true })
  }

  return Proceed
}
