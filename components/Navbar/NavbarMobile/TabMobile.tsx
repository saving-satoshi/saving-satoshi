'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { useProgressContext } from 'contexts/ProgressContext'
import useLessonStatus from 'hooks/useLessonStatus'
import Icon from 'shared/Icon'

import { chapters } from 'content'

export default function Tab({
  index,
  params,
  challenge,
  clicked,
  overrideTitle,
}: {
  index: number
  params: any
  challenge: { lessonId: string; title: string }
  clicked: any
  overrideTitle?: string
}) {
  const { slug } = params

  const { progress } = useProgressContext()
  const { isUnlocked } = useLessonStatus(
    progress,
    getLessonKey(
      slug,
      challenge.lessonId === chapters[slug].metadata.lessons[0]
        ? 'intro-1'
        : challenge.lessonId
    )
  )
  const { isPageCompleted } = useLessonStatus(
    progress,
    getLessonKey(slug, challenge.lessonId)
  )

  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname() || ''

  const pathData = pathName.split('/').filter((p) => p)

  const pnLessonId = pathData.pop()
  if (!pnLessonId) {
    return null
  }

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
        'justify-left flex items-center border-t border-white/25 px-[15px] py-[11px] text-center text-[21px] text-white/50 transition duration-100 ease-in-out',
        {
          'border-t border-white/25': true,
          'bg-black/15': isUnlocked && !isPageCompleted,
          'hover:bg-black/20': isUnlocked,
        }
      )}
    >
      {index + 1}.{' '}
      <span className="ml-1 text-white">
        {overrideTitle ? overrideTitle : t(challenge.title)}
      </span>
      {!isUnlocked && (
        <Icon
          icon="lock"
          className="absolute right-[15px] -mr-2 h-3 w-3 opacity-50"
        />
      )}
      {isPageCompleted && (
        <Icon icon="check" className="absolute right-[5px] h-5 w-5" />
      )}
    </Link>
  )
}
