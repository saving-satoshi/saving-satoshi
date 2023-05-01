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

  const chapterLessons = lessons[chapterId] ? lessons[chapterId] : 'chapter-1'
  const lesson = chapterLessons[lessonId].metadata
  const currentLessonKey = lesson.key

  const saveAndReturn = async () => {
    const nextLessonKey = getNextLessonKey(currentLessonKey)

    if (account && progress && !isLessonUnlocked(progress, nextLessonKey)) {
      await saveProgress(nextLessonKey)
    }
    router.push(
      lang +
        '/chapters#chapter-' +
        (parseInt(currentLessonKey.charAt(2)) + 1).toString()
    )
  }

  return saveAndReturn
}
