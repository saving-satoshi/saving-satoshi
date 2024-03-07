'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Tooltip } from 'ui'
import Icon from 'shared/Icon'
import { useLang, useTranslations } from 'hooks'
import { lessons, chapters } from 'content'
import { getLessonKey, isLessonCompleted, isLessonUnlocked } from 'lib/progress'
import { themeSelector } from 'lib/themeSelector'
import { useProgressContext } from 'contexts/ProgressContext'
import useLessonStatus from 'hooks/useLessonStatus'

export default function Tab({
  index,
  count,
  params,
  challenge,
  challengeLessons,
}: {
  index: number
  count: number
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

  const { progress } = useProgressContext()

  const pnLessonId = isRouteLesson
    ? pathData.pop()
    : pathData[pathData.length - 2]
  if (!pnLessonId) {
    return null
  }

  const { isUnlocked: isChallengeUnlocked } = useLessonStatus(
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

  const challengeId = pnLessonId
    .substring(0, pnLessonId.length - 2)
    .replace(
      'intro',
      chapters[slug].metadata.challenges[0].substring(
        0,
        chapters[slug].metadata.challenges[0].length - 2
      )
    )
  const isActive =
    challenge.lessonId.substring(0, challenge.lessonId.length - 2) ===
    challengeId
  const isLast = index === count - 1

  const currentIndex = chapters[slug].metadata.challenges.indexOf(
    challengeId + '-1'
  )
  const challengeLock =
    currentIndex < index && !isCompleted && pnLessonId.split('-')[0] !== 'outro'

  const challengeCheck =
    currentIndex > index || pnLessonId.split('-')[0] === 'outro'

  return (
    <Tooltip
      id={`navbar-tab-tooltip-${index + 1}`}
      position="bottom"
      offset={0}
      theme={theme}
      className="no-underline"
      disabled={!isChallengeUnlocked}
      content={
        <>
          <span className="text-m whitespace-nowrap leading-none text-white/50">
            {t(challenge.title)}
          </span>
          {challengeLessons.map((challenge, index) => {
            const isLessonUnlock = isLessonUnlocked(
              progress,
              getLessonKey(slug, challenge.lessonId)
            )
            const isPageComplete = isLessonCompleted(
              progress,
              getLessonKey(slug, challenge.lessonId)
            )
            console.log(
              isLessonUnlock,
              isPageComplete,
              challenge.lessonId,
              progress
            )
            return (
              <div key={index} className="flex flex-row">
                <Link
                  href={challenge.lessonId}
                  className="flex flex-col items-start whitespace-nowrap py-1 hover:bg-black/25"
                >
                  {challenge.lessonId.charAt(0).toUpperCase() +
                    challenge.lessonId.slice(1)}
                  {!isLessonUnlock && (
                    <Icon icon="lock" className="h-3 w-3 opacity-50" />
                  )}
                  {isPageComplete && (
                    <Icon icon="check" className="h-[20px] w-[20px]" />
                  )}
                </Link>
              </div>
            )
          })}
        </>
      }
    >
      <span
        className={clsx(
          'relative flex h-full w-[70px] items-center justify-center border-l border-white/25 text-center font-nunito text-lg font-bold transition duration-100 ease-in-out',
          {
            'text-white text-opacity-50': !isActive,
            'hover:bg-black/25 hover:text-white hover:text-opacity-100':
              isChallengeUnlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
            'border-r': isLast,
            'pointer-events-none': !isChallengeUnlocked,
          }
        )}
      >
        {index + 1}
        {isChallengeUnlocked ||
          (challengeLock && (
            <Icon
              icon="lock"
              className="absolute right-[10px] top-[10px] h-3 w-3 opacity-50"
            />
          ))}
        {challengeCheck && (
          <Icon
            icon="check"
            className="absolute right-[5px] top-[5px] h-[20px] w-[20px]"
          />
        )}
      </span>
    </Tooltip>
  )
}
