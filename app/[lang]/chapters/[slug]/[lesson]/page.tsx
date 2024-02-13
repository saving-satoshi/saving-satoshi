'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { chapters, lessons } from 'content'
import { usePathData, useTranslations, useLocalizedRoutes } from 'hooks'
import {
  getLastUnlockedLessonPath,
  getLessonKey,
  isLessonUnlocked,
  keys,
} from 'lib/progress'

import * as navigation from 'next/navigation'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import { LoadingState } from 'types'
import { notFound } from 'next/navigation'
import useEnvironment from 'hooks/useEnvironment'

const Portal = ({ children, id }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.getElementById(id)) : null
}

export default function Page({ params }) {
  const { isDevelopment } = useEnvironment()
  const t = useTranslations(params.lang)

  const routes = useLocalizedRoutes()

  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]
  const pathData = usePathData()

  const { account, isLoading: isAccountLoading } = useAuthContext()
  const {
    progress,
    isLoading: isProgressLoading,
    saveProgress,
    saveProgressLocal,
  } = useProgressContext()

  const currentLessonKey = getLessonKey(pathData.chapterId, pathData.lessonId)
  const lastUnlockedLessonPath = getLastUnlockedLessonPath(progress)
  const route = routes.chaptersUrl + lastUnlockedLessonPath

  const [unlocked, setUnlocked] = useState<number>(LoadingState.Idle)

  useEffect(() => {
    if (!isAccountLoading && !isProgressLoading) {
      if (progress && params.lesson) {
        const lesson = chapterLessons[params.lesson]?.metadata ?? false
        const lessonUnlocked = isLessonUnlocked(progress, lesson.key)
        if (
          !isDevelopment &&
          keys.indexOf(currentLessonKey) > keys.indexOf(progress) + 1
        ) {
          console.warn('Lesson locked')
          return navigation.redirect(route)
        }
        setUnlocked(lessonUnlocked ? LoadingState.Success : LoadingState.Failed)

        if (account) {
          saveProgress(currentLessonKey)
        } else {
          saveProgressLocal(currentLessonKey)
        }
      } else {
        setUnlocked(LoadingState.Failed)
      }
    }
  }, [
    progress,
    params.lesson,
    chapterLessons,
    chapterId,
    isAccountLoading,
    isProgressLoading,
  ])

  const Head = () => {
    const lesson = chapterLessons[params.lesson]
    const title = lesson ? t(lesson.metadata.title) : 'Page not found'

    return (
      <Portal id="head">
        <title>{`${title} - Saving Satoshi`}</title>
      </Portal>
    )
  }

  // If the lesson does not exist, we show this error message.
  if (
    (chapterLessons && !(params.lesson in chapterLessons)) ||
    !(params.slug in chapters)
  ) {
    return notFound()
  }

  const Lesson = chapterLessons[params.lesson].default

  return (
    <>
      <Head />
      <Lesson lang={params.lang} />
    </>
  )
}
