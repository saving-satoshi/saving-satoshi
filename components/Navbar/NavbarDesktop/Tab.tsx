'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Tooltip } from 'ui'
import CheckIcon from 'public/assets/icons/check.svg'
import LockIcon from 'public/assets/icons/lock.svg'

import { useLang, useLocalizedRoutes, useStatus, useTranslations } from 'hooks'
import { lessons, chapters } from 'content'

export default function Tab({
  index,
  count,
  params,
  challenge,
}: {
  index: number
  count: number
  params: any
  challenge: { lessonId: string; title: string }
}) {
  const { slug, lesson: lessonId } = params

  const defaultTheme = 'bg-back'
  const { theme = defaultTheme } = lessons[slug][lessonId].metadata

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
  const tabHref =
    challenge.lessonId === chapters[slug].metadata.challenges[0]
      ? chapters[slug].metadata.intros[0]
      : challenge.lessonId

  return (
    <Tooltip
      id={`navbar-tab-tooltip-${index + 1}`}
      position="bottom"
      offset={0}
      theme={theme}
      content={
        <div className="flex flex-col">
          <span className="text-m whitespace-nowrap leading-none text-white/50">
            {t('shared.challenge')} {index + 1}
          </span>
          <span className="whitespace-nowrap">{t(challenge.title)}</span>
        </div>
      }
    >
      <Link
        href={`${routes.chaptersUrl}/${slug}/${tabHref}`}
        title={t(challenge.title)}
        className={clsx(
          'relative flex h-full items-center justify-center border-l border-white/25 px-7 text-center text-lg transition duration-100 ease-in-out',
          {
            'text-white text-opacity-50': !isActive,
            'hover:bg-black/25 hover:text-white hover:text-opacity-100':
              status && status.unlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
            'border-r': isLast,
            'pointer-events-none': !status?.unlocked,
          }
        )}
      >
        {index + 1}
        {status && !status.unlocked && (
          <LockIcon className="absolute right-[10px] top-[10px] opacity-50" />
        )}
        {status && status.completed && (
          <CheckIcon className="absolute right-[5px] top-[5px] h-[20px] w-[20px]" />
        )}
      </Link>
    </Tooltip>
  )
}
