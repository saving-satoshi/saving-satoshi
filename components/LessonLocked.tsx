'use client'

import { useLessonUnlocked } from 'hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LessonLocked({ children }) {
  const router = useRouter()
  const result = useLessonUnlocked()
  const [lessonContent, setLessonContent] = useState(
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <span className="mb-10 text-4xl text-white">Loading Challenge...</span>
    </div>
  )

  useEffect(() => {
    if (typeof result === 'string') {
      router.replace(result)
    } else {
      setLessonContent(children)
    }
  }, [])

  return lessonContent
}
