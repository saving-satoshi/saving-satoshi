'use client'

import {
  isChallengeCompleted,
  isLessonCompleted,
  isLessonUnlocked,
} from 'lib/progress'
import { useEffect, useState } from 'react'

export default function useLessonStatus(
  progress: string | undefined,
  lesson: string
) {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(true)
  const [isPageCompleted, setIsPageCompleted] = useState<boolean>(false)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  useEffect(() => {
    if (!progress) {
      setIsUnlocked(false)
      setIsPageCompleted
      setIsCompleted(false)
      return
    }

    const unlocked = isLessonUnlocked(progress, lesson)
    const pageCompleted = isLessonCompleted(progress, lesson)
    const completed = isChallengeCompleted(progress, lesson)

    setIsUnlocked(unlocked)
    setIsCompleted(completed)
    setIsPageCompleted(pageCompleted)
  }, [progress, lesson])

  return {
    isUnlocked,
    isPageCompleted,
    isCompleted,
  }
}
