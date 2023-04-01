'use client'

import { useLessonUnlocked } from 'hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from 'components/Navbar'
import { lessons } from 'content'

export default function Layout({ children, params }) {
  const router = useRouter()
  const result = useLessonUnlocked()
  const [displayLesson, setDisplayLesson] = useState<boolean>(false)
  const { slug, lesson: lessonId } = params
  const defaultTheme = 'bg-back'
  const { theme = defaultTheme } = lessons[slug][lessonId].metadata

  useEffect(() => {
    if (typeof result === 'string') {
      router.replace(result)
    } else {
      setDisplayLesson(result)
    }
  }, [result])

  return displayLesson ? (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden drop-shadow-3xl backdrop-blur-4xl">
        <Navbar params={params} />
        {children}
      </div>
    </div>
  ) : (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <span className="mb-10 text-4xl text-white">Loading Challenge...</span>
    </div>
  )
}
