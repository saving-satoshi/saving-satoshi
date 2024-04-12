import clsx from 'clsx'
import Link from 'next/link'
import { lessons } from 'content'

import Icon from 'shared/Icon'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import useLessonStatus from 'hooks/useLessonStatus'
import { useProgressContext } from 'contexts/ProgressContext'
import { usePathname } from 'next/navigation'

export default function ChallengeItem({
  position,
  title,
  chapterId,
  lessonId,
  lessonPage,
}) {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { progress } = useProgressContext()
  const pathName = usePathname() || ''

  const lessonMetaUnlocked = lessons[chapterId][lessonId].metadata

  const lessonMetaCompleted = lessons[chapterId][lessonId].metadata
  const { isUnlocked } = useLessonStatus(progress, lessonMetaUnlocked.key)
  const { isPageCompleted } = useLessonStatus(progress, lessonMetaCompleted.key)

  const href = `${routes.chaptersUrl}/${chapterId}/${lessonId}`
  const ComponentType = isUnlocked ? Link : 'div'

  const currentLesson = pathName.split('/').pop()

  return (
    <ComponentType
      href={href}
      className={clsx(
        'justify-left flex items-center px-[15px] py-[11px] pl-5 text-center transition duration-100 ease-in-out',
        {
          'bg-black/20 text-white/100':
            (!lessonPage && isUnlocked && !isPageCompleted) ||
            (lessonPage && currentLesson === lessonId),
          'text-white/75':
            (!lessonPage && isPageCompleted) ||
            isUnlocked ||
            (lessonPage && isUnlocked && currentLesson !== lessonId),
          'hover:bg-black/20 hover:text-white': isUnlocked,
          'pointer-events-none cursor-default text-white/50': !isUnlocked,
          'text-base': lessonPage,
        }
      )}
    >
      {isUnlocked && !isPageCompleted && (
        <Icon icon="arrow" className="h-5 w-5" />
      )}
      {!isUnlocked && <Icon icon="lock" className="h-4 w-4 opacity-50" />}
      {isPageCompleted && <Icon icon="check" className="h-6 w-6 opacity-75" />}
      <span className="ml-1 text-lg">{t(title)}</span>
    </ComponentType>
  )
}
