'use client'

import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

import { chapters, lessons } from 'content'
import { useTranslations, useLocalizedRoutes } from 'hooks'

import { notFound, useRouter } from 'next/navigation'
import useEnvironment from 'hooks/useEnvironment'
import { useAtom, useAtomValue } from 'jotai'
import { accountAtom, isAuthLoadingAtom } from 'state/state'
import {
  syncedCourseProgressAtom,
  currentLessonComputedAtom,
  isLessonUnlockedUsingLessonName,
  isLoadingProgressAtom,
  nextLessonAtom,
  getLessonKey,
} from 'state/progressState'

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

  const router = useRouter()
  const routes = useLocalizedRoutes()

  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]
  const [account] = useAtom(accountAtom)
  const [isAccountLoading] = useAtom(isAuthLoadingAtom)
  const isProgressLoading = useAtomValue(isLoadingProgressAtom)
  const currentLesson = useAtomValue(currentLessonComputedAtom)
  const currentLessonKey = getLessonKey(params.slug, params.lesson)
  const nextLesson = useAtomValue(nextLessonAtom)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const isLessonUnlocked = isLessonUnlockedUsingLessonName(
    chapterId,
    params.lesson,
    courseProgress
  )

  const route = routes.chaptersUrl + currentLesson?.path

  useEffect(() => {
    if (!isDevelopment && !isAccountLoading && !isProgressLoading) {
      if (!isLessonUnlocked) {
        if (
          !currentLesson?.completed &&
          currentLessonKey !== currentLesson?.id
        ) {
          console.warn('Lesson locked')
          router.replace(route)
          return
        }

        router.prefetch(routes.chaptersUrl + nextLesson?.path)
      }
    }
  }, [
    isDevelopment,
    isAccountLoading,
    isProgressLoading,
    isLessonUnlocked,
    params.lesson,
    chapterLessons,
    currentLessonKey,
    router,
    routes.chaptersUrl,
    nextLesson,
    account,
    route,
    currentLesson?.completed,
    currentLesson?.id,
  ])

  const Head = () => {
    const lesson = chapterLessons[params.lesson]
    const title = lesson ? t(lesson.metadata.title) : 'Page not found'

    return (
      <Portal id="head">
        <title>{`${title} - Saving Satoshi`}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
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
