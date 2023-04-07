'use client'

import { chapters, lessons } from 'content'
import { getLastUnlockedLessonPath, isLessonUnlocked } from 'lib/progress'
import { redirect } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'
import { useEffect, useState } from 'react'
import { Button, Loader } from 'shared'

export default function Page({ params }) {
  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]
  const [loading, setLoading] = useState<boolean>(true)

  const { progress, isLoading: isProgressLoading } = useProgressContext()

  useEffect(() => {
    if (progress && !isProgressLoading && params.lesson) {
      const lesson = chapterLessons[params.lesson].metadata

      if (!isLessonUnlocked(progress, lesson.key)) {
        const path = getLastUnlockedLessonPath(progress)

        redirect(path)
      }

      setLoading(false)
    }
  }, [progress, isProgressLoading, params.lesson, chapterLessons])

  if (!(params.lesson in chapterLessons) || !(params.slug in chapters)) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <span className="mb-10 text-4xl text-white">
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

  if (loading) {
    return (
      <div className="flex grow items-center justify-center">
        <Loader />
      </div>
    )
  }

  const Lesson = chapterLessons[params.lesson].default

  return <Lesson lang={params.lang} />
}
