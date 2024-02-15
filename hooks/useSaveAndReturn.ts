'use client'

import { getNextLessonKey, isLessonUnlocked, getChapterKey } from 'lib/progress'
import { useRouter } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { useLocalizedRoutes } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'

export default function useSaveAndReturn() {
  const { chaptersUrl } = useLocalizedRoutes()
  const router = useRouter()
  const { account } = useAuthContext()
  const { progress, saveProgress, saveProgressLocal } = useProgressContext()

  const saveAndReturn = async () => {
    const nextLessonKey = getNextLessonKey(progress, account)
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
