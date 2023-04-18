'use client'

import { isChallengeCompleted, isLessonUnlocked } from 'lib/progress'
import { useEffect, useState } from 'react'

export default function useLessonStatus(
  progress: string | undefined,
  lesson: string
) {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  useEffect(() => {
    if (!progress) {
      setIsUnlocked(false)
      setIsCompleted(false)
      return
    }

    const unlocked = isLessonUnlocked(progress, lesson)
    const completed = isChallengeCompleted(progress, lesson)

    setIsUnlocked(unlocked)
    setIsCompleted(completed)
  }, [progress, lesson])

  return {
    isUnlocked,
    isCompleted,
  }
}
