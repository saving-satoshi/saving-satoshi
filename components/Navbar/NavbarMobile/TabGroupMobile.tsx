import TabMobile from './TabMobile'
import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

import clsx from 'clsx'
import { getLessonKey, syncedCourseProgressAtom } from 'state/progressState'
import { useAtomValue } from 'jotai'
import { ChapterInState } from 'types'

export default function TabGroup({ isOpen, clicked, params }) {
  const { slug } = params
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const chapterFromState: ChapterInState =
    courseProgress.chapters[params.slug.split('-')[1] - 1]

  const lang = useLang()
  const t = useTranslations(lang)

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const chapterMeta = chapter?.metadata
  const chapterId = chapter.metadata.slug

  const introsData = chapterMeta.intros
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
    })

  const lessonsData = chapterMeta.lessons
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
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

  const outrosData = chapterMeta.outros
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
    })

  return (
    <div className="mx-4 flex h-full flex-col items-stretch font-nunito">
      <ul
        className={clsx(
          'grid w-full items-start py-4',
          'duration-800 transform transition ease-in-out',
          {
            '-translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <h2 className="text-lg text-white">
          <span className="text-white/50">1. </span>
          Intro
        </h2>
        {introsData.map((intro, index) => (
          <div
            key={index}
            className={clsx('duration-800 transform transition ease-in-out', {
              '-translate-x-[110%]': !isOpen,
              'translate-x-0': isOpen,
            })}
            style={{ transitionDelay: `${60 * (index + 1)}ms` }}
          >
            <TabMobile
              key={index}
              index={index}
              challenge={intro}
              params={params}
              clicked={clicked}
              chapterId={chapter.position + 1}
            />
          </div>
        ))}
        {Object.keys(groupedLessonData).map((title, index) => (
          <div
            key={title}
            className={clsx('duration-800 transform transition ease-in-out', {
              '-translate-x-[110%]': !isOpen,
              'translate-x-0': isOpen,
            })}
            style={{ transitionDelay: `${60 * (index + 1)}ms` }}
          >
            <h2 className="text-lg text-white">
              <span className="text-white/50">{index + 2}. </span>
              {t(groupedLessonData[title][0].title)}
            </h2>
            <ul>
              {groupedLessonData[title].map((lesson, index) => (
                <div
                  key={index}
                  className={clsx(
                    'duration-800 transform transition ease-in-out',
                    {
                      '-translate-x-[110%]': !isOpen,
                      'translate-x-0': isOpen,
                    }
                  )}
                  style={{ transitionDelay: `${60 * (index + 1)}ms` }}
                >
                  <TabMobile
                    key={index + 1}
                    index={index}
                    challenge={lesson}
                    params={params}
                    clicked={clicked}
                    chapterId={chapter.position + 1}
                  />
                </div>
              ))}
            </ul>
          </div>
        ))}
        <h2 className="text-lg text-white">
          <span className="text-white/50">
            {Object.keys(groupedLessonData).length + 2}.{' '}
          </span>
          Outro
        </h2>
        {outrosData.map((outro, index) => (
          <div
            key={index}
            className={clsx('duration-800 transform transition ease-in-out', {
              '-translate-x-[110%]': !isOpen,
              'translate-x-0': isOpen,
            })}
            style={{ transitionDelay: `${60 * (index + 1)}ms` }}
          >
            <TabMobile
              key={index}
              index={index}
              challenge={outro}
              params={params}
              clicked={clicked}
              chapterId={chapter.position + 1}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}
