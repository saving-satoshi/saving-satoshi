'use client'

import SignIn from 'components/SignIn'
import { chapters, lessons } from 'content'
import { usePathData } from 'hooks'
import {
  getLastUnlockedLessonPath,
  getLessonKey,
  isLessonCompleted,
  isLessonUnlocked,
  keys,
} from 'lib/progress'
import { redirect, useSearchParams } from 'next/navigation'
import { useAuthContext } from 'providers/AuthProvider'
import { Modal, useModalContext } from 'providers/ModalProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import { useEffect, useState } from 'react'
import { Button, Loader } from 'shared'
import { LoadingState } from 'types'

export default function Page({ params }) {
  const searchParams = useSearchParams()
  const devParam = searchParams?.get('dev') || ''
  const dev = devParam === 'true'

  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]
  const modals = useModalContext()
  const pathData = usePathData()

  const { account, isLoading: isAccountLoading } = useAuthContext()
  const { progress, isLoading: isProgressLoading } = useProgressContext()

  const [unlocked, setUnlocked] = useState<number>(LoadingState.Idle)

  const handleSignInClick = () => {
    modals.open(Modal.SignIn)
  }

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

  // If the lesson does not exist, we show this error message.
  if (!(params.lesson in chapterLessons) || !(params.slug in chapters)) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <span className="mb-10 font-nunito text-2xl text-white">
          Sorry, we could not find the ’{params.lesson}’ lesson.
        </span>
        <Button
          href={`/${params.lang}/chapters/${params.slug}/intro-1`}
          size="small"
        >
          &larr; Back to Chapter Overview
        </Button>
      </div>
    )
  }

  const Lesson = chapterLessons[params.lesson].default

  if (dev) {
    return <Lesson lang={params.lang} />
  }

  // If account or progress data is being loaded, we show a loader.
  if (unlocked === LoadingState.Idle || isAccountLoading || isProgressLoading) {
    return (
      <div className="flex grow items-center justify-center">
        <Loader className="h-10 w-10 text-white" />
      </div>
    )
  }

  const lastUnlockedLessonPath = getLastUnlockedLessonPath(progress!)
  const currentLessonPath = `/${pathData.pageId}/${pathData.chapterId}/${pathData.lessonId}`
  const isRestrictedFromLesson = isLessonCompleted(
    getLessonKey(pathData.chapterId, pathData.lessonId),
    progress!
  )

  if (
    unlocked === LoadingState.Failed &&
    lastUnlockedLessonPath !== currentLessonPath &&
    isRestrictedFromLesson
  ) {
    return redirect(lastUnlockedLessonPath)
  }

  return <Lesson lang={params.lang} />
}
