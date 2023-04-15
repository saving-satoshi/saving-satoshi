'use client'

import {
  getNextLessonKey,
  getNextLessonPath,
  isLessonUnlocked,
} from 'lib/progress'
import { useRouter } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { usePathData } from './usePathData'
import { lessons } from 'content'
import { useAuthContext } from 'providers/AuthProvider'

export const useSaveAndProceed = () => {
  const router = useRouter()
  const { account } = useAuthContext()
  const { progress, saveProgress } = useProgressContext()
  const { chapterId, lessonId } = usePathData()

  const chapterLessons = lessons[chapterId]
  const lesson = chapterLessons[lessonId].metadata
  const currentLessonKey = lesson.key

  const saveAndProceed = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey)
    const nextLessonPath = getNextLessonPath(currentLessonKey)

    if (account && !isLessonUnlocked(progress, nextLessonKey)) {
      await saveProgress(nextLessonKey)
    }

    router.push(nextLessonPath)
  }

  return saveAndProceed
}
