import React from 'react'
import { usePathname } from 'next/navigation'
import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

export default function Address() {
  const lang = useLang()
  const t = useTranslations(lang)

  const pathName = usePathname() || ''
  const pathData = pathName.split('/').filter((p) => p)
  const isLessonRoute = pathData.length === 4

  const lessonId = isLessonRoute ? pathData.pop() : undefined
  const chapterId = pathData.pop()

  if (!chapterId || !(chapterId in chapters)) {
    return null
  }

  if (!lessonId || !(lessonId in lessons[chapterId])) {
    return null
  }

  const chapter = chapters[chapterId].metadata
  const chapterLessons = lessons[chapterId]
  const lesson = chapterLessons[lessonId]?.metadata

  const challenges = chapter.lessons
    .map((l) => l.split('-')[0])
    .filter((value, index, arr) => arr.indexOf(value) === index)

  const challengeTitles = chapters[chapterId].metadata.challenges.map(
    (lessonId: string) => {
      const { title } = lessons[chapterId][lessonId].metadata

      return { lessonId, title }
    }
  )

  const challengeName = lessonId?.split('-')[0]
  const challengeIndex = challenges.indexOf(challengeName)
  const lastLessonId = chapter.outros[chapter.outros.length - 1]
  const isChapterCompletePage = lessonId === lastLessonId

  return (
    <div className="flex flex-col justify-center overflow-x-hidden px-5 text-sm font-medium">
      {pathName && (
        <>
          {chapter && (
            <span className="truncate px-0.5 align-sub text-lg leading-tight text-white/50">
              <span>
                {t('navbar.chapter')} {chapter.position + 1}
              </span>
              <>
                <span>, </span>
                <span>
                  {challengeIndex >= 0
                    ? t(challengeTitles[challengeIndex].title)
                    : isChapterCompletePage
                    ? 'Outro'
                    : 'Intro'}
                </span>
              </>
            </span>
          )}
          <span className="truncate px-0.5 align-super text-2xl leading-tight text-white">
            {t(
              isChapterCompletePage
                ? 'navbar.chapter_complete'
                : lesson
                ? lesson.navigation_title
                : 'navbar.intro'
            )}
          </span>
        </>
      )}
    </div>
  )
}
