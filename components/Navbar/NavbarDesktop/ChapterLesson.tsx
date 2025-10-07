import { lessons } from 'content'
import { useLang, usePathData, useTranslations } from 'hooks'
import useEnvironment from 'hooks/useEnvironment'
import { useAtomValue } from 'jotai'
import React from 'react'
import Icon from 'shared/Icon'
import {
  currentChapterAtom,
  isLessonCompletedUsingLessonName,
} from 'state/progressState'
import { CourseProgress } from 'types'

interface ChapterLesson {
  title: string
  id: string
  chapterId: number
  courseProgress: CourseProgress
}
const ChapterLesson = ({
  id,
  title,
  chapterId,
  courseProgress,
}: ChapterLesson) => {
  const lang = useLang()
  const t = useTranslations(lang)
  const { isDevelopment } = useEnvironment()
  const currentChapter = useAtomValue(currentChapterAtom)
  const { lessonId: lessonName } = usePathData()
  const slug = `chapter-${chapterId}`
  const link = `/${lang}/chapters/${slug}/${id}${
    isDevelopment ? '?dev=true' : ''
  }`
  const navigationTitle = lessons[slug]?.[id]?.metadata.navigation_title
  const completed = isLessonCompletedUsingLessonName(
    `chapter-${chapterId}`,
    id,
    courseProgress
  )

  const currentLesson = id === lessonName && currentChapter === chapterId

  return (
    <div className="flex items-center gap-2.5 px-3.5 py-2.5">
      {completed || isDevelopment ? (
        <>
          <Icon icon="check" className="h-5 w-5" />
          <a href={link} className="font-nunito text-[19px] opacity-75">
            {t(`${navigationTitle}`)}
          </a>
        </>
      ) : currentLesson ? (
        <>
          <Icon
            icon="arrowFacetRight"
            className="w-5 cursor-not-allowed opacity-100"
          />
          <p className="cursor-not-allowed font-nunito text-[19px] opacity-100">
            {t(`${navigationTitle}`)}
          </p>
        </>
      ) : (
        <>
          <Icon icon="lock" className="w-2.5 cursor-not-allowed opacity-50" />
          <p className="cursor-not-allowed font-nunito text-[19px] opacity-50">
            {t(`${navigationTitle}`)}
          </p>
        </>
      )}
    </div>
  )
}

export default ChapterLesson
