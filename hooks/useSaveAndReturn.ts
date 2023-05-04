'use client'

import { getNextLessonKey, isLessonUnlocked } from 'lib/progress'
import { useRouter } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { usePathData, useLang } from 'hooks'
import { lessons } from 'content'
import { useAuthContext } from 'providers/AuthProvider'

export default function useSaveAndReturn() {
  const lang = useLang()
  const router = useRouter()
  const { account } = useAuthContext()
  const { progress, saveProgress, saveProgressLocal } = useProgressContext()
  const { chapterId, lessonId } = usePathData()

  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = lesson?.key ?? 'CH1INT1'

  const saveAndReturn = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey)

    if (progress && !isLessonUnlocked(progress, nextLessonKey)) {
      if (account) {
        await saveProgress(nextLessonKey)
      } else {
        await saveProgressLocal(nextLessonKey)
      }
    }

    router.push(
      lang +
        '/chapters#chapter-' +
        (parseInt(currentLessonKey.charAt(2)) + 1).toString()
    )
  }

  return saveAndReturn
}
