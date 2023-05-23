'use client'

import { useEffect, useState } from 'react'

import { chapters, lessons } from 'content'
import { usePathData, useTranslations } from 'hooks'
import {
  getLastUnlockedLessonPath,
  getLessonKey,
  getNextLessonKey,
  isLessonCompleted,
  isLessonUnlocked,
  keys,
} from 'lib/progress'

import * as navigation from 'next/navigation'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import { Loader } from 'shared'
import { LoadingState } from 'types'
import { notFound } from 'next/navigation'
import Client from 'components/Client'

export default function Page({ params }) {
  const searchParams = navigation.useSearchParams()
  const devParam = searchParams?.get('dev') || ''
  const dev = devParam === 'true'
  const t = useTranslations(params.lang)

  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]
  const pathData = usePathData()

  const { isLoading: isAccountLoading } = useAuthContext()
  const { progress, isLoading: isProgressLoading } = useProgressContext()

  const [unlocked, setUnlocked] = useState<number>(LoadingState.Idle)

  useEffect(() => {
    if (!isAccountLoading && !isProgressLoading) {
      if (progress && params.lesson) {
        const lesson = chapterLessons[params.lesson]?.metadata ?? false
        const lessonUnlocked = isLessonUnlocked(progress, lesson.key)
        setUnlocked(lessonUnlocked ? LoadingState.Success : LoadingState.Failed)
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
      <Client>
        <head>
          <title>{`${title} - Saving Satoshi`}</title>
        </head>
      </Client>
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

  if (dev) {
    return (
      <>
        <Head />
        <Lesson lang={params.lang} />
      </>
    )
  }

  // If account or progress data is being loaded, we show a loader.
  if (unlocked === LoadingState.Idle || isAccountLoading || isProgressLoading) {
    return (
      <>
        <Head />
        <div className="flex grow items-center justify-center">
          <Loader className="h-10 w-10 text-white" />
        </div>
      </>
    )
  }

  const lastUnlockedLessonPath = getLastUnlockedLessonPath(progress)
  const nextLessonKey = getNextLessonKey(
    getLessonKey(pathData.chapterId, pathData.lessonId)
  )
  const isRestrictedFromLesson = !isLessonCompleted(
    progress,
    getLessonKey(pathData.chapterId, pathData.lessonId)
  )

  if (
    unlocked === LoadingState.Failed &&
    keys.indexOf(progress) <= keys.indexOf(nextLessonKey) - 1 &&
    isRestrictedFromLesson
  ) {
    return navigation.redirect(lastUnlockedLessonPath)
  }

  return (
    unlocked && (
      <>
        <Head />
        <Lesson lang={params.lang} />
      </>
    )
  )
}
