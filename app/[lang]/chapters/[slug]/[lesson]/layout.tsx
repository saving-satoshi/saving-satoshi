'use client'

import { useLessonUnlocked } from 'hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from 'components/Navbar'
import { lessons } from 'content'
import { useState, useEffect } from 'react'

export default function Layout({ children, params }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dev = searchParams.get('dev')
  const { slug, lesson: lessonId } = params
  const defaultTheme = 'bg-back'
  const { theme = defaultTheme } = lessons[slug][lessonId].metadata
  const [userInfo, setUserInfo] = useState(undefined)

  useEffect(() => {
    const storedValue = localStorage.getItem('SavingSatoshiUser')
    if (storedValue !== null) {
      setUserInfo(storedValue)
    }
  }, [])

  const result = useLessonUnlocked(userInfo)

  if (typeof result === 'string' && !dev) {
    router.replace(result)
  }

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden drop-shadow-3xl backdrop-blur-4xl">
        <Navbar params={params} />
        {(result === true || dev) && children}
        {(result === false || result === 'string') && !dev && (
          <div className="flex h-full w-full grow flex-col items-center justify-center">
            <span className="mb-10 text-4xl text-white">
              Loading Challenge...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
