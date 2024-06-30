'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Tooltip } from 'ui'
import Icon from 'shared/Icon'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'
import { lessons, chapters } from 'content'
import { themeSelector } from 'lib/themeSelector'
import { useAtom, useAtomValue } from 'jotai'
import {
  syncedCourseProgressAtom,
  isLessonCompletedUsingLessonName,
  isLessonUnlockedUsingLessonName,
  isLoadingProgressAtom,
} from 'state/progressState'

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

  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname() || ''

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteLesson = pathData.length === 4
  const [isLoading] = useAtom(isLoadingProgressAtom)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const isLessonUnlocked = isLessonUnlockedUsingLessonName(
    challenge.lessonId,
    courseProgress
  )
  const isLessonCompleted = isLessonCompletedUsingLessonName(
    challenge.lessonId,
    courseProgress
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
    currentIndex < index - 1 &&
    !isLessonCompleted &&
    pnLessonId.split('-')[0] !== 'outro'

  const groupCompleted = challengeLessons.every((challenge) =>
    isLessonCompletedUsingLessonName(challenge.lessonId, courseProgress)
  )

  return (
    <Tooltip
      id={`navbar-tab-tooltip-${index + 1}`}
      position="bottom"
      offset={0}
      theme={theme}
      className={clsx('cursor-default no-underline', {
        'cursor-not-allowed': !isLessonUnlocked,
      })}
      disabled={!isLessonUnlocked}
      content={
        <div className="flex min-w-64 flex-col items-stretch">
          <span className="whitespace-nowrap px-2.5 py-2 text-left font-semibold leading-none text-white">
            {t(challenge.title)}
          </span>
          <div className="flex flex-col flex-nowrap">
            {challengeLessons.map((challenge, index) => {
              const isLessonUnlock =
                !isLoading &&
                isLessonUnlockedUsingLessonName(
                  challenge.lessonId,
                  courseProgress
                )
              const isPageComplete =
                !isLoading &&
                isLessonCompletedUsingLessonName(
                  challenge.lessonId,
                  courseProgress
                )
              const navLessonId =
                challenge.lessonId.charAt(0) + challenge.lessonId.slice(1)
              const navTitle =
                lessons[slug][navLessonId].metadata.navigation_title
              const ComponentType = isLessonUnlock ? Link : 'div'
              const href = `${routes.chaptersUrl}/${slug}/${challenge.lessonId}`
              return (
                <div
                  key={index}
                  className={clsx('flex flex-row flex-nowrap', {
                    'pointer-events-none bg-black/25 text-white text-opacity-100 hover:bg-black/25':
                      challenge.lessonId === pnLessonId,
                    'text-white hover:bg-black/25 hover:text-opacity-100':
                      challenge.lessonId !== pnLessonId && isLessonUnlock,
                    'cursor-not-allowed': !isLessonUnlock,
                  })}
                >
                  <ComponentType
                    href={href}
                    className={clsx(
                      'flex h-full w-full flex-nowrap items-center gap-[5px] px-2.5 py-2 text-base',
                      {
                        'opacity-75 hover:opacity-100':
                          challenge.lessonId !== pnLessonId && isLessonUnlock,
                        'opacity-50': !isLessonUnlock,
                      }
                    )}
                  >
                    <Icon
                      icon="lock"
                      className={clsx('h-4 w-5', {
                        hidden: isLessonUnlock,
                      })}
                    />
                    <Icon
                      icon="check"
                      className={clsx('h-5 w-5', {
                        hidden: !isPageComplete,
                      })}
                    />
                    <Icon
                      icon="arrow"
                      className={clsx('h-5 w-5 opacity-100', {
                        hidden: !isLessonUnlock || isPageComplete,
                      })}
                    />
                    {t(navTitle)}
                  </ComponentType>
                </div>
              )
            })}
          </div>
        </div>
      }
    >
      <span
        className={clsx(
          'relative flex h-full w-[70px] items-center justify-center border-l border-white/25 text-center font-nunito text-lg font-bold transition duration-100 ease-in-out',
          {
            'text-white text-opacity-50': !isActive,
            'hover:bg-black/25 hover:text-white hover:text-opacity-100':
              isLessonUnlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
            'border-r': part === 'outro',
            'pointer-events-none': !isLessonUnlocked,
          }
        )}
      >
        {index}
        {challengeLock && (
          <Icon
            icon="lock"
            className={clsx(
              'absolute right-[10px] top-[10px] h-3 w-3 opacity-50',
              {
                hidden:
                  isLessonCompletedUsingLessonName(
                    challenge.lessonId,
                    courseProgress
                  ) && currentIndex !== index - 1,
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
                  !isLessonUnlockedUsingLessonName(
                    challenge.lessonId,
                    courseProgress
                  ),
              }
            )}
          />
        )}
      </span>
    </Tooltip>
  )
}
