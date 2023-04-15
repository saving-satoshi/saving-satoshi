'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { useProgressContext } from 'providers/ProgressProvider'
import useLessonStatus from 'hooks/useLessonStatus'

import { chapters } from 'content'

export default function Tab({
  index,
  count,
  params,
  challenge,
  clicked,
}: {
  index: number
  count: number
  params: any
  challenge: { lessonId: string; title: string }
  clicked: any
}) {
  const { slug } = params

  const { progress } = useProgressContext()
  const { isUnlocked, isCompleted } = useLessonStatus(
    progress,
    getLessonKey(slug, challenge.lessonId)
  )

  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname()

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteLesson = pathData.length === 4

  const status = useStatus(slug, challenge.lessonId)

  const challengeId = isRouteLesson
    ? pathData
        .pop()
        .split('-')[0]
        .replace('intro', chapters[slug].metadata.challenges[0].split('-')[0])
    : undefined
  const isActive = challenge.lessonId.split('-')[0] === challengeId
  const isLast = index === count - 1
  const lessonHref =
    challenge.lessonId === chapters[slug].metadata.challenges[0]
      ? chapters[slug].metadata.intros[0]
      : challenge.lessonId
  const href = `${routes.chaptersUrl}/${slug}/${lessonHref}`

  return (
    <Link
      href={href}
      title={t(challenge.title)}
      onClick={() => clicked()}
      className={clsx(
        'justify-left flex items-center border-t border-white/25 py-2.5 text-center text-[21px] text-white/50 transition duration-100 ease-in-out',
        {
          'text-white text-opacity-50': !isActive,
          'hover:bg-black/25 hover:text-white hover:text-opacity-100':
            isUnlocked && !isActive,
          'bg-black/25 text-opacity-100': isActive,
          'border-b': isLast,
          'pointer-events-none': isUnlocked,
        }
      )}
    >
      {index + 1}. <span className="ml-1 text-white">{t(challenge.title)}</span>
      {!isUnlocked && (
        <LockIcon className="absolute right-[15px] -mr-2 opacity-50" />
      )}
      {isCompleted && <CheckIcon className="absolute right-[5px] h-5 w-5" />}
    </Link>
  )
}
