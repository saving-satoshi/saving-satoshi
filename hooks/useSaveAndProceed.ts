'use client'

import {
  getNextLessonKey,
  getNextLessonPath,
  isLessonUnlocked,
} from 'lib/progress'
import { useRouter } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { usePathData, useLocalizedRoutes } from 'hooks'
import { lessons } from 'content'
import { useAuthContext } from 'providers/AuthProvider'
import useEnvironment from './useEnvironment'

export default function useSaveAndProceed() {
  const router = useRouter()
  const { account } = useAuthContext()
  const { progress, saveProgress, saveProgressLocal } = useProgressContext()
  const { chapterId, lessonId } = usePathData()
  const { isDevelopment } = useEnvironment()
  const routes = useLocalizedRoutes()

  const chapterLessons = lessons?.[chapterId]

  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = lesson?.key ?? 'CH1INT1'
  const queryParams = isDevelopment ? '?dev=true' : ''

  const saveAndProceed = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey, account)
    const nextLessonPath = getNextLessonPath(currentLessonKey)
    const route = routes.chaptersUrl + nextLessonPath + queryParams

    if (progress && !isLessonUnlocked(progress, nextLessonKey)) {
      if (account) {
        await saveProgress(nextLessonKey)
      } else {
        await saveProgressLocal(nextLessonKey)
      }
    }
    router.push(route, { scroll: true })
  }

  return saveAndProceed
}
