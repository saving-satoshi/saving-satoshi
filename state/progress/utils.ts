import { lessons } from 'content'
import {
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
  LessonInState,
} from 'types'
import { getAllChapterLessons, getChapterLessons } from './helpers'

/**
 * Finds a lesson by id across the entire course, including all difficulty tracks.
 */
export const getLessonById = (
  lessonId: string | undefined,
  courseProgress: CourseProgress
): LessonInState | null => {
  if (!lessonId) {
    return null
  }

  // Scan every chapter because lesson ids are chapter-scoped in storage.
  for (const chapter of courseProgress.chapters) {
    const chapterLessons = getAllChapterLessons(chapter)
    const lesson = chapterLessons.find(
      (chapterLesson) => chapterLesson.id === lessonId
    )

    if (lesson) {
      return lesson
    }
  }

  return null
}

/**
 * Checks whether a lesson id is the last lesson in the final chapter.
 *
 * Used by UI logic that behaves differently at end of course.
 */
export const isLastLesson = (
  lessonId: string,
  courseProgress: CourseProgress
): boolean => {
  // Chapter array order defines course progression order.
  const lastChapter =
    courseProgress.chapters[courseProgress.chapters.length - 1]
  // For difficulty chapters, this resolves to the active track.
  const lastLessons = getChapterLessons(lastChapter)
  const lastLesson = lastLessons[lastLessons.length - 1]

  return lastLesson?.id === lessonId
}

/**
 * Returns whether a chapter has started but is not fully complete.
 *
 * This powers "in progress" chapter badges in navigation.
 */
export const isChapterInProgress = (
  chapterNumber: number,
  courseProgress: CourseProgress
): boolean => {
  // Missing chapter id means "not in progress."
  const chapter = courseProgress.chapters.find((ch) => ch.id === chapterNumber)

  if (!chapter) {
    return false
  }

  // Use active-track lessons so status matches the current difficulty selection.
  const chapterLessons = getChapterLessons(chapter)

  if (chapterLessons.length === 0) {
    return false
  }

  const firstLessonCompleted = chapterLessons[0].completed
  const allLessonsCompleted = chapterLessons.every((lesson) => lesson.completed)

  return firstLessonCompleted && !allLessonsCompleted
}

/**
 * Merges persisted progress into current defaults while preserving new content.
 *
 * This lets old saved snapshots keep working when new lessons/chapters are
 * added to the default state later.
 */
export function mergeProgressState(
  defaultState: CourseProgress,
  backendState: CourseProgress
): CourseProgress {
  // Merge chapter-by-chapter so missing saved fields fall back to defaults.
  const mergedChapters = defaultState.chapters.map((defaultChapter) => {
    const backendChapter = backendState.chapters.find(
      (chapter) => chapter.id === defaultChapter.id
    )

    if (!backendChapter) {
      // If saved progress has no match, keep the default chapter as-is.
      return defaultChapter
    }

    if (defaultChapter.hasDifficulty && 'difficulties' in backendChapter) {
      return {
        ...defaultChapter,
        // Merge each difficulty track on its own.
        difficulties: defaultChapter.difficulties.map((defaultDifficulty) => {
          const backendDifficulty = backendChapter.difficulties.find(
            (difficulty) => difficulty.level === defaultDifficulty.level
          )

          if (!backendDifficulty) {
            // If a saved track is missing, keep the default one.
            return defaultDifficulty
          }

          return {
            ...defaultDifficulty,
            completed: backendDifficulty.completed,
            // Only merge completion flags; keep default lesson metadata.
            lessons: defaultDifficulty.lessons.map((defaultLesson) => {
              const backendLesson = backendDifficulty.lessons.find(
                (lesson) => lesson.id === defaultLesson.id
              )

              return backendLesson
                ? { ...defaultLesson, completed: backendLesson.completed }
                : defaultLesson
            }),
          }
        }),
        // Keep chapter-level flags from saved state when present.
        completed: backendChapter.completed,
        selectedDifficulty: backendChapter.selectedDifficulty,
      } as ChapterWithDifficulties
    }

    if (!defaultChapter.hasDifficulty && 'lessons' in backendChapter) {
      return {
        ...defaultChapter,
        completed: backendChapter.completed,
        // Merge completion flags while preserving the default lesson list shape.
        lessons: defaultChapter.lessons.map((defaultLesson) => {
          const backendLesson = backendChapter.lessons.find(
            (lesson) => lesson.id === defaultLesson.id
          )

          return backendLesson
            ? { ...defaultLesson, completed: backendLesson.completed }
            : defaultLesson
        }),
      } as ChapterWithoutDifficulties
    }

    return defaultChapter
  })

  return {
    chapters: mergedChapters,
    // Keep navigation pointers from saved state.
    currentChapter: backendState.currentChapter,
    currentLesson: backendState.currentLesson,
  }
}

/**
 * Maps a chapter slug + lesson slug to the canonical lesson key/id.
 *
 * Useful because many call sites work with route slugs, not lesson ids.
 */
