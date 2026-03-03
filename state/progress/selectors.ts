import { atom } from 'jotai'
import { LessonInState } from 'types'
import { getChapterLessons } from './helpers'
import { syncedCourseProgressAtom } from './atoms'

/** Read/write pointer for the chapter the user is currently on. */
export const currentChapterAtom = atom(
  // Pull the current chapter pointer from synced progress.
  (get) => get(syncedCourseProgressAtom).currentChapter,
  (get, set, newChapter: number) => {
    // Keep everything else as-is and only update chapter pointer.
    const courseProgress = get(syncedCourseProgressAtom)
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      currentChapter: newChapter,
    })
  }
)

/** Read/write pointer for the current lesson id. */
export const currentLessonAtom = atom(
  // Pull the current lesson pointer from synced progress.
  (get) => get(syncedCourseProgressAtom).currentLesson,
  (get, set, newLesson: string) => {
    // Keep everything else as-is and only update lesson pointer.
    const courseProgress = get(syncedCourseProgressAtom)
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      currentLesson: newLesson,
    })
  }
)

/**
 * Returns the first incomplete lesson in course order.
 *
 * This acts as a resilient "where should we be?" selector if stored pointers
 * ever get out of sync with completion flags.
 */
export const currentLessonComputedAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)

  // Walk chapters in order because progression order matters.
  for (const chapter of courseProgress.chapters) {
    if (!chapter.completed) {
      // For difficulty chapters, this uses whichever track is selected.
      const lessons = getChapterLessons(chapter)

      // The first incomplete lesson is our computed current lesson.
      for (const lesson of lessons) {
        if (!lesson.completed) {
          return lesson
        }
      }
    }
  }

  return null
})

/**
 * Finds the next lesson after `currentLessonAtom`.
 *
 * This is used for explicit "next lesson" flows, which differ from
 * "first incomplete lesson" behavior.
 */
export const nextLessonAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentLesson = get(currentLessonAtom)
  // Flip this once we pass the configured current lesson.
  let foundCurrent = false

  // Iterate in chapter order to match user-visible progression.
  for (const chapter of courseProgress.chapters) {
    if (!chapter.completed) {
      const lessons = getChapterLessons(chapter)

      // Search the chapter for current lesson and its successor.
      for (let i = 0; i < lessons.length; i++) {
        const lesson = lessons[i]
        if (lesson?.id === currentLesson) {
          foundCurrent = true
          if (i + 1 < lessons.length) {
            // Easy case: next lesson is in the same chapter.
            return lessons[i + 1]
          }
        } else if (foundCurrent && !lesson.completed) {
          // Fallback: next incomplete lesson after the current marker.
          return lesson
        }
      }

      // If current lesson was in this chapter, continue scanning forward.
      if (foundCurrent) {
        continue
      }
    }
  }

  return null
})

/** Resolves the route path for the current chapter/lesson pointers. */
export const currentLessonPathAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentChapterId = courseProgress.currentChapter
  const currentLessonId = courseProgress.currentLesson

  // Find the active chapter first.
  const currentChapter = courseProgress.chapters.find(
    (chapter) => chapter.id === currentChapterId
  )

  if (!currentChapter) {
    return null
  }

  const lessons = getChapterLessons(currentChapter)
  // Find the active lesson in that chapter.
  const currentLesson = lessons.find((lesson) => lesson.id === currentLessonId)

  return currentLesson ? currentLesson.path : null
})

/**
 * Resolves the path of the next lesson in reading order.
 *
 * Keeps navigation components from re-implementing traversal logic.
 */
export const nextLessonPathAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)
  // Use computed current lesson so this stays aligned with completion state.
  const currentLesson = get(currentLessonComputedAtom)

  if (!currentLesson) {
    return null
  }

  let nextLesson: LessonInState | null = null

  // Start at the current chapter pointer and scan forward.
  for (
    let i = courseProgress.currentChapter - 1;
    i < courseProgress.chapters.length;
    i++
  ) {
    const chapter = courseProgress.chapters[i]
    const lessons = getChapterLessons(chapter)

    const currentLessonIndex = lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    )

    if (currentLessonIndex !== -1 && currentLessonIndex < lessons.length - 1) {
      // Next lesson is right here in the same chapter.
      nextLesson = lessons[currentLessonIndex + 1]
      break
    } else if (i < courseProgress.chapters.length - 1) {
      // Otherwise jump to the first lesson of the next chapter.
      const nextChapter = courseProgress.chapters[i + 1]
      const nextLessons = getChapterLessons(nextChapter)
      nextLesson = nextLessons[0] || null
      break
    }
  }

  return nextLesson ? nextLesson.path : null
})
