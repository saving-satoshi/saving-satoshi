import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'
import React from 'react'
import DiagonalCross from 'shared/icons/DiagonalCross'
import LineDash from 'shared/icons/LineDash'
import {
  ChapterInState,
  ChapterInStateAlt,
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
} from 'types'
import { numberToWord } from 'utils/convert-number-to-word'
import ChapterLesson from './ChapterLesson'
import { useAtomValue } from 'jotai'
import { getLessonKey, syncedCourseProgressAtom } from 'state/progressState'
import { Title } from 'ui'
interface IChapterAccordion {
  completed: boolean
  id: number
  chapter: ChapterInState
  setCurrentChapter: React.Dispatch<React.SetStateAction<number>>
  currentChapter: number
}

const ChapterAccordion = ({
  completed,
  id,
  currentChapter: currentChapterId,
  setCurrentChapter,
  chapter: chapterLesson,
}: IChapterAccordion) => {
  const lang = useLang()
  const t = useTranslations(lang)

  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const currentChapter = `chapter-${id}`
  const chapter = chapters[currentChapter]
  const isOpen = currentChapterId === id
  const allLessons = chapterLesson as ChapterInStateAlt
  const chapterFromState: ChapterInState = courseProgress.chapters[id - 1]

  const updateCurrentChapter = () => {
    if (isOpen) {
      setCurrentChapter(0)
    } else {
      setCurrentChapter(id)
    }
  }

  const introsData = chapter.metadata.intros
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(currentChapter, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[currentChapter][lessonId].metadata
      return { lessonId, title }
    })

  const lessonsData = chapter.metadata.lessons
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(currentChapter, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[currentChapter][lessonId].metadata
      return { lessonId, title }
    })

  console.log(lessonsData)
  const outrosData = chapter.metadata.outros
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(currentChapter, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[currentChapter][lessonId].metadata
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
  const challenges = chapter.metadata.challenges
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(currentChapter, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[currentChapter][lessonId].metadata
      return { lessonId, title }
    })
  console.log(challenges, 'challenge')

  return currentChapterId === 0 || isOpen ? (
    <div className="flex cursor-pointer flex-col gap-6 px-5">
      <div
        className="flex items-center justify-between border-b border-b-white/30 py-6"
        onClick={updateCurrentChapter}
      >
        <div className="flex flex-col font-cbrush">
          <h6 className=" text-[19px] opacity-50">
            {`Chapter `}
            {id}
          </h6>
          <p className="text-2xl">{t(`chapter_${numberToWord[id]}.title`)}</p>
        </div>

        <div>
          {!isOpen && <DiagonalCross />}
          {isOpen && <LineDash />}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col">
          <div>
            <Title className="">
              <span className="text-white/50">1. </span> {t('navbar.intro')}
            </Title>
            {introsData.length &&
              introsData.map((intro) => (
                <ChapterLesson
                  key={intro.lessonId}
                  chapterId={id}
                  id={intro.lessonId}
                  title={intro.title}
                />
              ))}
          </div>
          <div>
            {challenges.length &&
              challenges.map((challenge, index) => (
                <>
                  <Title className="">
                    <span className="text-white/50">{index + 2}. </span>{' '}
                    {t(`${challenge?.title}`)}
                  </Title>
                  {groupedLessonData[challenge.lessonId.split('-')[0]].map(
                    (lesson) => (
                      <ChapterLesson
                        key={lesson.lessonId}
                        chapterId={id}
                        id={lesson.lessonId}
                        title={lesson.title}
                      />
                    )
                  )}
                </>
              ))}
          </div>
          <div>
            <Title className="">
              <span className="text-white/50">{challenges.length + 2} </span>{' '}
              {t('navbar.outro')}
            </Title>
            {outrosData.length &&
              outrosData.map((outro) => (
                <ChapterLesson
                  key={outro.lessonId}
                  chapterId={id}
                  id={outro.lessonId}
                  title={outro.title}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  )
}

export default ChapterAccordion
