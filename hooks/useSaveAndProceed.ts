'use client'

import {
  getNextLessonKey,
  getNextLessonPath,
  isLessonUnlocked,
} from 'lib/progress'
import { useRouter } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { usePathData, useLang } from 'hooks'
import { lessons } from 'content'
import { useAuthContext } from 'providers/AuthProvider'

export default function useSaveAndProceed() {
  const lang = useLang()
  const router = useRouter()
  const { account } = useAuthContext()
  const { progress, saveProgress, saveProgressLocal } = useProgressContext()
  const { chapterId, lessonId } = usePathData()

  const chapterLessons = lessons[chapterId]
  const lesson = chapterLessons[lessonId].metadata
  const currentLessonKey = lesson.key

  const saveAndProceed = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey)
    const nextLessonPath = getNextLessonPath(currentLessonKey)

    if (progress && !isLessonUnlocked(progress, nextLessonKey)) {
      if (account) {
        await saveProgress(nextLessonKey)
      } else {
        await saveProgressLocal(nextLessonKey)
      }
    }

    router.push(lang + '/' + nextLessonPath)
  }

  return saveAndProceed
}
