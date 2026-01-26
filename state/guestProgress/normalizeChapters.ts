import type { ChapterWithDifficulties, ChapterWithoutDifficulties } from 'types'
import { resolveSelectedDifficulty } from './difficulty'
import { LessonOrderIndex } from './lessonOrderIndex'

export type NormalizationContext = {
  candidateChapterId: number | null
  candidateLessonId: string
  candidateLessonOrder: number
  currentLessonMarkedComplete: boolean
  orderIndex: LessonOrderIndex
}

export const normalizeChapterWithoutDifficulty = (
  defaultChapter: ChapterWithoutDifficulties,
  context: NormalizationContext
): ChapterWithoutDifficulties => {
  const lessons = defaultChapter.lessons.map((lesson) => ({
    ...lesson,
    completed: context.orderIndex.isCompleted(
      lesson.id,
      context.candidateLessonOrder,
      context.currentLessonMarkedComplete
    ),
  }))
  const completed =
    lessons.length > 0 && lessons.every((lesson) => lesson.completed)
  return {
    ...defaultChapter,
    lessons,
    completed,
  } as ChapterWithoutDifficulties
}

export const normalizeChapterWithDifficulty = (
  defaultChapter: ChapterWithDifficulties,
  storedChapter: ChapterWithDifficulties | undefined,
  context: NormalizationContext
): ChapterWithDifficulties => {
  const selectedDifficulty = resolveSelectedDifficulty(
    storedChapter?.selectedDifficulty,
    defaultChapter.selectedDifficulty
  )
  const candidateDifficulty =
    context.candidateChapterId === defaultChapter.id
      ? defaultChapter.difficulties.find(
          (difficulty) =>
            difficulty.level === selectedDifficulty &&
            difficulty.lessons.some(
              (lesson) => lesson.id === context.candidateLessonId
            )
        ) ??
        defaultChapter.difficulties.find((difficulty) =>
          difficulty.lessons.some(
            (lesson) => lesson.id === context.candidateLessonId
          )
        )
      : undefined
  const candidateDifficultyLevel = candidateDifficulty?.level

  const difficulties = defaultChapter.difficulties.map((difficulty) => {
    const isSelectedDifficulty = difficulty.level === selectedDifficulty
    const shouldUseOrder =
      context.candidateChapterId === defaultChapter.id
        ? difficulty.level === candidateDifficultyLevel
        : isSelectedDifficulty

    const lessons = difficulty.lessons.map((lesson) => {
      if (!shouldUseOrder) {
        return { ...lesson, completed: false }
      }

      return {
        ...lesson,
        completed: context.orderIndex.isCompleted(
          lesson.id,
          context.candidateLessonOrder,
          context.currentLessonMarkedComplete
        ),
      }
    })
    const completed =
      lessons.length > 0 && lessons.every((lesson) => lesson.completed)
    return { ...difficulty, lessons, completed }
  })
  const selectedDifficultyState = difficulties.find(
    (difficulty) => difficulty.level === selectedDifficulty
  )
  const completed = selectedDifficultyState
    ? selectedDifficultyState.lessons.every((lesson) => lesson.completed)
    : false

  return {
    ...defaultChapter,
    selectedDifficulty,
    difficulties,
    completed,
  } as ChapterWithDifficulties
}
