'use client'

import { getNextLessonKey, isLessonUnlocked, getChapterKey } from 'lib/progress'
import { useRouter } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { usePathData, useLocalizedRoutes } from 'hooks'
import { lessons } from 'content'
import { useAuthContext } from 'providers/AuthProvider'

export default function useSaveAndReturn() {
  const { chaptersUrl } = useLocalizedRoutes()
  const router = useRouter()
  const { account } = useAuthContext()
  const { progress, saveProgress, saveProgressLocal } = useProgressContext()

  const { chapterId, lessonId } = usePathData()
  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = lesson?.key ?? 'CH1INT1'

  const saveAndReturn = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey, account)
    const chapterKey = getChapterKey(nextLessonKey)

    if (progress && !isLessonUnlocked(progress, nextLessonKey)) {
      if (account) {
        await saveProgress(nextLessonKey)
      }
      await saveProgressLocal(nextLessonKey)
    }
    router.push(`${chaptersUrl}#${chapterKey}`)
  }

  return saveAndReturn
}
