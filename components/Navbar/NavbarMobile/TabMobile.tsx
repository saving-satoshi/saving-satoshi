'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import Icon from 'shared/Icon'

import { lessons } from 'content'
import { useAtomValue } from 'jotai'
import {
  syncedCourseProgressAtom,
  getLessonById,
  getLessonKey,
  isLessonUnlockedUsingLessonName,
} from 'state/progressState'
import useEnvironment from 'hooks/useEnvironment'

export default function Tab({
  index,
  params,
  challenge,
  clicked,
  chapterId,
}: {
  index: number
  params: any
  challenge: { lessonId: string; title: string }
  clicked: any
  chapterId: number
}) {
  const { slug } = params
  const { isDevelopment } = useEnvironment()

  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const lesson = getLessonById(
    getLessonKey(chapterId, challenge.lessonId),
    courseProgress
  )

  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname() || ''

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteLesson = pathData.length === 4
  const isPageCompleted = lesson?.completed
  const isLessonUnlocked = isLessonUnlockedUsingLessonName(
    slug,
    challenge.lessonId,
    courseProgress
  )
  const isTabUnlocked = isLessonUnlocked || isDevelopment

  const pnLessonId = isRouteLesson
    ? pathData.pop()
    : pathData[pathData.length - 2]
  if (!pnLessonId) {
    return null
  }

  const lessonId = pathName.split('/').pop()

  const href = `${routes.chaptersUrl}/${slug}/${challenge.lessonId}`

  const navTitle = t(
    lessons[slug][challenge.lessonId].metadata.navigation_title
  )

  return (
    <Link
      href={href}
      title={t(challenge.title)}
      onClick={() => clicked()}
      className={clsx(
        'justify-left flex items-center px-[15px] py-[11px] pl-5 text-center transition duration-100 ease-in-out',
        {
          'text-white/75 hover:bg-black/20 hover:text-white':
            isTabUnlocked && challenge.lessonId !== lessonId,
          'pointer-events-none cursor-default text-white/50': !isTabUnlocked,
          'bg-black/20 text-white': challenge.lessonId === lessonId,
        }
      )}
    >
      {isTabUnlocked && !isPageCompleted && (
        <Icon icon="arrow" className="h-5 w-5" />
      )}
      {!isTabUnlocked && <Icon icon="lock" className="h-4 w-4 opacity-50" />}
      {isPageCompleted && <Icon icon="check" className="h-6 w-6 opacity-75" />}
      <span className="ml-1 text-lg">{navTitle}</span>
    </Link>
  )
}
