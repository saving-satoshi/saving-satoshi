'use client'

import { useRouter } from 'next/navigation'
import { useLocalizedRoutes, usePathData } from 'hooks'
import { useAtomValue } from 'jotai'
import {
  currentChapterAtom,
  syncedCourseProgressAtom,
} from 'state/progressState'

export default function useSaveAndReturn() {
  const { chaptersUrl } = useLocalizedRoutes()
  const router = useRouter()
  const { chapterId } = usePathData()
  const chapterIdAtom = useAtomValue(currentChapterAtom)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)

  const saveAndReturn = async () => {
    //needs to have different behavior from logging in vs a continue button as the progress is updated at different points of the render
    router.push(
      `${chaptersUrl}#chapter-${
        courseProgress.chapters.find((chapter) => !chapter.completed)?.id !==
        Number(chapterId?.substring(chapterId?.length - 1))
          ? courseProgress.chapters.find((chapter) => !chapter.completed)?.id
          : chapterIdAtom + 1
      }`
    )
  }

  return saveAndReturn
}
