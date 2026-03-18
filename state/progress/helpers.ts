import { ChapterInState, LessonInState } from 'types'

/**
 * Returns the lesson list progression should use for this chapter.
 *
 * For difficulty chapters, we intentionally only use the currently selected
 * track so the rest of the state logic sees a single linear lesson list.
 */
export function getChapterLessons(chapter: ChapterInState): LessonInState[] {
  if (chapter.hasDifficulty) {
    // Difficulty chapters store multiple variants, so pick the active one.
    return (
      chapter.difficulties?.find((d) => d.level === chapter.selectedDifficulty)
        ?.lessons || []
    )
  }

  // Regular chapters already have one plain lesson list.
  return chapter.lessons || []
}

/**
 * Returns every lesson variant in this chapter.
 *
 * This is useful for lookups that need to find a lesson id no matter which
 * difficulty track it lives in.
 */
export function getAllChapterLessons(chapter: ChapterInState): LessonInState[] {
  if (chapter.hasDifficulty) {
    // Flatten all difficulty tracks into one searchable list.
    return (
      chapter.difficulties?.flatMap((difficulty) => difficulty.lessons) || []
    )
  }

  // Regular chapters already include every lesson in a single array.
  return chapter.lessons || []
}

/**
 * Returns a new chapter array with the given lesson marked as complete.
 *
 * Handles both plain chapters (flat lesson list) and difficulty chapters
 * (only touches the currently selected track, leaves others alone).
 * This is a pure function — the original array is never mutated.
 */
export function markLessonCompleteInChapters(
  chapters: ChapterInState[],
  lessonId: string
): ChapterInState[] {
  return chapters.map((chapter) => {
    if (chapter.hasDifficulty) {
      return {
        ...chapter,
        // Walk each difficulty track, but only flip completion on the selected one.
        difficulties: chapter.difficulties.map((difficulty) => {
          if (difficulty.level !== chapter.selectedDifficulty) {
            return difficulty
          }

          return {
            ...difficulty,
            lessons: difficulty.lessons.map((lesson) =>
              lesson.id === lessonId ? { ...lesson, completed: true } : lesson
            ),
          }
        }),
      }
    }

    // Plain chapter — just map over the single lesson list.
    return {
      ...chapter,
      lessons: (chapter.lessons || []).map((lesson) =>
        lesson.id === lessonId ? { ...lesson, completed: true } : lesson
      ),
    }
  })
}

/**
 * Scans chapters forward to find the first lesson that still needs doing.
 *
 * You can pass a `startIndex` to skip earlier chapters (handy when you already
 * know the user is past them). Returns the lesson and its parent chapter id,
 * or null if every lesson in the course is complete.
 *
 * For difficulty chapters this resolves to the currently selected track,
 * since that's the only track the user can actually progress through.
 */
export function findNextIncompleteLesson(
  chapters: ChapterInState[],
  startIndex: number = 0
): { lesson: LessonInState; chapterId: number } | null {
  for (let i = startIndex; i < chapters.length; i++) {
    const chapter = chapters[i]
    const lessons = getChapterLessons(chapter)
    const incomplete = lessons.find((lesson) => !lesson.completed)

    if (incomplete) {
      return { lesson: incomplete, chapterId: chapter.id }
    }
  }

  return null
}
