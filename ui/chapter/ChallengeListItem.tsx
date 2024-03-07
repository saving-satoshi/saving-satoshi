import clsx from 'clsx'
import Link from 'next/link'
import { lessons, chapters } from 'content'

import Icon from 'shared/Icon'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import useLessonStatus from 'hooks/useLessonStatus'
import { useProgressContext } from 'contexts/ProgressContext'

export default function ChallengeItem({
  position,
  title,
  chapterId,
  lessonId,
}) {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { progress } = useProgressContext()

  const lessonMetaUnlocked = lessons[chapterId][lessonId].metadata

  const lessonMetaCompleted = lessons[chapterId][lessonId].metadata
  const { isUnlocked } = useLessonStatus(progress, lessonMetaUnlocked.key)
  const { isPageCompleted } = useLessonStatus(progress, lessonMetaCompleted.key)

  const href = `${routes.chaptersUrl}/${chapterId}/${lessonId}`
  const ComponentType = isUnlocked ? Link : 'div'

  return (
    <ComponentType
      href={href}
      className={clsx(
        'justify-left relative flex w-full px-[15px] py-[11px] font-cbrush text-xl transition duration-150 ease-in-out',
        {
          'border-t border-white/25': true,
          'bg-black/15': isUnlocked && !isPageCompleted,
          'hover:bg-black/20': isUnlocked,
        }
      )}
    >
      <span className="pr-1 opacity-50">{position + '. '}</span>
      {t(title)}
      {!isUnlocked && (
        <Icon
          icon="lock"
          className="absolute right-[15px] top-1/2 h-3 w-3 -translate-y-1/2 opacity-25"
        />
      )}
      {isPageCompleted && (
        <Icon
          icon="check"
          className="absolute right-[15px] top-1/2 h-[20px] w-[20px] -translate-y-1/2"
        />
      )}
    </ComponentType>
  )
}
