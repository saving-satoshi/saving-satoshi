'use client'

import { useEffect, useState } from 'react'

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
import Client from 'components/Client'
import NumericInput from 'components/Util/NumericInput'

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

  // For testing of NumericInput. TO BE REMOVED
  const [value, setValue] = useState(0)

  function handleKeyDown(value) {
    console.log(value)
  }
  //^^TO BE REMOVED

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
  const currentLessonPath = `/${pathData.pageId}/${pathData.chapterId}/${pathData.lessonId}`
  const isRestrictedFromLesson = !isLessonCompleted(
    getLessonKey(pathData.chapterId, pathData.lessonId),
    progress
  )

  if (
    unlocked === LoadingState.Failed &&
    lastUnlockedLessonPath !== currentLessonPath &&
    isRestrictedFromLesson
  ) {
    return navigation.redirect(lastUnlockedLessonPath)
  }

  return (
    unlocked && (
      <>
        <Head />
        {/* FOR TESTING. TO BE REMOVED */}
        {/* Controlled Component */}
        <NumericInput
          label={'Controlled'}
          value={value}
          onChange={setValue}
          onKeyDown={handleKeyDown}
        />
        {/* Uncontrolled Component */}
        <NumericInput label={'Uncontrolled'} defaultValue={20} />
        <Lesson lang={params.lang} />
      </>
    )
  )
}
