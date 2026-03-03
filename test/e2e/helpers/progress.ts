import { defaultProgressState } from '../../../state/constants'
import {
  ChapterInState,
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
} from '../../../types'

/**
 * Get the first lesson key for a chapter.
 */
function getFirstLessonKey(chapter: ChapterInState): string {
  if (chapter.hasDifficulty) {
    return (chapter as ChapterWithDifficulties).difficulties[0].lessons[0].id
  }
  return (chapter as ChapterWithoutDifficulties).lessons[0].id
}

/**
 * Mark a chapter and all its lessons as completed.
 */
function markChapterCompleted(chapter: ChapterInState): void {
  chapter.completed = true

  if (chapter.hasDifficulty) {
    const ch = chapter as ChapterWithDifficulties
    // Only mark NORMAL difficulty as completed by default.
    ch.difficulties[0].completed = true
    ch.difficulties[0].lessons.forEach((l) => (l.completed = true))
  } else {
    const ch = chapter as ChapterWithoutDifficulties
    ch.lessons.forEach((l) => (l.completed = true))
  }
}

/**
 * Create a progress state positioned at the start of a chapter. All preceding
 * chapters are marked as completed. This allows tests to start at any chapter.
 */
export function createProgressAtChapter(chapter: number): CourseProgress {
  const progress = structuredClone(defaultProgressState)

  // Mark all chapters before target as completed.
  for (let i = 0; i < chapter - 1; i++) {
    markChapterCompleted(progress.chapters[i])
  }

  // Set current position to start of target chapter.
  const targetChapter = progress.chapters[chapter - 1]
  progress.currentChapter = chapter
  progress.currentLesson = getFirstLessonKey(targetChapter)

  return progress
}