export const getLessonKey = (chapterId: string | number, lessonId: string) => {
  // Unknown chapter slug.
  if (!(chapterId in lessons)) {
    return undefined
  }

  const chapterLessons = lessons[chapterId]
  // Unknown lesson slug inside this chapter.
  if (!(lessonId in chapterLessons)) {
    return undefined
  }

  const lesson = chapterLessons[lessonId]
  if (!lesson) {
    return undefined
  }

  return lesson.metadata.key
}

/** Returns completion status for a lesson id in the active course state. */
export const isLessonCompletedUsingId = (
  lessonId: string,
  courseProgress: CourseProgress
): boolean => {
  // Walk chapters and return as soon as we find the lesson id.
  for (const chapter of courseProgress.chapters) {
    const chapterLessons = getChapterLessons(chapter)
    const lesson = chapterLessons.find(
      (chapterLesson) => chapterLesson.id === lessonId
    )

    if (lesson) {
      return lesson.completed
    }
  }

  return false
}

/** Convenience wrapper that accepts chapter/lesson slugs. */
export const isLessonCompletedUsingLessonName = (
  chapterId: string,
  lessonName: string,
  courseProgress: CourseProgress
): boolean => {
  const key = getLessonKey(chapterId, lessonName)
  if (!key) {
    return false
  }
  return isLessonCompletedUsingId(key, courseProgress)
}

/**
 * Returns whether a lesson is currently unlocked.
 *
 * Unlock rules depend on lesson order and chapter boundaries.
 */
export const isLessonUnlockedUsingId = (
  lessonId: string,
  courseProgress: CourseProgress
): boolean => {
  // Evaluate unlock rules from chapter/lesson position.
  for (
    let chapterIndex = 0;
    chapterIndex < courseProgress.chapters.length;
    chapterIndex++
  ) {
    const chapter = courseProgress.chapters[chapterIndex]
    const chapterLessons = getChapterLessons(chapter)

    // Unlock checks use previous lesson plus first-lesson chapter rules.
    for (
      let lessonIndex = 0;
      lessonIndex < chapterLessons.length;
      lessonIndex++
    ) {
      const lesson = chapterLessons[lessonIndex]
      const previousLesson = chapterLessons[lessonIndex - 1]

      if (lesson.id === lessonId) {
        if (previousLesson?.completed) {
          // Normal case: previous lesson in this chapter is complete.
          return true
        }

        if (lessonIndex === 0) {
          if (chapterIndex === 0) {
            // First lesson of the whole course is always unlocked.
            return true
          }

          // First lesson in later chapters unlocks after previous chapter is done.
          const previousChapter = courseProgress.chapters[chapterIndex - 1]
          return previousChapter.completed
        }

        return false
      }
    }
  }

  return false
}

/** Convenience wrapper that accepts chapter/lesson slugs. */
export const isLessonUnlockedUsingLessonName = (
  chapterId: string,
  lessonName: string,
  courseProgress: CourseProgress
): boolean => {
  const key = getLessonKey(chapterId, lessonName)
  if (!key) {
    return false
  }
  return isLessonUnlockedUsingId(key, courseProgress)
}

/**
 * Returns the next lesson from a chapter/lesson slug pair.
 *
 * Gives chapter pages "next lesson" routing without duplicating traversal.
 */
export const getNextLessonUsingChapterIdAndLessonName = (
  chapterId: string,
  lessonName: string,
  courseProgress: CourseProgress
): LessonInState | null => {
  // Resolve chapter from route-style slug.
  const currentChapter = courseProgress.chapters.find(
    (chapter) => `chapter-${chapter.id}` === chapterId
  )

  if (!currentChapter) {
    // Kept for behavior parity with previous implementation.
    console.error('Chapter not found')
    return null
  }

  // Resolve lesson index from route-style lesson slug.
  const currentChapterLessons = getChapterLessons(currentChapter)
  const currentLessonIndex = currentChapterLessons.findIndex(
    (lesson) => lesson.path.split('/').pop() === lessonName
  )

  if (currentLessonIndex === -1) {
    // Kept for behavior parity with previous implementation.
    console.error('Lesson not found')
    return null
  }

  if (currentLessonIndex < currentChapterLessons.length - 1) {
    // Prefer next lesson in the same chapter.
    return currentChapterLessons[currentLessonIndex + 1]
  }

  // Otherwise jump to the first lesson in the next non-empty chapter.
  const currentChapterIndex = courseProgress.chapters.findIndex(
    (chapter) => `chapter-${chapter.id}` === chapterId
  )

  for (
    let chapterIndex = currentChapterIndex + 1;
    chapterIndex < courseProgress.chapters.length;
    chapterIndex++
  ) {
    const nextChapter = courseProgress.chapters[chapterIndex]
    const nextChapterLessons = getChapterLessons(nextChapter)

    if (nextChapterLessons.length > 0) {
      return nextChapterLessons[0]
    }
  }

  return null
}
