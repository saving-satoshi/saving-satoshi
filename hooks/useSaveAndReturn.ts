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
  const { progress, saveProgress } = useProgressContext()
  const { chapterId, lessonId } = usePathData()

  const chapterLessons = lessons[chapterId]
  const lesson = chapterLessons[lessonId].metadata
  const currentLessonKey = lesson.key

  const saveAndReturn = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey)

    if (account && progress && !isLessonUnlocked(progress, nextLessonKey)) {
      await saveProgress(nextLessonKey)
    }
    router.prefetch(lang + '/chapters#chapter-' + nextLessonKey.charAt(2))
    router.push(lang + '/chapters#chapter-' + nextLessonKey.charAt(2))
  }

  return saveAndReturn
}
