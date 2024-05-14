'use client'

import { getNextLessonKey, isLessonUnlocked, getChapterKey } from 'lib/progress'
import { useRouter } from 'next/navigation'
import { usePathData, useLocalizedRoutes } from 'hooks'
import { lessons } from 'content'
import { useAtom } from 'jotai'
import { accountAtom, progressAtom } from 'state/state'
import { useProgressFunctions } from 'state/ProgressFunctions'

export default function useSaveAndReturn() {
  const { chaptersUrl } = useLocalizedRoutes()
  const router = useRouter()
  const [account] = useAtom(accountAtom)
  const [progress] = useAtom(progressAtom)
  const { saveProgress, saveProgressLocal } = useProgressFunctions()

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
