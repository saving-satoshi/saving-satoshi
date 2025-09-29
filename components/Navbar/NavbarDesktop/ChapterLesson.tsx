import { lessons } from 'content'
import { useLang, useTranslations } from 'hooks'
import { useAtomValue } from 'jotai'
import React from 'react'
import Icon from 'shared/Icon'
import {
  getLessonById,
  getLessonKey,
  syncedCourseProgressAtom,
} from 'state/progressState'

interface ChapterLesson {
  title: string
  id: string
  chapterId: number
}
const ChapterLesson = ({ id, title, chapterId }: ChapterLesson) => {
  const lang = useLang()
  const t = useTranslations(lang)
  const slug = `chapter-${chapterId}`
  const navigationTitle = lessons[slug]?.[id]?.metadata.navigation_title

  return (
    <div className="flex items-center gap-2.5 px-3.5 py-2.5">
      <Icon icon="check" className="h-5 w-5" />
      <p className="font-nunito text-[19px]">{t(`${navigationTitle}`)}</p>
    </div>
  )
}

export default ChapterLesson
