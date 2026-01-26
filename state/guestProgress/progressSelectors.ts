import { allLessonOrder } from 'lib/progess'
import type {
  ChapterWithDifficulties,
  ChapterInState,
  ChapterWithoutDifficulties,
  CourseProgress,
  Difficulty,
  LessonInState,
} from 'types'
import { resolveSelectedDifficulty } from './difficulty'

const getChapters = (progress: CourseProgress) =>
  Array.isArray(progress.chapters) ? progress.chapters : []

const getLessons = (lessons: unknown): LessonInState[] =>
  Array.isArray(lessons) ? lessons : []

const getDifficulties = (chapter: ChapterWithDifficulties): Difficulty[] =>
  Array.isArray(chapter.difficulties) ? chapter.difficulties : []

const getPlainChapterLessons = (
  chapter: ChapterWithoutDifficulties
): LessonInState[] => getLessons(chapter.lessons)

const getDifficultyChapterLessons = (
  chapter: ChapterWithDifficulties
): LessonInState[] =>
  getDifficulties(chapter).flatMap((difficulty) =>
    getLessons(difficulty.lessons)
  )

const getAllChapterLessons = (chapter: ChapterInState): LessonInState[] =>
  chapter.hasDifficulty
    ? getDifficultyChapterLessons(chapter)
    : getPlainChapterLessons(chapter)

const getDefaultLessonOrder = (
  lessonId: string | undefined,
  defaults: CourseProgress
): number | null => {
  if (!lessonId) return null

  const configuredOrder = (allLessonOrder as Record<string, number>)[lessonId]
  if (typeof configuredOrder === 'number') {
    return configuredOrder
  }

  let fallbackOrder = 1
  for (const chapter of getChapters(defaults)) {
    for (const lesson of getAllChapterLessons(chapter)) {
      if (lesson.id === lessonId) {
        return fallbackOrder
      }
      fallbackOrder += 1
    }
  }

  return null
}

const getDefaultChapterMaxOrder = (
  chapter: ChapterInState,
  defaults: CourseProgress
): number | null => {
  const orders = getAllChapterLessons(chapter)
    .map((lesson) => getDefaultLessonOrder(lesson.id, defaults))
    .filter((order): order is number => order !== null)

  return orders.length > 0 ? Math.max(...orders) : null
}

const hasCompletedStoredLessons = (
  storedChapter: ChapterInState | undefined,
  defaultChapter: ChapterInState
): boolean => {
  if (!storedChapter || storedChapter.completed !== true) {
    return false
  }

  if (defaultChapter.hasDifficulty) {
    if (!storedChapter.hasDifficulty) {
      return false
    }

    const selectedDifficulty = resolveSelectedDifficulty(
      storedChapter.selectedDifficulty,
      defaultChapter.selectedDifficulty
    )
    const storedDifficulty = getDifficulties(storedChapter).find(
      (difficulty) => difficulty.level === selectedDifficulty
    )
    const storedLessons = getLessons(storedDifficulty?.lessons)

    return (
      storedLessons.length > 0 &&
      storedLessons.every((lesson) => lesson.completed === true)
    )
  }

  if (storedChapter.hasDifficulty) {
    return false
  }

  const storedLessons = getPlainChapterLessons(storedChapter)
  return (
    storedLessons.length > 0 &&
    storedLessons.every((lesson) => lesson.completed === true)
  )
}

const shouldPreserveStoredCompletedChapter = (
  storedChapter: ChapterInState | undefined,
  defaultChapter: ChapterInState,
  progress: CourseProgress,
  defaults: CourseProgress
): boolean => {
  if (!hasCompletedStoredLessons(storedChapter, defaultChapter)) {
    return false
  }

  const currentLessonOrder = getDefaultLessonOrder(
    progress.currentLesson,
    defaults
  )
  const chapterMaxOrder = getDefaultChapterMaxOrder(defaultChapter, defaults)

  return (
    currentLessonOrder !== null &&
    chapterMaxOrder !== null &&
    currentLessonOrder >= chapterMaxOrder
  )
}

