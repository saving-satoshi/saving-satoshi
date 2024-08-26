'use client'

import ChallengeListItem from './ChallengeListItem'
import { lessons } from 'content'
import { useLang, useTranslations } from 'hooks'
import clsx from 'clsx'
import { getLessonKey, syncedCourseProgressAtom } from 'state/progressState'
import { useAtomValue } from 'jotai'

export default function ChallengeList({
  intros,
  lessonStrings,
  outros,
  challenges,
  chapterId,
  lessonPage,
}: {
  intros: string[]
  lessonStrings: string[]
  outros: string[]
  challenges: string[]
  chapterId: string
  lessonPage?: boolean
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const currentChapter = courseProgress.chapters.find(
    (chapter) => chapter.id === parseInt(chapterId.split('-')[1])
  )

  const filterForDifficulty = (lessonId: string) => {
    // If the lesson has no difficulty, return everything
    if (!currentChapter?.hasDifficulty) {
      return true
    }

    const lessonsForSelectedDifficulty = currentChapter.difficulties.find(
      (difficulty) => difficulty.level === currentChapter.selectedDifficulty
    )?.lessons

    // If the lesson ID is present in the currently selected difficulty, include it
    if (
      lessonsForSelectedDifficulty?.some(
        (lesson) => lesson.id === getLessonKey(chapterId, lessonId)
      )
    ) {
      return true
    }
    // Otherwise, exclude it
    return false
  }

  const introsData = intros.filter(filterForDifficulty).map((introId) => {
    const { title, navigation_title } = lessons[chapterId][introId].metadata

    return { introId, title, navigation_title }
  })

  const lessonsData = lessonStrings
    .filter(filterForDifficulty)
    .map((lessonId) => {
      const { title, navigation_title } = lessons[chapterId][lessonId].metadata

      return { lessonId, title, navigation_title }
    })

  let groupedLessonData = {}

  lessonsData.forEach((lesson) => {
    const key = lesson.lessonId.split('-')[0]
    const value = lesson

    if (!groupedLessonData[key]) {
      groupedLessonData[key] = []
    }

    groupedLessonData[key].push(value)
  })

  const outrosData = outros.filter(filterForDifficulty).map((outroId) => {
    const { title, navigation_title } = lessons[chapterId][outroId].metadata

    return { outroId, title, navigation_title }
  })

  const challengesData = challenges
    .filter(filterForDifficulty)
    .map((lessonId) => {
      const { title } = lessons[chapterId][lessonId].metadata

      return { lessonId, title }
    })

  return (
    <div
      className={clsx(
        'flex w-full grow items-start justify-stretch font-nunito text-white',
        {
          'md:mt-6': !lessonPage,
          'overflow-y-auto': lessonPage,
        }
      )}
    >
      {challengesData.length > 0 && (
        <ul className="grid w-full items-start overflow-x-hidden">
          <h2
            className={clsx('text-white', {
              'text-lg font-bold': !lessonPage,
              'flex px-[10px] pt-2 text-[15px] font-semibold': lessonPage,
            })}
          >
            <span className="pr-1 text-white/50">1.</span>
            Intro
          </h2>
          {introsData.map((intro, index) => (
            <ChallengeListItem
              key={index + 1}
              title={intro.navigation_title}
              chapterId={chapterId}
              lessonId={intro.introId}
              lessonPage={lessonPage}
            />
          ))}
          {Object.keys(groupedLessonData).map((title, index) => (
            <div key={title}>
              <h2
                className={clsx('text-white', {
                  'text-lg font-bold': !lessonPage,
                  'flex px-[10px] pt-2 text-[15px] font-semibold': lessonPage,
                })}
              >
                <span className="pr-1 text-white/50">{index + 2}.</span>
                {t(groupedLessonData[title][0].title)}
              </h2>
              <ul>
                {groupedLessonData[title].map((lesson, index) => (
                  <ChallengeListItem
                    key={index + 1}
                    title={lesson.navigation_title}
                    chapterId={chapterId}
                    lessonId={lesson.lessonId}
                    lessonPage={lessonPage}
                  />
                ))}
              </ul>
            </div>
          ))}{' '}
          <h2
            className={clsx('text-white', {
              'text-lg font-bold': !lessonPage,
              'flex px-[10px] pt-2 text-[15px] font-semibold': lessonPage,
            })}
          >
            <span className="pr-1 text-white/50">
              {Object.keys(groupedLessonData).length + 2}.
            </span>
            Outro
          </h2>
          {outrosData.map((outro, index) => (
            <ChallengeListItem
              key={index + 1}
              title={outro.navigation_title}
              chapterId={chapterId}
              lessonId={outro.outroId}
              lessonPage={lessonPage}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
