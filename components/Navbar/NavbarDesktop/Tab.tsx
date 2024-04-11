'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Tooltip } from 'ui'
import Icon from 'shared/Icon'
import { useLang, useTranslations } from 'hooks'
import { lessons, chapters } from 'content'
import {
  getLessonKey,
  isLessonCompleted,
  isLessonUnlocked,
  keys,
} from 'lib/progress'
import { themeSelector } from 'lib/themeSelector'
import { useProgressContext } from 'contexts/ProgressContext'
import useLessonStatus from 'hooks/useLessonStatus'

export default function Tab({
  index,
  part = 'challenge',
  params,
  challenge,
  challengeLessons,
}: {
  index: number
  part?: 'intro' | 'challenge' | 'outro'
  params: any
  challenge: { lessonId: string; title: string }
  challengeLessons: any
}) {
  const { slug, lesson: lessonId } = params

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname() || ''

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteLesson = pathData.length === 4

  const { progress, isLoading } = useProgressContext()

  const { isUnlocked } = useLessonStatus(
    progress,
    getLessonKey(
      slug,
      challenge.lessonId === chapters[slug].metadata.lessons[0]
        ? 'intro-1'
        : challenge.lessonId
    )
  )
  const { isCompleted } = useLessonStatus(
    progress,
    getLessonKey(slug, challenge.lessonId)
  )

  const pnLessonId = isRouteLesson
    ? pathData.pop()
    : pathData[pathData.length - 2]
  if (!pnLessonId) {
    return null
  }

  const challengeId = pnLessonId.substring(0, pnLessonId.length - 2)

  const isActive =
    challenge.lessonId.substring(0, challenge.lessonId.length - 2) ===
    challengeId

  const currentIndex = chapters[slug].metadata.challenges.indexOf(
    challengeId + '-1'
  )
  const challengeLock =
    currentIndex < index && !isCompleted && pnLessonId.split('-')[0] !== 'outro'

  const groupCompleted = challengeLessons.every((challenge) =>
    isLessonCompleted(progress, getLessonKey(slug, challenge.lessonId))
  )

  return (
    <Tooltip
      id={`navbar-tab-tooltip-${index + 1}`}
      position="bottom"
      offset={0}
      theme={theme}
      className="no-underline"
      disabled={!isUnlocked}
      content={
        <>
          <span className="text-m whitespace-nowrap leading-none text-white/50">
            {t(challenge.title)}
          </span>
          <div className="flex flex-col flex-nowrap">
            {challengeLessons.map((challenge, index) => {
              const isLessonUnlock =
                !isLoading &&
                isLessonUnlocked(
                  progress,
                  getLessonKey(slug, challenge.lessonId)
                )
              const isPageComplete =
                !isLoading &&
                isLessonCompleted(
                  progress,
                  getLessonKey(slug, challenge.lessonId)
                )
              const navLessonId =
                challenge.lessonId.charAt(0) + challenge.lessonId.slice(1)
              const navTitle =
                lessons[slug][navLessonId].metadata.navigation_title
              return (
                <div
                  key={index}
                  className={clsx(
                    'flex h-7 flex-row flex-nowrap hover:bg-black/25',
                    {
                      'pointer-events-none bg-black/25 text-white text-opacity-100':
                        challenge.lessonId === pnLessonId,
                      'text-white hover:text-opacity-100':
                        challenge.lessonId !== pnLessonId,
                      'pointer-events-none': !isLessonUnlock,
                    }
                  )}
                >
                  <Link
                    href={challenge.lessonId}
                    className="flex flex-nowrap py-1"
                  >
                    <span className="pr-1 opacity-50">{index + 1 + '. '}</span>
                    {t(navTitle)}
                    <Icon
                      icon="lock"
                      className={clsx('mx-1 mt-[2px] h-3 w-3 opacity-50', {
                        hidden: isLessonUnlock,
                      })}
                    />
                    <Icon
                      icon="check"
                      className={clsx('h-5 w-5 opacity-50', {
                        hidden: !isPageComplete,
                      })}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        </>
      }
    >
      <span
        className={clsx(
          'relative flex h-full items-center justify-center border-l border-white/25 text-center font-nunito text-lg font-bold transition duration-100 ease-in-out',
          {
            'text-white text-opacity-50': !isActive,
            'hover:bg-black/25 hover:text-white hover:text-opacity-100':
              isUnlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
            'border-r': part === 'outro',
            'pointer-events-none': !isUnlocked,
            'w-[70px]': part === 'challenge',
            'w-[45px]': part !== 'challenge',
          }
        )}
      >
        {(part === 'challenge' && index + 1) || (part !== 'challenge' && '>')}
        {challengeLock && (
          <Icon
            icon="lock"
            className={clsx(
              'absolute right-[10px] top-[10px] h-3 w-3 opacity-50',
              {
                hidden:
                  !isLoading &&
                  keys.indexOf(progress) >=
                    keys.indexOf(getLessonKey(slug, challenge.lessonId)),
              }
            )}
          />
        )}
        {groupCompleted && (
          <Icon
            icon="check"
            className={clsx(
              'absolute right-[5px] top-[5px] h-[20px] w-[20px]',
              {
                hidden:
                  !isLoading &&
                  keys.indexOf(progress) <
                    keys.indexOf(getLessonKey(slug, challenge.lessonId)),
              }
            )}
          />
        )}
      </span>
    </Tooltip>
  )
}
