'use client'

import { useEffect, useState } from 'react'

import SignIn from 'components/SignIn'
import { chapters, lessons } from 'content'
import { usePathData, useTranslations } from 'hooks'
import {
  getLastUnlockedLessonPath,
  getLessonKey,
  isLessonCompleted,
  isLessonUnlocked,
} from 'lib/progress'

import * as navigation from 'next/navigation'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import { Loader } from 'shared'
import { LoadingState } from 'types'
import { notFound } from 'next/navigation'

export default function Page({ params }) {
  const searchParams = navigation.useSearchParams()
  const devParam = searchParams?.get('dev') || ''
  const dev = devParam === 'true'
  const t = useTranslations(params.lang)

  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]
  const pathData = usePathData()

  const { account, isLoading: isAccountLoading } = useAuthContext()
  const { progress, isLoading: isProgressLoading } = useProgressContext()

  const [unlocked, setUnlocked] = useState<number>(LoadingState.Idle)
  const [hydrated, setHydrated] = useState(false)

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
    setHydrated(true)
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
      <head>
        <title>{`${title} - Saving Satoshi`}</title>
      </head>
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
      hydrated && (
        <>
          <Head />
          <Lesson lang={params.lang} />
        </>
      )
    )
  }

  // If account or progress data is being loaded, we show a loader.
  if (unlocked === LoadingState.Idle || isAccountLoading || isProgressLoading) {
    return (
      hydrated && (
        <>
          <Head />
          <div className="flex grow items-center justify-center">
            <Loader className="h-10 w-10 text-white" />
          </div>
        </>
      )
    )
  }

  const lastUnlockedLessonPath = getLastUnlockedLessonPath(progress!)
  const currentLessonPath = `/${pathData.pageId}/${pathData.chapterId}/${pathData.lessonId}`
  const isRestrictedFromLesson = !isLessonCompleted(
    getLessonKey(pathData.chapterId, pathData.lessonId),
    progress ?? 'CH1INT1'
  )

  if (
    unlocked === LoadingState.Failed &&
    lastUnlockedLessonPath !== currentLessonPath &&
    isRestrictedFromLesson
  ) {
    return navigation.redirect(lastUnlockedLessonPath)
  }

  return (
    hydrated &&
    unlocked && (
      <>
        <Head />
        <Lesson lang={params.lang} />
      </>
    )
  )
}
