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
  getLessonKey,
  isLessonUnlockedUsingId,
} from 'state/progressState'
import useEnvironment from 'hooks/useEnvironment'
import { useMemo } from 'react'

export default function Tab({
  index,
  part = 'challenge',
  params,
  challenge,
  challengeLessons,
}) {
  const { slug, lesson: lessonId } = params

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname() || ''
  const { isDevelopment } = useEnvironment()

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteLesson = pathData.length === 4
  const [isLoading] = useAtom(isLoadingProgressAtom)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const isLessonUnlocked = useMemo(() => {
    const currentChapter =
      courseProgress.chapters[Number(slug.split('-')[1]) - 1]
    if (currentChapter.hasDifficulty) {
      const difficulty = currentChapter.difficulties.find(
        (d) => d.level === currentChapter.selectedDifficulty
      )
      if (!difficulty) return false
      const lessonsWithDifficulty = difficulty?.lessons
      return lessonsWithDifficulty[index].completed
    } else {
      return currentChapter.lessons[index].completed
    }
  }, [courseProgress, slug, index])

  isLessonUnlockedUsingId(getLessonKey(slug, lessonId), courseProgress)

  const challengeLock = useMemo(() => {
    if (isDevelopment) {
      // always unlock in development
      return false
    }
    if (
      challengeLessons.every((challenge) =>
        challenge.lessonId.includes('intro')
      )
    ) {
      // intros should always be unlocked
      return false
    }
    // check if the first lesson in the challenge is unlocked
    return !isLessonUnlockedUsingId(
      getLessonKey(slug, challengeLessons[0].lessonId),
      courseProgress
    )
  }, [challengeLessons, courseProgress, slug, isDevelopment])

  const pnLessonId = isRouteLesson
    ? pathData.pop()
    : pathData[pathData.length - 2]
  if (!pnLessonId) {
    return null
  }
  const isTabUnlocked = isLessonUnlocked || isDevelopment

  const challengeId = pnLessonId.substring(0, pnLessonId.length - 2)

  const isActive =
    challenge.lessonId.substring(0, challenge.lessonId.length - 2) ===
    challengeId

  const currentIndex = chapters[slug].metadata.challenges.indexOf(
    challengeId + '-1'
  )

  const groupCompleted = challengeLessons.every((challenge) =>
    isLessonCompletedUsingLessonName(slug, challenge.lessonId, courseProgress)
  )

  return (
    <Tooltip
      id={`navbar-tab-tooltip-${index + 1}`}
      position="bottom"
      offset={0}
      theme={theme}
      className={clsx('cursor-default no-underline', {
        'cursor-not-allowed': challengeLock,
      })}
      disabled={challengeLock}
      content={
        <div className="flex min-w-64 flex-col items-stretch">
          <span className="whitespace-nowrap px-2.5 py-2 text-left font-semibold leading-none text-white">
            {t(challenge.title)}
          </span>
          <div className="flex flex-col flex-nowrap">
            {challengeLessons.map((challenge, index) => {
              const isLessonUnlock =
                isDevelopment ||
                (!isLoading &&
                  isLessonUnlockedUsingId(
                    getLessonKey(slug, challenge.lessonId),
                    courseProgress
                  ))
              const isPageComplete =
                !isLoading &&
                isLessonCompletedUsingLessonName(
                  slug,
                  challenge.lessonId,
                  courseProgress
                )
              const navLessonId =
                challenge.lessonId.charAt(0) + challenge.lessonId.slice(1)
              const navTitle =
                lessons[slug][navLessonId].metadata.navigation_title
              const ComponentType = isLessonUnlock ? Link : 'div'
              const href = `${routes.chaptersUrl}/${slug}/${
                challenge.lessonId
              }${isDevelopment ? '?dev=true' : ''}`
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
              isTabUnlocked && !isActive,
            'bg-black/25 text-opacity-100': isActive,
            'border-r': part === 'outro',
            'pointer-events-none': !isTabUnlocked,
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
                    slug,
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
                  !isTabUnlocked &&
                  !isLessonUnlockedUsingLessonName(
                    slug,
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
