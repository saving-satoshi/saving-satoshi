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
          'bg-black/20':
            (!lessonPage && isUnlocked && !isPageCompleted) ||
            (lessonPage && currentLesson === lessonId),
          'opacity-75':
            (!lessonPage && isPageCompleted) ||
            (lessonPage && isUnlocked && currentLesson !== lessonId),
          'hover:bg-black/20 hover:opacity-100': isUnlocked,
          'pointer-events-none cursor-default opacity-50': !isUnlocked,
          'text-base': lessonPage,
        }
      )}
    >
      {isUnlocked && !isPageCompleted && (
        <Icon icon="arrow" className="h-5 w-5" />
      )}
      {!isUnlocked && <Icon icon="lock" className="h-4 w-4" />}
      {isPageCompleted && <Icon icon="check" className="h-6 w-6" />}
      <span
        className={clsx('ml-1', {
          'text-base': lessonPage,
          'text-lg': !lessonPage,
        })}
      >
        {t(title)}
      </span>
    </ComponentType>
  )
}
