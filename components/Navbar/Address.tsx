import React from 'react'
import { usePathname } from 'next/navigation'
import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

export default function Address() {
  const lang = useLang()
  const t = useTranslations(lang)

  const pathName = usePathname()
  const pathData = pathName.split('/').filter((p) => p)
  const isLessonRoute = pathData.length === 4

  const lessonId = isLessonRoute ? pathData.pop() : undefined
  const chapterId = pathData.pop()

  const chapter = chapters[chapterId]?.metadata
  const lesson = lessons[lessonId]?.metadata

  return (
    <div className="items-center px-5 py-3">
      <div className="flex flex-col text-sm font-medium">
        {pathName && (
          <>
            {chapter && (
              <p className="px-0.5 text-lg leading-none text-white/50">
                Chapter {chapter.position + 1} - {t(chapter.title)}
              </p>
            )}
            <p className="px-0.5 text-2xl leading-none text-white">
              {lesson ? t(lesson.title) : 'Intro'}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
