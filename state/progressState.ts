import { getProgressLocal, setProgressLocal } from 'api/local'
import { getProgress, setProgress } from 'api/progress'
import { lessons } from 'content'
import { atom } from 'jotai'
import { atomEffect } from 'jotai-effect'
import { allLessonOrder } from 'lib/progess'
import {
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
  DifficultyLevel,
  LessonInState,
} from 'types'
import { defaultProgressState } from './constants'
import { accountAtom, isAuthLoadingAtom, presentPageAtom } from './state'

// These were previously defined in this file and moved to files that can be shared with
// the e2e tests. Re-export them here so we don't need to update all of the references.
// TODO: remove these exports once we've updated all references.
export { defaultProgressState, DifficultyLevel }

export const isLoadingProgressAtom = atom<boolean>(true)

export const isProgressLoadedAtom = atom<boolean>(false)

export const courseProgressAtom = atom<CourseProgress>(defaultProgressState)

// Derived atom that combines account and course progress states
const combinedProgressAndAccountAtom = atom((get) => {
  const account = get(accountAtom)
  const courseProgress = get(courseProgressAtom)
  const isAuthLoading = get(isAuthLoadingAtom)
  const isProgressLoaded = get(isProgressLoadedAtom)
  return { account, courseProgress, isAuthLoading, isProgressLoaded }
})

// Effect atom to sync course progress using atomEffect
const syncCourseProgressEffectAtom = atomEffect((get) => {
  const { account, courseProgress, isAuthLoading, isProgressLoaded } = get(
    combinedProgressAndAccountAtom
  )
  if (isAuthLoading || !isProgressLoaded) return

  setProgressLocal(courseProgress)

  if (account) {
    setProgress(courseProgress)
  }
})

// Atom to trigger the effect whenever course progress or authentication changes
export const syncedCourseProgressAtom = atom(
  (get) => {
    get(syncCourseProgressEffectAtom) // This will trigger the effect
    return get(courseProgressAtom)
  },
  (get, set, update: Partial<CourseProgress>) => {
    set(courseProgressAtom, (prev) => ({ ...prev, ...update }))
  }
)

export const currentChapterAtom = atom(
  (get) => get(syncedCourseProgressAtom).currentChapter,
  (get, set, newChapter: number) => {
    const courseProgress = get(syncedCourseProgressAtom)
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      currentChapter: newChapter,
    })
  }
)

export const currentLessonAtom = atom(
  (get) => get(syncedCourseProgressAtom).currentLesson,
  (get, set, newLesson: string) => {
    const courseProgress = get(syncedCourseProgressAtom)
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      currentLesson: newLesson,
    })
  }
)

export const currentLessonComputedAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)

  for (const chapter of courseProgress.chapters) {
    if (!chapter.completed) {
      let lessons: LessonInState[] = []

      if (chapter.hasDifficulty) {
        const difficulty = chapter.difficulties?.find(
          (d) => d.level === chapter.selectedDifficulty
        )
        if (difficulty) {
          lessons = difficulty.lessons
        }
      } else {
        lessons = chapter.lessons || []
      }

      for (const lesson of lessons) {
        if (!lesson.completed) {
          return lesson
        }
      }
    }
  }

  // If all lessons are complete, return null or handle appropriately
  return null
})

export const nextLessonAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentLesson = get(currentLessonAtom)
  let foundCurrent = false

  for (const chapter of courseProgress.chapters) {
    if (!chapter.completed) {
      let lessons: LessonInState[] = []

      if (chapter.hasDifficulty) {
        const difficulty = chapter.difficulties?.find(
          (d) => d.level === chapter.selectedDifficulty
        )
        if (difficulty) {
          lessons = difficulty.lessons
        }
      } else {
        lessons = chapter.lessons || []
      }

      for (let i = 0; i < lessons.length; i++) {
        const lesson = lessons[i]
        if (lesson?.id === currentLesson) {
          foundCurrent = true
          if (i + 1 < lessons.length) {
            return lessons[i + 1] // Return the next lesson in the same chapter
          }
        } else if (foundCurrent && !lesson.completed) {
          return lesson // Return the next incomplete lesson in the same chapter
        }
      }

      // If current lesson is in this chapter but no more lessons in this chapter, move to next chapter
      if (foundCurrent) {
        continue
      }
    }
  }

  // If all chapters and lessons are complete, return null or handle appropriately
  return null
})

