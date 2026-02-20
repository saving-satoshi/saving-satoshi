import { getProgressLocal } from 'api/local'
import { getProgress } from 'api/progress'
import { atom } from 'jotai'
import { allLessonOrder } from 'lib/progess'
import { CourseProgress, LessonInState } from 'types'
import { accountAtom, isAuthLoadingAtom, presentPageAtom } from '../state'
import {
  isLoadingProgressAtom,
  isProgressLoadedAtom,
  syncedCourseProgressAtom,
} from './atoms'
import { defaultProgressState } from './defaultProgress'
import { getChapterLessons } from './helpers'
import { currentLessonComputedAtom } from './selectors'
import { mergeProgressState } from './utils'

/**
 * Completes the computed current lesson and advances progression pointers.
 *
 * This keeps "complete + move forward" behavior in one place, so every caller
 * follows the same gating and traversal rules.
 */
export const progressToNextLessonAtom = atom(null, (get, set) => {
  // Grab state plus the current page id used for completion gating.
  const courseProgress = get(syncedCourseProgressAtom)
  const currentLesson = get(currentLessonComputedAtom)
  const presentLesson = get(presentPageAtom)

  // If everything is already complete, there is nothing to do.
  if (!currentLesson) {
    return
  }

  // Build an updated chapter tree, marking one lesson complete if gate passes.
  const updatedChapters = courseProgress.chapters.map((chapter) => {
    if (chapter.hasDifficulty) {
      return {
        ...chapter,
        // Only touch the selected difficulty track.
        difficulties: chapter.difficulties.map((difficulty) => {
          if (difficulty.level === chapter.selectedDifficulty) {
            return {
              ...difficulty,
              // Mark only the targeted lesson when page order matches.
              lessons: difficulty.lessons.map((lesson) =>
                // This gate prevents completing a different lesson by mistake.
                lesson.id === currentLesson.id &&
                allLessonOrder[presentLesson] ===
                  allLessonOrder[currentLesson.id]
                  ? { ...lesson, completed: true }
                  : lesson
              ),
            }
          }

          return difficulty
        }),
      }
    }

    return {
      ...chapter,
      // Non-difficulty chapters have one lesson list to update.
      lessons: chapter.lessons.map((lesson) =>
        lesson.id === currentLesson.id &&
        allLessonOrder[presentLesson] === allLessonOrder[currentLesson.id]
          ? { ...lesson, completed: true }
          : lesson
      ),
    }
  })

  let nextLesson: LessonInState | null = null
  let nextChapter = courseProgress.currentChapter

  // Find the next incomplete lesson starting from the current chapter.
  for (
    let chapterIndex = courseProgress.currentChapter - 1;
    chapterIndex < updatedChapters.length;
    chapterIndex++
  ) {
    const chapter = updatedChapters[chapterIndex]
    const chapterLessons = getChapterLessons(chapter)
    const nextIncompleteLesson = chapterLessons.find(
      (lesson) => !lesson.completed
    )

    if (nextIncompleteLesson) {
      // Keep chapter/lesson pointers aligned with the lesson we found.
      nextLesson = nextIncompleteLesson
      nextChapter = chapter.id
      break
    }
  }

  // If nothing is left, keep current lesson pointer instead of writing null.
  set(syncedCourseProgressAtom, {
    ...courseProgress,
    chapters: updatedChapters,
    currentChapter: nextChapter,
    currentLesson: nextLesson ? nextLesson.id : courseProgress.currentLesson,
  })
})

/**
 * Loads progress from backend/local storage and merges it with defaults.
 *
 * The merge step makes older saved snapshots compatible with newly added
 * lessons or chapters.
 */
export const loadProgressAtom = atom(null, async (get, set) => {
  // Read auth state so we can choose backend vs local source.
  const account = get(accountAtom)
  const isLoadingAccount = get(isAuthLoadingAtom)

  // Wait for auth bootstrap to settle first.
  if (isLoadingAccount) {
    return
  }

  // Turn on loading state for UI.
  set(isLoadingProgressAtom, true)

  let progress: CourseProgress | null = null

  if (account) {
    // Signed-in users try server progress first.
    progress = await getProgress()
  }

  // Fall back to local storage if no backend progress is available.
  if (!progress) {
    progress = await getProgressLocal()
  }

  // Use defaults if neither source returned progress.
  const finalProgress = progress || defaultProgressState

  // Merge persisted values onto current defaults.
  set(
    syncedCourseProgressAtom,
    mergeProgressState(defaultProgressState, finalProgress)
  )
  // Mark first-hydration complete, then clear active loading state.
  // On later refreshes, loaded=true and loading=true is a valid temporary state.
  set(isProgressLoadedAtom, true)
  set(isLoadingProgressAtom, false)
})

