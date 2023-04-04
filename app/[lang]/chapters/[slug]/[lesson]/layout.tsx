'use client'

import { useLessonUnlocked, useLocalStorage } from 'hooks'
import { useRouter } from 'next/navigation'
import Navbar from 'components/Navbar'
import { lessons } from 'content'

export default function Layout({ children, params }) {
  const router = useRouter()
  const userInfo = useLocalStorage('SavingSatoshiUser')
  const { slug, lesson: lessonId } = params
  const defaultTheme = 'bg-back'
  const { theme = defaultTheme } = lessons[slug][lessonId].metadata

  const result = useLessonUnlocked(userInfo)

  if (typeof result === 'string') {
    router.replace(result)
  }

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden drop-shadow-3xl backdrop-blur-4xl">
        <Navbar params={params} />
        {result === true && children}
        {(result === false || result === 'string') && (
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
