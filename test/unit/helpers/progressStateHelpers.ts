import { CourseProgress, LessonInState } from 'types'

// Mirror progressState's chapter shape so tests can toggle completion on both
// plain and difficulty-based chapters with one helper.
export const setLessonCompleted = (
  progress: CourseProgress,
  lessonId: string,
  completed: boolean
) => {
  const nextProgress = structuredClone(progress)

  for (const chapter of nextProgress.chapters) {
    let lessons: LessonInState[] = []
    if (chapter.hasDifficulty) {
      // Mirror production behavior: updates only apply to the currently
      // selected difficulty track.
      const selectedDifficulty = chapter.difficulties.find(
        (difficulty) => difficulty.level === chapter.selectedDifficulty
      )
      lessons = selectedDifficulty ? selectedDifficulty.lessons : []
    } else {
      lessons = chapter.lessons
    }

    for (const lesson of lessons) {
      if (lesson.id === lessonId) {
        lesson.completed = completed
      }
    }
  }

  return nextProgress
}

// Helper to set completion status for multiple lessons at once.
export const setLessonsCompleted = (
  progress: CourseProgress,
  lessonIds: string[],
  completed: boolean
) => {
  let nextProgress = progress

  for (const lessonId of lessonIds) {
    nextProgress = setLessonCompleted(nextProgress, lessonId, completed)
  }

  return nextProgress
}

// Recompute chapter completion flags from lesson completion.
// For difficulty chapters, we mirror app behavior by deriving `completed`
// from the currently selected difficulty only.
export const syncChapterCompletion = (progress: CourseProgress) => {
  const nextProgress = structuredClone(progress)

  for (const chapter of nextProgress.chapters) {
    if (chapter.hasDifficulty) {
      const selectedDifficulty = chapter.difficulties.find(
        (difficulty) => difficulty.level === chapter.selectedDifficulty
      )
      chapter.completed = selectedDifficulty
        ? selectedDifficulty.lessons.every((lesson) => lesson.completed)
        : false
      continue
    }

    chapter.completed = chapter.lessons.every((lesson) => lesson.completed)
  }

  return nextProgress
}