export const findChapterIdForLesson = (
  lessonId: string,
  progress: CourseProgress
): number | null => {
  for (const chapter of getChapters(progress)) {
    if (chapter.hasDifficulty) {
      const lessons = getDifficultyChapterLessons(chapter)
      if (lessons.some((lesson) => lesson.id === lessonId)) {
        return chapter.id
      }
    } else if (
      getPlainChapterLessons(chapter).some((lesson) => lesson.id === lessonId)
    ) {
      return chapter.id
    }
  }
  return null
}

export const isLessonCompletedInProgress = (
  progress: CourseProgress,
  lessonId: string
): boolean => {
  for (const chapter of getChapters(progress)) {
    if (chapter.hasDifficulty) {
      const lessons = getDifficultyChapterLessons(chapter)
      const lesson = lessons.find((lesson) => lesson.id === lessonId)
      if (lesson) return lesson.completed === true
    } else {
      const lesson = getPlainChapterLessons(chapter).find(
        (lesson) => lesson.id === lessonId
      )
      if (lesson) return lesson.completed === true
    }
  }
  return false
}

export const getFirstIncompleteLesson = (
  progress: CourseProgress
): LessonInState | null => {
  for (const chapter of getChapters(progress)) {
    if (!chapter.completed) {
      let lessons: LessonInState[] = []

      if (chapter.hasDifficulty) {
        const difficulty = getDifficulties(chapter).find(
          (d) => d.level === chapter.selectedDifficulty
        )
        if (difficulty) {
          lessons = getLessons(difficulty.lessons)
        }
      } else {
        lessons = getPlainChapterLessons(chapter)
      }

      for (const lesson of lessons) {
        if (!lesson.completed) {
          return lesson
        }
      }
    }
  }

  return null
}

export const getFirstIncompleteLessonFromStoredProgress = (
  progress: CourseProgress,
  defaults: CourseProgress
): LessonInState | null => {
  // Use stored completion flags to find the earliest incomplete lesson.
  for (const defaultChapter of defaults.chapters) {
    const storedChapter = getChapters(progress).find(
      (chapter) => chapter.id === defaultChapter.id
    )

    if (
      shouldPreserveStoredCompletedChapter(
        storedChapter,
        defaultChapter,
        progress,
        defaults
      )
    ) {
      continue
    }

    if (defaultChapter.hasDifficulty) {
      const selectedDifficulty = resolveSelectedDifficulty(
        storedChapter && storedChapter.hasDifficulty
          ? storedChapter.selectedDifficulty
          : undefined,
        defaultChapter.selectedDifficulty
      )
      const defaultDifficulty = defaultChapter.difficulties.find(
        (difficulty) => difficulty.level === selectedDifficulty
      )
      const storedDifficulty =
        storedChapter && storedChapter.hasDifficulty
          ? getDifficulties(storedChapter).find(
              (difficulty) => difficulty.level === selectedDifficulty
            )
          : undefined
      const storedLessonCompletion = new Map(
        getLessons(storedDifficulty?.lessons).map((lesson) => [
          lesson.id,
          lesson.completed === true,
        ])
      )
      const lessons = defaultDifficulty?.lessons ?? []
      const firstIncomplete = lessons.find(
        (lesson) => !storedLessonCompletion.get(lesson.id)
      )
      if (firstIncomplete) {
        return firstIncomplete
      }
      continue
    }

    const storedLessonCompletion = new Map(
      storedChapter && !storedChapter.hasDifficulty
        ? getPlainChapterLessons(storedChapter).map((lesson) => [
            lesson.id,
            lesson.completed === true,
          ])
        : []
    )
    const firstIncomplete = defaultChapter.lessons.find(
      (lesson) => !storedLessonCompletion.get(lesson.id)
    )
    if (firstIncomplete) {
      return firstIncomplete
    }
  }

  return null
}
