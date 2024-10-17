import { getProgressLocal, setProgressLocal } from 'api/local'
import { getProgress, setProgress } from 'api/progress'
import { lessons } from 'content'
import { atom } from 'jotai'
import { atomEffect } from 'jotai-effect'
import {
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
  LessonInState,
} from 'types'
import { accountAtom, isAuthLoadingAtom } from './state'

export enum DifficultyLevel {
  NORMAL = 'NORMAL',
  HARD = 'HARD',
}

export const isLoadingProgressAtom = atom<boolean>(true)

export const isProgressLoadedAtom = atom<boolean>(false)

export const defaultProgressState: CourseProgress = {
  chapters: [
    {
      id: 1,
      lessons: [
        { id: 'CH1INT1', path: '/chapter-1/intro-1', completed: false },
        { id: 'CH1INT2', path: '/chapter-1/intro-2', completed: false },
        { id: 'CH1GEN1', path: '/chapter-1/genesis-1', completed: false },
        { id: 'CH1GEN2', path: '/chapter-1/genesis-2', completed: false },
        { id: 'CH1GEN3', path: '/chapter-1/genesis-3', completed: false },
        { id: 'CH1GEN4', path: '/chapter-1/genesis-4', completed: false },
        { id: 'CH1TRA1', path: '/chapter-1/transacting-1', completed: false },
        { id: 'CH1TRA2', path: '/chapter-1/transacting-2', completed: false },
        { id: 'CH1TRA3', path: '/chapter-1/transacting-3', completed: false },
        { id: 'CH1OUT1', path: '/chapter-1/outro-1', completed: false },
        { id: 'CH1OUT2', path: '/chapter-1/outro-2', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 2,
      lessons: [
        { id: 'CH2INT1', path: '/chapter-2/intro-1', completed: false },
        { id: 'CH2INT2', path: '/chapter-2/intro-2', completed: false },
        { id: 'CH2HSH1', path: '/chapter-2/hashing-1', completed: false },
        { id: 'CH2HSH2', path: '/chapter-2/hashing-2', completed: false },
        { id: 'CH2HSH3', path: '/chapter-2/hashing-3', completed: false },
        { id: 'CH2HSH4', path: '/chapter-2/hashing-4', completed: false },
        { id: 'CH2HSH5', path: '/chapter-2/hashing-5', completed: false },
        { id: 'CH2HSH6', path: '/chapter-2/hashing-6', completed: false },
        { id: 'CH2SCR1', path: '/chapter-2/scripting-1', completed: false },
        { id: 'CH2SCR2', path: '/chapter-2/scripting-2', completed: false },
        { id: 'CH2MIN1', path: '/chapter-2/mining-1', completed: false },
        { id: 'CH2OUT1', path: '/chapter-2/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 3,
      lessons: [
        { id: 'CH3INT1', path: '/chapter-3/intro-1', completed: false },
        { id: 'CH3SOL1', path: '/chapter-3/solo-1', completed: false },
        { id: 'CH3POL1', path: '/chapter-3/pool-1', completed: false },
        { id: 'CH3POL2', path: '/chapter-3/pool-2', completed: false },
        { id: 'CH3COO1', path: '/chapter-3/coop-1', completed: false },
        { id: 'CH3COO2', path: '/chapter-3/coop-2', completed: false },
        { id: 'CH3COO3', path: '/chapter-3/coop-3', completed: false },
        { id: 'CH3SPL1', path: '/chapter-3/split-1', completed: false },
        { id: 'CH3SPL2', path: '/chapter-3/split-2', completed: false },
        { id: 'CH3OUT1', path: '/chapter-3/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 4,
      lessons: [
        { id: 'CH4INT1', path: '/chapter-4/intro-1', completed: false },
        { id: 'CH4PKY1', path: '/chapter-4/public-key-1', completed: false },
        { id: 'CH4PKY2', path: '/chapter-4/public-key-2', completed: false },
        { id: 'CH4PKY3', path: '/chapter-4/public-key-3', completed: false },
        { id: 'CH4PKY4', path: '/chapter-4/public-key-4', completed: false },
        { id: 'CH4ADR1', path: '/chapter-4/address-1', completed: false },
        { id: 'CH4ADR2', path: '/chapter-4/address-2', completed: false },
        { id: 'CH4ADR3', path: '/chapter-4/address-3', completed: false },
        { id: 'CH4OUT1', path: '/chapter-4/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 5,
      lessons: [
        { id: 'CH5INT1', path: '/chapter-5/intro-1', completed: false },
        { id: 'CH5INT2', path: '/chapter-5/intro-2', completed: false },
        { id: 'CH5INT3', path: '/chapter-5/intro-3', completed: false },
        {
          id: 'CH5DRM1',
          path: '/chapter-5/derive-message-1',
          completed: false,
        },
        {
          id: 'CH5DRM2',
          path: '/chapter-5/derive-message-2',
          completed: false,
        },
        {
          id: 'CH5DRM3',
          path: '/chapter-5/derive-message-3',
          completed: false,
        },
        {
          id: 'CH5DRM4',
          path: '/chapter-5/derive-message-4',
          completed: false,
        },
        {
          id: 'CH5DRM5',
          path: '/chapter-5/derive-message-5',
          completed: false,
        },
        {
          id: 'CH5DRM6',
          path: '/chapter-5/derive-message-6',
          completed: false,
        },
        {
          id: 'CH5DRM7',
          path: '/chapter-5/derive-message-7',
          completed: false,
        },
        {
          id: 'CH5VFS1',
          path: '/chapter-5/verify-signature-1',
          completed: false,
        },
        {
          id: 'CH5VFS2',
          path: '/chapter-5/verify-signature-2',
          completed: false,
        },
        {
          id: 'CH5VFS3',
          path: '/chapter-5/verify-signature-3',
          completed: false,
        },
        {
          id: 'CH5VFS4',
          path: '/chapter-5/verify-signature-4',
          completed: false,
        },
        {
          id: 'CH5VFS5',
          path: '/chapter-5/verify-signature-5',
          completed: false,
        },
        {
          id: 'CH5VLS1',
          path: '/chapter-5/validate-signature-1',
          completed: false,
        },
        {
          id: 'CH5VLS2',
          path: '/chapter-5/validate-signature-2',
          completed: false,
        },
        {
          id: 'CH5VLS3',
          path: '/chapter-5/validate-signature-3',
          completed: false,
        },
        {
          id: 'CH5VLS4',
          path: '/chapter-5/validate-signature-4',
          completed: false,
        },
        { id: 'CH5OUT1', path: '/chapter-5/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 6,
      difficulties: [
        {
          level: DifficultyLevel.NORMAL,
          lessons: [
            { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: false },
            { id: 'CH6INT2', path: '/chapter-6/intro-2', completed: false },
            { id: 'CH6INO1', path: '/chapter-6/in-out-1', completed: false },
            { id: 'CH6INO2', path: '/chapter-6/in-out-2', completed: false },
            { id: 'CH6INO3', path: '/chapter-6/in-out-3', completed: false },
            {
              id: 'CH6INO4_NORMAL',
              path: '/chapter-6/in-out-4-normal',
              completed: false,
            },
            { id: 'CH6INO5', path: '/chapter-6/in-out-5', completed: false },
            {
              id: 'CH6PUT1_NORMAL',
              path: '/chapter-6/put-it-together-1-normal',
              completed: false,
            },
            {
              id: 'CH6PUT2_NORMAL',
              path: '/chapter-6/put-it-together-2-normal',
              completed: false,
            },
            {
              id: 'CH6PUT3_NORMAL',
              path: '/chapter-6/put-it-together-3-normal',
              completed: false,
            },
            { id: 'CH6OUT1', path: '/chapter-6/outro-1', completed: false },
          ],
          completed: false,
        },
        {
          level: DifficultyLevel.HARD,
          lessons: [
            { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: false },
            { id: 'CH6INT2', path: '/chapter-6/intro-2', completed: false },
            { id: 'CH6INO1', path: '/chapter-6/in-out-1', completed: false },
            { id: 'CH6INO2', path: '/chapter-6/in-out-2', completed: false },
            { id: 'CH6INO3', path: '/chapter-6/in-out-3', completed: false },
            {
              id: 'CH6INO4_HARD',
              path: '/chapter-6/in-out-4-hard',
              completed: false,
            },
            { id: 'CH6INO5', path: '/chapter-6/in-out-5', completed: false },
            {
              id: 'CH6PUT1_HARD',
              path: '/chapter-6/put-it-together-1-hard',
              completed: false,
            },
            {
              id: 'CH6PUT2_HARD',
              path: '/chapter-6/put-it-together-2-hard',
              completed: false,
            },
            {
              id: 'CH6PUT3_HARD',
              path: '/chapter-6/put-it-together-3-hard',
              completed: false,
            },
            {
              id: 'CH6PUT4_HARD',
              path: '/chapter-6/put-it-together-4-hard',
              completed: false,
            },
            {
              id: 'CH6PUT5_HARD',
              path: '/chapter-6/put-it-together-5-hard',
              completed: false,
            },
            {
              id: 'CH6PUT6_HARD',
              path: '/chapter-6/put-it-together-6-hard',
              completed: false,
            },
            { id: 'CH6OUT1', path: '/chapter-6/outro-1', completed: false },
          ],
          completed: false,
        },
      ],
      completed: false,
      selectedDifficulty: DifficultyLevel.NORMAL,
      hasDifficulty: true,
    },
    {
      id: 7,
      lessons: [
        { id: 'CH7INT1', path: '/chapter-7/intro-1', completed: false },
        { id: 'CH7INT2', path: '/chapter-7/intro-2', completed: false },
        { id: 'CH7INT3', path: '/chapter-7/intro-3', completed: false },
        {
          id: 'CH7MPT1',
          path: '/chapter-7/mempool-transaction-1',
          completed: false,
        },
        { id: 'CH7OUT1', path: '/chapter-7/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 8,
      lessons: [
        { id: 'CH8INT1', path: '/chapter-8/intro-1', completed: false },
        { id: 'CH8INT2', path: '/chapter-8/intro-2', completed: false },
        { id: 'CH8INT3', path: '/chapter-8/intro-3', completed: false },
        {
          id: 'CH8BBK1',
          path: '/chapter-8/building-blocks-1',
          completed: false,
        },
        {
          id: 'CH8BBK2',
          path: '/chapter-8/building-blocks-2',
          completed: false,
        },
        {
          id: 'CH8BBK3',
          path: '/chapter-8/building-blocks-3',
          completed: false,
        },
        {
          id: 'CH8BBK4',
          path: '/chapter-8/building-blocks-4',
          completed: false,
        },
        {
          id: 'CH8BBK5',
          path: '/chapter-8/building-blocks-5',
          completed: false,
        },
        {
          id: 'CH8BBK6',
          path: '/chapter-8/building-blocks-6',
          completed: false,
        },
        {
          id: 'CH8BBK7',
          path: '/chapter-8/building-blocks-7',
          completed: false,
        },
        {
          id: 'CH8BBK8',
          path: '/chapter-8/building-blocks-8',
          completed: false,
        },
        { id: 'CH8OUT1', path: '/chapter-8/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 9,
      lessons: [
        { id: 'CH9INT1', path: '/chapter-9/intro-1', completed: false },
        { id: 'CH9INT2', path: '/chapter-9/intro-2', completed: false },
        { id: 'CH9OPC1', path: '/chapter-9/opcodes-1', completed: false },
        { id: 'CH9OPC2', path: '/chapter-9/opcodes-2', completed: false },
        { id: 'CH9OPC3', path: '/chapter-9/opcodes-3', completed: false },
        { id: 'CH9OPC4', path: '/chapter-9/opcodes-4', completed: false },
        { id: 'CH9OPC5', path: '/chapter-9/opcodes-5', completed: false },
        { id: 'CH9OPC6', path: '/chapter-9/opcodes-6', completed: false },
        { id: 'CH9OPC7', path: '/chapter-9/opcodes-7', completed: false },
        { id: 'CH9OPC8', path: '/chapter-9/opcodes-8', completed: false },
        { id: 'CH9OPC9', path: '/chapter-9/opcodes-9', completed: false },
        { id: 'CH9OPC10', path: '/chapter-9/opcodes-10', completed: false },
        { id: 'CH9PRP1', path: '/chapter-9/proposal-1', completed: false },
        { id: 'CH9PRP2', path: '/chapter-9/proposal-2', completed: false },
        { id: 'CH9PRP3', path: '/chapter-9/proposal-3', completed: false },
        { id: 'CH9PRP4', path: '/chapter-9/proposal-4', completed: false },
        { id: 'CH9OUT1', path: '/chapter-9/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 10,
      lessons: [
        { id: 'CH10INT1', path: '/chapter-10/intro-1', completed: false },
        { id: 'CH10INT2', path: '/chapter-10/intro-2', completed: false },
        { id: 'CH10INT3', path: '/chapter-10/intro-3', completed: false },
        {
          id: 'CH10OAC1',
          path: '/chapter-10/opening-a-channel-1',
          completed: false,
        },
        {
          id: 'CH10OAC2',
          path: '/chapter-10/opening-a-channel-2',
          completed: false,
        },
        {
          id: 'CH10OAC3',
          path: '/chapter-10/opening-a-channel-3',
          completed: false,
        },
        {
          id: 'CH10OAC4',
          path: '/chapter-10/opening-a-channel-4',
          completed: false,
        },
        {
          id: 'CH10OAC5',
          path: '/chapter-10/opening-a-channel-5',
          completed: false,
        },
        {
          id: 'CH10UTS1',
          path: '/chapter-10/updating-the-state-1',
          completed: false,
        },
        {
          id: 'CH10UTS2',
          path: '/chapter-10/updating-the-state-2',
          completed: false,
        },
        {
          id: 'CH10UTS3',
          path: '/chapter-10/updating-the-state-3',
          completed: false,
        },
        {
          id: 'CH10UTS4',
          path: '/chapter-10/updating-the-state-4',
          completed: false,
        },
        {
          id: 'CH10UTS5',
          path: '/chapter-10/updating-the-state-5',
          completed: false,
        },
        {
          id: 'CH10UTS6',
          path: '/chapter-10/updating-the-state-6',
          completed: false,
        },
        {
          id: 'CH10MAP1',
          path: '/chapter-10/making-a-payment-1',
          completed: false,
        },
        {
          id: 'CH10MAP2',
          path: '/chapter-10/making-a-payment-2',
          completed: false,
        },
        {
          id: 'CH10MAP3',
          path: '/chapter-10/making-a-payment-3',
          completed: false,
        },
        {
          id: 'CH10MAP4',
          path: '/chapter-10/making-a-payment-4',
          completed: false,
        },
        {
          id: 'CH10MAP5',
          path: '/chapter-10/making-a-payment-5',
          completed: false,
        },
        {
          id: 'CH10MAP6',
          path: '/chapter-10/making-a-payment-6',
          completed: false,
        },
        {
          id: 'CH10MAP7',
          path: '/chapter-10/making-a-payment-7',
          completed: false,
        },
        { id: 'CH10OUT1', path: '/chapter-10/outro-1', completed: false },
        { id: 'CH10OUT2', path: '/chapter-10/outro-2', completed: false },
        { id: 'CH10OUT3', path: '/chapter-10/outro-3', completed: false },
        { id: 'CH10OUT4', path: '/chapter-10/outro-4', completed: false },
        { id: 'CH10OUT5', path: '/chapter-10/outro-5', completed: false },
        { id: 'CH10OUT6', path: '/chapter-10/outro-6', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
  ],
  currentChapter: 1,
  currentLesson: 'CH1INT1',
}

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
const syncCourseProgressEffectAtom = atomEffect((get, set) => {
  const { account, courseProgress, isAuthLoading, isProgressLoaded } = get(
    combinedProgressAndAccountAtom
  )
  if (isAuthLoading || !isProgressLoaded) return
  if (account) {
    setProgress(courseProgress)
  } else {
    setProgressLocal(courseProgress)
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
                lesson.id === currentLesson.id
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
          lesson.id === currentLesson.id
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

  let progress = defaultProgressState
  if (account) {
    progress = await getProgress()
  }

  if (!progress || !account) {
    progress = await getProgressLocal()
  }

  set(
    syncedCourseProgressAtom,
    mergeProgressState(defaultProgressState, progress)
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
      if (lesson.id === lessonId) {
        if (lesson.completed) {
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
        } else if (lessons[i - 1].completed) {
          return true
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
