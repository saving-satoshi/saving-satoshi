'use client'

import { useLessonUnlocked } from 'hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const router = useRouter()
  const result = useLessonUnlocked()
  const [displayLesson, setDisplayLesson] = useState<boolean>(false)

  useEffect(() => {
    if (typeof result === 'string') {
      router.replace(result)
    }
    setDisplayLesson(true)
  }, [])

  return displayLesson ? (
    <div className="flex grow flex-col">{children}</div>
  ) : (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <span className="mb-10 text-4xl text-white">Loading Challenge...</span>
    </div>
  )
}
