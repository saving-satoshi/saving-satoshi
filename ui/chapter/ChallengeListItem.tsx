import clsx from 'clsx'
import Link from 'next/link'

import Icon from 'shared/Icon'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import { usePathname } from 'next/navigation'
import { useAtomValue } from 'jotai'
import {
  syncedCourseProgressAtom,
  isLessonCompletedUsingLessonName,
  isLessonUnlockedUsingLessonName,
} from 'state/progressState'

export default function ChallengeItem({
  title,
  chapterId,
  lessonId,
  lessonPage,
}) {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname() || ''
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const isLessonUnlocked = isLessonUnlockedUsingLessonName(
    chapterId,
    lessonId,
    courseProgress
  )
  const isLessonCompleted = isLessonCompletedUsingLessonName(
    chapterId,
    lessonId,
    courseProgress
  )

  const href = `${routes.chaptersUrl}/${chapterId}/${lessonId}`
  const ComponentType = isLessonUnlocked ? Link : 'div'

  const currentLesson = pathName.split('/').pop()

  return (
    <ComponentType
      href={href}
      className={clsx(
        'justify-left flex items-center text-center transition duration-100 ease-in-out',
        {
          'bg-black/20':
            (!lessonPage && isLessonUnlocked && !isLessonCompleted) ||
            (lessonPage && currentLesson === lessonId),
          'opacity-75':
            (!lessonPage && isLessonCompleted) ||
            (lessonPage && isLessonUnlocked && currentLesson !== lessonId),
          'hover:bg-black/20 hover:opacity-100': isLessonUnlocked,
          'cursor-not-allowed opacity-50': !isLessonUnlocked,
          'px-[10px] py-[8px] text-base': lessonPage,
          'px-[15px] py-[11px] ': !lessonPage,
        }
      )}
    >
      {isLessonUnlocked && !isLessonCompleted && (
        <Icon icon="arrow" className="h-5 w-5" />
      )}
      {!isLessonUnlocked && <Icon icon="lock" className="h-3 w-3" />}
      {isLessonCompleted && <Icon icon="check" className="h-5 w-5" />}
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
