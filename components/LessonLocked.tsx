'use client'

import { useLessonUnlocked } from 'hooks'
import { Button } from 'shared'
import { useState, useEffect } from 'react'

export default function LessonLocked({ children }) {
  useEffect(() => {
    setHydrated(true)
  }, [])
  const [hydrated, setHydrated] = useState(false)
  const result = useLessonUnlocked()
  if (result === true) {
    return children
  } else if (typeof result === 'string') {
    return (
      hydrated && (
        <div className="flex h-full w-full grow flex-col items-center justify-center">
          <span className="mb-10 text-4xl text-white">
            This part of the chapter is currently locked!
          </span>
          <Button href={result} size="small">
            &larr; Back to Last Unlocked Lesson
          </Button>
        </div>
      )
    )
  }
}