export const currentLessonPathAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentChapterId = courseProgress.currentChapter
  const currentLessonId = courseProgress.currentLesson

  const currentChapter = courseProgress.chapters.find(
    (chapter) => chapter.id === currentChapterId
  )

  if (!currentChapter) {
    return null // Handle case where the current chapter is not found
  }

  let lessons: LessonInState[] = []

  if (currentChapter.hasDifficulty) {
    const difficulty = currentChapter.difficulties?.find(
      (d) => d.level === currentChapter.selectedDifficulty
    )
    if (difficulty) {
      lessons = difficulty.lessons
    }
  } else {
    lessons = currentChapter.lessons || []
  }

  const currentLesson = lessons.find((lesson) => lesson.id === currentLessonId)

  return currentLesson ? currentLesson.path : null
})

export const getLessonById = (
  lessonId: string,
  courseProgress: CourseProgress
) => {
  for (const chapter of courseProgress.chapters) {
    let lessons: LessonInState[] = []

    if (chapter.hasDifficulty) {
      lessons =
        chapter.difficulties?.flatMap((difficulty) => difficulty.lessons) || []
    } else {
      lessons = chapter.lessons || []
    }

    const lesson = lessons.find((lesson) => lesson.id === lessonId)
    if (lesson) {
      return lesson
    }
  }

  // If the lesson is not found, return null or handle appropriately
  return null
}

export const isLastLesson = (
  lessonId: string,
  courseProgress: CourseProgress
) => {
  const lastChapter =
    courseProgress.chapters[courseProgress.chapters.length - 1]

  let lastLesson: LessonInState | undefined

  if (lastChapter.hasDifficulty) {
    // For chapters with difficulties, we'll consider the last lesson of the currently selected difficulty
    const selectedDifficulty = lastChapter.difficulties?.find(
      (d) => d.level === lastChapter.selectedDifficulty
    )
    lastLesson =
      selectedDifficulty?.lessons[selectedDifficulty.lessons.length - 1]
  } else {
    // For chapters without difficulties
    lastLesson = lastChapter.lessons?.[lastChapter.lessons.length - 1]
  }

  return lastLesson?.id === lessonId
}

export const isChapterInProgress = (
  chapterNumber: number,
  courseProgress: CourseProgress
) => {
  const chapter = courseProgress.chapters.find((ch) => ch.id === chapterNumber)

  if (!chapter) return false

  let lessons: LessonInState[] = []

  if (chapter.hasDifficulty) {
    const selectedDifficulty = chapter.difficulties?.find(
      (d) => d.level === chapter.selectedDifficulty
    )
    lessons = selectedDifficulty?.lessons || []
  } else {
    lessons = chapter.lessons || []
  }

  if (lessons.length === 0) return false

  const firstLessonCompleted = lessons[0].completed
  const allLessonsCompleted = lessons.every((lesson) => lesson.completed)

  return firstLessonCompleted && !allLessonsCompleted
}

