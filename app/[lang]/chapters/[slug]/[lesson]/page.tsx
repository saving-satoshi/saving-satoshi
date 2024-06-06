'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { chapters, lessons } from 'content'
import { usePathData, useTranslations, useLocalizedRoutes } from 'hooks'
import {
  chaptersWithDifficulty,
  getLastUnlockedLessonPath,
  getLessonKey,
  getNextLessonPath,
  isLessonUnlocked,
  keys,
} from 'lib/progress'

import { LoadingState } from 'types'
import { notFound, useRouter } from 'next/navigation'
import useEnvironment from 'hooks/useEnvironment'
import { useAtom } from 'jotai'
import {
  accountAtom,
  DifficultyLevel,
  difficultyLevelAtom,
  isAuthLoadingAtom,
  isLoadingProgressAtom,
  Modal,
  progressAtom,
} from 'state/state'
import { useProgressFunctions } from 'state/ProgressFunctions'
import { useModalFunctions } from 'state/ModalFunctions'

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
  const pathData = usePathData()
  const [account] = useAtom(accountAtom)
  const [isAccountLoading] = useAtom(isAuthLoadingAtom)
  const [progress] = useAtom(progressAtom)
  const [isProgressLoading] = useAtom(isLoadingProgressAtom)
  const { saveProgress, saveProgressLocal } = useProgressFunctions()

  const currentLessonKey = getLessonKey(pathData.chapterId, pathData.lessonId)
  const lastUnlockedLessonPath = getLastUnlockedLessonPath(progress.progress)
  const nextLessonPath = getNextLessonPath(currentLessonKey)
  const route = routes.chaptersUrl + lastUnlockedLessonPath

  const [unlocked, setUnlocked] = useState<number>(LoadingState.Idle)
  const [difficulty] = useAtom(difficultyLevelAtom)
  const { open, close } = useModalFunctions()
  console.log('chapterId', chapterId)
  console.log('difficulty level', difficulty)
  if (
    chaptersWithDifficulty.includes(chapterId) &&
    difficulty === DifficultyLevel.NOT_SELECTED
  ) {
    console.log('got here')
    // Show a modal asking to select difficulty level
    open(Modal.Difficulty)
  } else {
    close(Modal.Difficulty)
  }

  useEffect(() => {
    if (!isDevelopment && !isAccountLoading && !isProgressLoading) {
      if (progress.progress && params.lesson) {
        const lesson = chapterLessons[params.lesson]?.metadata ?? false
        const lessonUnlocked = isLessonUnlocked(progress.progress, lesson.key)
        if (
          !isDevelopment &&
          keys.indexOf(currentLessonKey) > keys.indexOf(progress.progress) + 1
        ) {
          console.warn('Lesson locked')
          router.replace(route)
          return
        }
        setUnlocked(lessonUnlocked ? LoadingState.Success : LoadingState.Failed)

        router.prefetch(routes.chaptersUrl + nextLessonPath)

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
    isDevelopment,
    isAccountLoading,
    isProgressLoading,
    progress,
    params.lesson,
    chapterLessons,
    currentLessonKey,
    router,
    routes.chaptersUrl,
    nextLessonPath,
    account,
    saveProgressLocal,
    route,
    saveProgress,
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
