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

  if (
    (chapterId && !(chapterId in chapters)) ||
    (lessonId && !(lessonId in lessons))
  ) {
    return null
  }

  const chapter =
    chapterId !== undefined ? chapters[chapterId]?.metadata : 'chapter-1'
  const chapterLessons = chapterId !== undefined ? lessons[chapterId] : null
  const lesson =
    lessonId !== undefined ? chapterLessons[lessonId].metadata : null

  const challenges = chapter.lessons
    .map((l) => l.split('-')[0])
    .filter((value, index, arr) => arr.indexOf(value) === index)

  const challengeName = lessonId?.split('-')[0]
  const challengeIndex = challenges.indexOf(challengeName)
  const lastLessonId = chapter.outros[chapter.outros.length - 1]
  const isChapterCompletePage = lessonId === lastLessonId

  return (
    <div className="items-center px-5 py-3">
      <div className="flex flex-col text-sm font-medium">
        {pathName && (
          <>
            {chapter && (
              <p className="px-0.5 text-lg leading-none text-white/50">
                <span>
                  {t('navbar.chapter')} {chapter.position + 1}
                </span>
                {lesson && !isChapterCompletePage && challengeIndex >= 0 && (
                  <>
                    <span>, </span>
                    <span>
                      {t('navbar.challenge')} {challengeIndex + 1}
                    </span>
                  </>
                )}
              </p>
            )}
            <p className="px-0.5 text-2xl leading-none text-white">
              {t(
                isChapterCompletePage
                  ? 'navbar.chapter_complete'
                  : lesson
                  ? lesson.title
                  : 'navbar.intro'
              )}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
