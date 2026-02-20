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