/**
 * Marks a specific lesson complete, then repositions to the next incomplete one.
 *
 * This is for flows that complete by lesson id directly instead of using
 * page-position gating.
 */
export const markLessonAsCompleteAtom = atom(
  null,
  (get, set, lessonId: string) => {
    // Snapshot state and set up traversal pointers.
    const courseProgress = get(syncedCourseProgressAtom)
    let updatedChapters = [...courseProgress.chapters]
    let nextLesson: LessonInState | null | undefined = null
    let nextChapter = courseProgress.currentChapter
    // Find which chapter currently contains the target lesson id.
    const currentChapter = updatedChapters.find((chapter) =>
      getChapterLessons(chapter).some((lesson) => lesson.id === lessonId)
    )

    // Mark completion and discover the next incomplete lesson candidate.
    for (
      let chapterIndex = 0;
      chapterIndex < updatedChapters.length;
      chapterIndex++
    ) {
      const chapter = updatedChapters[chapterIndex]
      let chapterLessons: LessonInState[] = []
      let updatedLessons: LessonInState[] = []

      if (chapter.hasDifficulty) {
        // Only mutate the currently selected difficulty variant.
        const difficulty = chapter.difficulties?.find(
          (d) => d.level === chapter.selectedDifficulty
        )

        if (difficulty) {
          chapterLessons = difficulty.lessons
          updatedLessons = chapterLessons.map((lesson) =>
            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
          )
          updatedChapters[chapterIndex] = {
            ...chapter,
            // Keep all non-selected difficulty tracks unchanged.
            difficulties: chapter.difficulties.map((d) =>
              d.level === chapter.selectedDifficulty
                ? { ...d, lessons: updatedLessons }
                : d
            ),
          }
        }
      } else {
        chapterLessons = chapter.lessons || []
        updatedLessons = chapterLessons.map((lesson) =>
          lesson.id === lessonId ? { ...lesson, completed: true } : lesson
        )
        updatedChapters[chapterIndex] = { ...chapter, lessons: updatedLessons }
      }

      if (!nextLesson) {
        // Hold onto the first incomplete lesson we see after updates.
        nextLesson = updatedLessons.find((lesson) => !lesson.completed)
        if (nextLesson) {
          nextChapter = chapter.id
        }
      }
    }

    // Keep known legacy quirk: this parses only one chapter digit from lesson id.
    if (currentChapter?.id !== Number(nextLesson?.id?.substring(2, 3))) {
      // Legacy behavior: mark current chapter complete when next lesson is elsewhere.
      if (currentChapter) {
        updatedChapters = updatedChapters.map((chapter) =>
          chapter.id === currentChapter.id
            ? { ...chapter, completed: true }
            : chapter
        )
      }

      // Continue forward until we find a chapter with remaining lessons.
      for (
        let chapterIndex = nextChapter;
        chapterIndex < updatedChapters.length;
        chapterIndex++
      ) {
        const chapter = updatedChapters[chapterIndex - 1]
        const chapterLessons = getChapterLessons(chapter)

        nextLesson = chapterLessons.find((lesson) => !lesson.completed)
        if (nextLesson) {
          nextChapter = chapter.id
          break
        }
      }
    }

    // Write chapter updates and pointers together in one state update.
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      chapters: updatedChapters,
      currentChapter: nextChapter,
      currentLesson: nextLesson ? nextLesson.id : courseProgress.currentLesson,
    })
  }
)

/** Updates the active difficulty track for a chapter that supports variants. */
export const setChapterDifficultyAtom = atom(
  null,
  (get, set, { chapterId, difficultyLevel }) => {
    const courseProgress = get(syncedCourseProgressAtom)
    // Only update the chapter that matches the requested id.
    const updatedChapters = courseProgress.chapters.map((chapter) => {
      if (chapter.id === chapterId) {
        return {
          ...chapter,
          selectedDifficulty: difficultyLevel,
        }
      }

      return chapter
    })

    // Persist with all non-targeted state left untouched.
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      chapters: updatedChapters,
    })
  }
)