export const progressToNextLessonAtom = atom(null, (get, set) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentLesson = get(currentLessonComputedAtom)
  const presentLesson = get(presentPageAtom)
  if (!currentLesson) {
    // All lessons are complete
    return
  }

  const updatedChapters = courseProgress.chapters.map((chapter) => {
    if (chapter.hasDifficulty) {
      return {
        ...chapter,
        difficulties: chapter.difficulties.map((difficulty) => {
          if (difficulty.level === chapter.selectedDifficulty) {
            return {
              ...difficulty,
              lessons: difficulty.lessons.map((lesson) =>
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
    } else {
      return {
        ...chapter,
        lessons: chapter.lessons.map((lesson) =>
          lesson.id === currentLesson.id &&
          allLessonOrder[presentLesson] === allLessonOrder[currentLesson.id]
            ? { ...lesson, completed: true }
            : lesson
        ),
      }
    }
  })

  // Find the next lesson
  let nextLesson: LessonInState | null = null
  let nextChapter = courseProgress.currentChapter

  for (
    let i = courseProgress.currentChapter - 1;
    i < updatedChapters.length;
    i++
  ) {
    const chapter = updatedChapters[i]
    let lessons: LessonInState[]

    if (chapter.hasDifficulty) {
      const difficulty = chapter.difficulties.find(
        (d) => d.level === chapter.selectedDifficulty
      )
      lessons = difficulty ? difficulty.lessons : []
    } else {
      lessons = chapter.lessons
    }

    const nextIncompleteLesson = lessons.find((lesson) => !lesson.completed)
    if (nextIncompleteLesson) {
      nextLesson = nextIncompleteLesson
      nextChapter = chapter.id
      break
    }
  }

  set(syncedCourseProgressAtom, {
    ...courseProgress,
    chapters: updatedChapters,
    currentChapter: nextChapter,
    currentLesson: nextLesson ? nextLesson.id : courseProgress.currentLesson,
  })
})

export const nextLessonPathAtom = atom((get) => {
  const courseProgress = get(syncedCourseProgressAtom)
  const currentLesson = get(currentLessonComputedAtom)

  if (!currentLesson) {
    // All lessons are complete, return null or a default path
    return null
  }

  let nextLesson: LessonInState | null = null

  for (
    let i = courseProgress.currentChapter - 1;
    i < courseProgress.chapters.length;
    i++
  ) {
    const chapter = courseProgress.chapters[i]
    let lessons: LessonInState[]

    if (chapter.hasDifficulty) {
      const difficulty = chapter.difficulties.find(
        (d) => d.level === chapter.selectedDifficulty
      )
      lessons = difficulty ? difficulty.lessons : []
    } else {
      lessons = chapter.lessons
    }

    const currentLessonIndex = lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    )

    if (currentLessonIndex !== -1 && currentLessonIndex < lessons.length - 1) {
      // Next lesson is in the same chapter
      nextLesson = lessons[currentLessonIndex + 1]
      break
    } else if (i < courseProgress.chapters.length - 1) {
      // Next lesson is in the next chapter
      const nextChapter = courseProgress.chapters[i + 1]
      if (nextChapter.hasDifficulty) {
        const difficulty = nextChapter.difficulties.find(
          (d) => d.level === nextChapter.selectedDifficulty
        )
        nextLesson = difficulty ? difficulty.lessons[0] : null
      } else {
        nextLesson = nextChapter.lessons[0]
      }
      break
    }
  }

  return nextLesson ? nextLesson.path : null
})

export function mergeProgressState(
  defaultState: CourseProgress,
  backendState: CourseProgress
): CourseProgress {
  const mergedChapters = defaultState.chapters.map((defaultChapter) => {
    const backendChapter = backendState.chapters.find(
      (c) => c.id === defaultChapter.id
    )

    if (!backendChapter) {
      return defaultChapter
    }

    if (defaultChapter.hasDifficulty && 'difficulties' in backendChapter) {
      return {
        ...defaultChapter,
        difficulties: defaultChapter.difficulties.map((defaultDiff) => {
          const backendDiff = backendChapter.difficulties.find(
            (d) => d.level === defaultDiff.level
          )
          if (!backendDiff) return defaultDiff

          return {
            ...defaultDiff,
            completed: backendDiff.completed,
            lessons: defaultDiff.lessons.map((defaultLesson) => {
              const backendLesson = backendDiff.lessons.find(
                (l) => l.id === defaultLesson.id
              )
              return backendLesson
                ? { ...defaultLesson, completed: backendLesson.completed }
                : defaultLesson
            }),
          }
        }),
        completed: backendChapter.completed,
        selectedDifficulty: backendChapter.selectedDifficulty,
      } as ChapterWithDifficulties
    } else if (!defaultChapter.hasDifficulty && 'lessons' in backendChapter) {
      return {
        ...defaultChapter,
        completed: backendChapter.completed,
        lessons: defaultChapter.lessons.map((defaultLesson) => {
          const backendLesson = backendChapter.lessons.find(
            (l) => l.id === defaultLesson.id
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
    currentChapter: backendState.currentChapter,
    currentLesson: backendState.currentLesson,
  }
}

export const loadProgressAtom = atom(null, async (get, set) => {
  const account = get(accountAtom)
  const isLoadingAccount = get(isAuthLoadingAtom)

  if (isLoadingAccount) return

  set(isLoadingProgressAtom, true)

  let progress: CourseProgress | null = null

  if (account) {
    progress = await getProgress()
  }

  if (!progress) {
    progress = await getProgressLocal()
  }

  const finalProgress = progress || defaultProgressState

  set(
    syncedCourseProgressAtom,
    mergeProgressState(defaultProgressState, finalProgress)
  )
  set(isProgressLoadedAtom, true)
  set(isLoadingProgressAtom, false)
})

export const getLessonKey = (chapterId, lessonId) => {
  if (!(chapterId in lessons)) {
    return undefined
  }

  const chapterLessons = lessons[chapterId]
  if (!(lessonId in chapterLessons)) {
    return undefined
  }

  const lesson = chapterLessons[lessonId]
  if (!lesson) {
    return undefined
  }
  return lesson.metadata.key
}

export const isLessonCompletedUsingId = (
  lessonId: string,
  courseProgress: CourseProgress
): boolean => {
  for (const chapter of courseProgress.chapters) {
    let lessons: LessonInState[] = []

    if (chapter.hasDifficulty) {
      const difficulty = chapter.difficulties?.find(
        (d) => d.level === chapter.selectedDifficulty
      )
      if (difficulty) {
        lessons = difficulty.lessons
      }
    } else {
      lessons = chapter.lessons || []
    }

    const lesson = lessons.find((l) => l.id === lessonId)
    if (lesson) {
      return lesson.completed
    }
  }

  return false // If the lesson is not found, we consider it not completed
}

export const isLessonCompletedUsingLessonName = (
  chapterId: string,
  lessonName: string,
  courseProgress: CourseProgress
): boolean => {
  return isLessonCompletedUsingId(
    getLessonKey(chapterId, lessonName),
    courseProgress
  )
}

export const isLessonUnlockedUsingId = (
  lessonId: string,
  courseProgress: CourseProgress
): boolean => {
  for (
    let chapterIndex = 0;
    chapterIndex < courseProgress.chapters.length;
    chapterIndex++
  ) {
    const chapter = courseProgress.chapters[chapterIndex]
    let lessons: LessonInState[] = []

    if (chapter.hasDifficulty) {
      const difficulty = chapter.difficulties?.find(
        (d) => d.level === chapter.selectedDifficulty
      )
      if (difficulty) {
        lessons = difficulty.lessons
      }
    } else {
      lessons = chapter.lessons || []
    }

    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i]
      const prevLesson = lessons[i - 1]
      if (lesson.id === lessonId) {
        if (prevLesson?.completed) {
          return true
        } else if (i === 0) {
          if (chapterIndex === 0) {
            // First chapter, first lesson should be unlocked initially
            return true
          } else {
            // Check if the previous chapter is completed
            const previousChapter = courseProgress.chapters[chapterIndex - 1]
            return previousChapter.completed
          }
        }
        return false
      }
    }
  }

  return false // If the lesson is not found, it's not unlocked
}

export const isLessonUnlockedUsingLessonName = (
  chapterId: string,
  lessonName: string,
  courseProgress: CourseProgress
): boolean => {
  return isLessonUnlockedUsingId(
    getLessonKey(chapterId, lessonName),
    courseProgress
  )
}

export const getNextLessonUsingChapterIdAndLessonName = (
  chapterId: string,
  lessonName: string,
  courseProgress: CourseProgress
): LessonInState | null => {
  // Find the current chapter based on chapterId
  const currentChapter = courseProgress.chapters.find(
    (chapter) => `chapter-${chapter.id}` === chapterId
  )

  if (!currentChapter) {
    console.error('Chapter not found')
    return null
  }

  // Determine the lessons in the current chapter
  let lessons: LessonInState[] = []

  if (currentChapter.hasDifficulty) {
    const difficulty = currentChapter.difficulties?.find(
      (d) => d.level === currentChapter.selectedDifficulty
    )
    if (difficulty) {
      lessons = difficulty.lessons
    }
  } else {
    lessons = currentChapter.lessons || []
  }

  // Find the index of the current lesson
  const currentLessonIndex = lessons.findIndex(
    (lesson) => lesson.path.split('/').pop() === lessonName
  )

  if (currentLessonIndex === -1) {
    console.error('Lesson not found')
    return null
  }

  // Find the next lesson in the same chapter
  if (currentLessonIndex < lessons.length - 1) {
    return lessons[currentLessonIndex + 1]
  }

  // If no more lessons in the current chapter, find the first lesson of the next chapter
  const currentChapterIndex = courseProgress.chapters.findIndex(
    (chapter) => `chapter-${chapter.id}` === chapterId
  )

  for (
    let i = currentChapterIndex + 1;
    i < courseProgress.chapters.length;
    i++
  ) {
    const nextChapter = courseProgress.chapters[i]
    let nextLessons: LessonInState[] = []

    if (nextChapter.hasDifficulty) {
      const nextDifficulty = nextChapter.difficulties?.find(
        (d) => d.level === nextChapter.selectedDifficulty
      )
      if (nextDifficulty) {
        nextLessons = nextDifficulty.lessons
      }
    } else {
      nextLessons = nextChapter.lessons || []
    }

    if (nextLessons.length > 0) {
      return nextLessons[0]
    }
  }

  // If there are no more lessons, return null
  return null
}

export const markLessonAsCompleteAtom = atom(
  null,
  (get, set, lessonId: string) => {
    const courseProgress = get(syncedCourseProgressAtom)
    let updatedChapters = [...courseProgress.chapters]
    let nextLesson: LessonInState | null | undefined = null
    let nextChapter = courseProgress.currentChapter
    let currentChapter = updatedChapters.find((chapter) => {
      if (chapter.hasDifficulty) {
        const difficulty = chapter.difficulties?.find(
          (d) => d.level === chapter.selectedDifficulty
        )
        return difficulty?.lessons.find((lesson) => lesson.id === lessonId)
      } else {
        return chapter.lessons?.find((lesson) => lesson.id === lessonId)
      }
    })

    for (let i = 0; i < updatedChapters.length; i++) {
      const chapter = updatedChapters[i]
      let lessons: LessonInState[] = []
      let updatedLessons: LessonInState[] = []

      if (chapter.hasDifficulty) {
        const difficulty = chapter.difficulties?.find(
          (d) => d.level === chapter.selectedDifficulty
        )
        if (difficulty) {
          lessons = difficulty.lessons
          updatedLessons = lessons.map((lesson) =>
            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
          )
          updatedChapters[i] = {
            ...chapter,
            difficulties: chapter.difficulties.map((d) =>
              d.level === chapter.selectedDifficulty
                ? { ...d, lessons: updatedLessons }
                : d
            ),
          }
        }
      } else {
        lessons = chapter.lessons || []
        updatedLessons = lessons.map((lesson) =>
          lesson.id === lessonId ? { ...lesson, completed: true } : lesson
        )
        updatedChapters[i] = { ...chapter, lessons: updatedLessons }
      }

      // Find the next incomplete lesson
      if (!nextLesson) {
        nextLesson = updatedLessons.find((lesson) => !lesson.completed)
        if (nextLesson) {
          nextChapter = chapter.id
        }
      }
    }

    // If the next lesson is not in the same chapter as the current chapter, look for the next chapter
    if (currentChapter?.id !== Number(nextLesson?.id?.substring(2, 3))) {
      // mark current chapter as complete
      if (currentChapter) {
        updatedChapters = updatedChapters.map((chapter) =>
          chapter.id === currentChapter?.id
            ? { ...chapter, completed: true }
            : chapter
        )
      }
      for (let i = nextChapter; i < updatedChapters.length; i++) {
        const chapter = updatedChapters[i - 1]
        let lessons: LessonInState[] = []

        if (chapter.hasDifficulty) {
          const difficulty = chapter.difficulties?.find(
            (d) => d.level === chapter.selectedDifficulty
          )
          if (difficulty) {
            lessons = difficulty.lessons
          }
        } else {
          lessons = chapter.lessons || []
        }

        nextLesson = lessons.find((lesson) => !lesson.completed)
        if (nextLesson) {
          nextChapter = chapter.id
          break
        }
      }
    }

    set(syncedCourseProgressAtom, {
      ...courseProgress,
      chapters: updatedChapters,
      currentChapter: nextChapter,
      currentLesson: nextLesson ? nextLesson.id : courseProgress.currentLesson,
    })
  }
)

export const setChapterDifficultyAtom = atom(
  null,
  (get, set, { chapterId, difficultyLevel }) => {
    const courseProgress = get(syncedCourseProgressAtom)
    const updatedChapters = courseProgress.chapters.map((chapter) => {
      if (chapter.id === chapterId) {
        return {
          ...chapter,
          selectedDifficulty: difficultyLevel,
        }
      }
      return chapter
    })
    set(syncedCourseProgressAtom, {
      ...courseProgress,
      chapters: updatedChapters,
    })
  }
)
