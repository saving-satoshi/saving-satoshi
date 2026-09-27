import { getProgressLocal } from 'api/local'
import { getProgress } from 'api/progress'
import { atom } from 'jotai'
import { allLessonOrder } from 'lib/progess'
import { CourseProgress } from 'types'
import { accountAtom, isAuthLoadingAtom, presentPageAtom } from '../state'
import {
  isLoadingProgressAtom,
  isProgressLoadedAtom,
  syncedCourseProgressAtom,
} from './atoms'
import { defaultProgressState } from './defaultProgress'
import {
  findNextIncompleteLesson,
  getChapterLessons,
  markLessonCompleteInChapters,
} from './helpers'
import { currentLessonComputedAtom } from './selectors'
import { mergeProgressState } from './utils'

/**
 * Completes the computed current lesson and advances to the next one.
 *
 * Uses page-position gating to make sure we're actually on the right page
 * before marking anything done — this prevents accidental completion if the
 * user navigates away mid-lesson.
 */
export const progressToNextLessonAtom = atom(null, (get, set) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentLesson = get(currentLessonComputedAtom)
  const presentLesson = get(presentPageAtom)

  // Nothing left to complete — the whole course is done.
  if (!currentLesson) {
    return
  }

  // Gate: only proceed if the page the user is on matches the lesson we'd
  // mark complete. This stops us from accidentally completing a lesson the
  // user hasn't actually reached yet.
  const onCorrectPage =
    allLessonOrder[presentLesson] === allLessonOrder[currentLesson.id]
  if (!onCorrectPage) {
    return
  }

  // Mark the lesson done and find what comes next.
  const updatedChapters = markLessonCompleteInChapters(
    courseProgress.chapters,
    currentLesson.id
  )
  const next = findNextIncompleteLesson(
    updatedChapters,
    courseProgress.currentChapter - 1
  )

  set(syncedCourseProgressAtom, {
    ...courseProgress,
    chapters: updatedChapters,
    currentChapter: next ? next.chapterId : courseProgress.currentChapter,
    currentLesson: next ? next.lesson.id : courseProgress.currentLesson,
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
 * Marks a specific lesson as complete by id, then advances to the next one.
 *
 * Unlike `progressToNextLessonAtom` (which uses page-position gating), this
 * atom takes a lesson id directly. It's used by flows like the chapter-end
 * screen where the caller already knows exactly which lesson just finished.
 *
 * Includes a legacy chapter-boundary check that detects when the next lesson
 * lives in a different chapter and marks the current chapter as complete.
 * The detection uses substring parsing on lesson ids — it's fragile but
 * preserved for backward compat. See the inline comment for details.
 */
export const markLessonAsCompleteAtom = atom(
  null,
  (get, set, lessonId: string) => {
    const courseProgress = get(syncedCourseProgressAtom)

    // Figure out which chapter this lesson belongs to so we can detect
    // chapter transitions later.
    const currentChapter = courseProgress.chapters.find((chapter) =>
      getChapterLessons(chapter).some((lesson) => lesson.id === lessonId)
    )

    // Mark the lesson done across all chapters (handles difficulty branching).
    let updatedChapters = markLessonCompleteInChapters(
      courseProgress.chapters,
      lessonId
    )

    // First pass: find the next incomplete lesson scanning from the top.
    let next = findNextIncompleteLesson(updatedChapters)
    let nextChapter = next ? next.chapterId : courseProgress.currentChapter
    let nextLesson = next ? next.lesson : null

    // Legacy quirk: detect chapter boundary crossings by parsing a single
    // digit from the lesson id (e.g., "CH6INT1" -> 6). This only grabs one
    // character at position [2], so chapter 10+ ids like "CH10INT1" parse
    // as "1" instead of "10" — which actually triggers the chapter-complete
    // path for chapter 10. This is known and preserved intentionally.
    if (currentChapter?.id !== Number(nextLesson?.id?.substring(2, 3))) {
      // We've crossed into a different chapter, so mark the old one complete.
      if (currentChapter) {
        updatedChapters = updatedChapters.map((chapter) =>
          chapter.id === currentChapter.id
            ? { ...chapter, completed: true }
            : chapter
        )
      }

      // Re-scan from where we left off since chapter completion may shift things.
      const nextScan = findNextIncompleteLesson(
        updatedChapters,
        nextChapter - 1
      )
      if (nextScan) {
        nextChapter = nextScan.chapterId
        nextLesson = nextScan.lesson
      }
    }

    // Persist everything in a single state update.
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
