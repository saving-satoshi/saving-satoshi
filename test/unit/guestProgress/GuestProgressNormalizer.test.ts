import {
  defaultProgressState,
  DifficultyLevel,
} from 'state/progress/defaultProgress'
import type {
  ChapterInState,
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
  LessonInState,
} from 'types'
import { describe, expect, it, vi } from 'vitest'
import { GuestProgressNormalizer } from 'state/guestProgress/GuestProgressNormalizer'

vi.mock('content', () => ({
  lessons: {},
  chapters: {},
}))

const normalize = (progress: CourseProgress) =>
  new GuestProgressNormalizer(progress, defaultProgressState).normalize()

const completeLessons = (lessons: LessonInState[]) =>
  lessons.map((lesson) => ({ ...lesson, completed: true }))

const cloneProgress = (): CourseProgress =>
  JSON.parse(JSON.stringify(defaultProgressState)) as CourseProgress

const completeChapter = (chapter: ChapterInState): ChapterInState => {
  if (chapter.hasDifficulty) {
    return {
      ...chapter,
      completed: true,
      difficulties: chapter.difficulties.map((difficulty) => ({
        ...difficulty,
        completed: true,
        lessons: completeLessons(difficulty.lessons),
      })),
    }
  }

  return {
    ...chapter,
    completed: true,
    lessons: completeLessons(chapter.lessons),
  }
}

const completeChaptersBefore = (
  progress: CourseProgress,
  chapterId: number
) => {
  progress.chapters = progress.chapters.map((chapter) =>
    chapter.id < chapterId ? completeChapter(chapter) : chapter
  )
}

const completeLessonsBefore = (
  lessons: LessonInState[],
  lessonId: string
): LessonInState[] => {
  const stopIndex = lessons.findIndex((lesson) => lesson.id === lessonId)
  if (stopIndex === -1) {
    return lessons
  }

  return lessons.map((lesson, index) => ({
    ...lesson,
    completed: index < stopIndex,
  }))
}

const buildTamperedProgress = (): CourseProgress => {
  const chapters: ChapterInState[] = defaultProgressState.chapters.map(
    (chapter) => completeChapter(chapter)
  )

  return {
    ...defaultProgressState,
    chapters,
    currentChapter: 1,
    currentLesson: 'CH1INT1',
  }
}

describe('GuestProgressNormalizer', () => {
  it('blocks lesson unlocks from tampered completion flags', () => {
    const tamperedProgress = buildTamperedProgress()
    const lateLessonId = 'CH10OUT6'

    const normalized = normalize(tamperedProgress)

    expect(
      normalized.chapters.some((chapter) =>
        chapter.hasDifficulty
          ? chapter.difficulties.some((difficulty) =>
              difficulty.lessons.some(
                (lesson) => lesson.id === lateLessonId && lesson.completed
              )
            )
          : chapter.lessons.some(
              (lesson) => lesson.id === lateLessonId && lesson.completed
            )
      )
    ).toBe(false)
    expect(normalized.currentLesson).toBe('CH1INT1')
    expect(normalized.currentChapter).toBe(1)
  })

  it('falls back safely when stored chapters are malformed', () => {
    const malformedProgress = {
      ...cloneProgress(),
      chapters: {},
      currentLesson: 'CH10OUT6',
      currentChapter: 10,
    } as unknown as CourseProgress

    expect(() => normalize(malformedProgress)).not.toThrow()

    const normalized = normalize(malformedProgress)
    expect(normalized.currentLesson).toBe('CH1INT1')
    expect(normalized.currentChapter).toBe(1)
  })

  it('derives completion from the current lesson order', () => {
    const progress = cloneProgress()
    progress.currentLesson = 'CH1GEN1'
    progress.currentChapter = 1
    const storedChapter1 = progress.chapters[0] as ChapterWithoutDifficulties
    storedChapter1.lessons = storedChapter1.lessons.map((lesson) => ({
      ...lesson,
      completed: lesson.id === 'CH1INT1' || lesson.id === 'CH1INT2',
    }))

    const normalized = normalize(progress)
    const normalizedChapter1 = normalized
      .chapters[0] as ChapterWithoutDifficulties

    expect(normalizedChapter1.lessons[0].completed).toBe(true)
    expect(normalizedChapter1.lessons[1].completed).toBe(true)
    expect(normalizedChapter1.lessons[2].completed).toBe(false)
    expect(normalized.currentLesson).toBe('CH1GEN1')
    expect(normalized.currentChapter).toBe(1)
  })

  it('keeps old completed guest chapters past newly inserted lessons', () => {
    const progress = cloneProgress()
    completeChaptersBefore(progress, 5)
    progress.currentLesson = 'CH5INT1'
    progress.currentChapter = 5

    const chapter4 = progress.chapters.find(
      (chapter) => chapter.id === 4
    ) as ChapterWithoutDifficulties
    chapter4.lessons = chapter4.lessons.filter(
      (lesson) => lesson.id !== 'CH4TCC1'
    )

    const normalized = normalize(progress)
    const normalizedChapter4 = normalized.chapters.find(
      (chapter) => chapter.id === 4
    ) as ChapterWithoutDifficulties

    expect(normalized.currentLesson).toBe('CH5INT1')
    expect(normalized.currentChapter).toBe(5)
    expect(
      normalizedChapter4.lessons.find((lesson) => lesson.id === 'CH4TCC1')
        ?.completed
    ).toBe(true)
  })

  it('does not advance progress when switching difficulties', () => {
    const progress = cloneProgress()
    completeChaptersBefore(progress, 6)
    progress.currentLesson = 'CH6PUT2_NORMAL'
    progress.currentChapter = 6

    const chapter6 = progress.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    chapter6.selectedDifficulty = DifficultyLevel.HARD
    const normalDifficulty = chapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.NORMAL
    )
    if (normalDifficulty) {
      normalDifficulty.lessons = completeLessonsBefore(
        normalDifficulty.lessons,
        'CH6PUT2_NORMAL'
      )
    }

    const normalized = normalize(progress)
    const normalizedChapter6 = normalized.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    const hardDifficulty = normalizedChapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )
    const hardIntro = hardDifficulty?.lessons.find(
      (lesson) => lesson.id === 'CH6INT1'
    )

    expect(hardIntro?.completed).toBe(false)
    expect(normalized.currentLesson).toBe('CH6INT1')
    expect(normalized.currentChapter).toBe(6)
  })

  it('keeps the selected difficulty when same-order lessons disagree', () => {
    const progress = cloneProgress()
    completeChaptersBefore(progress, 6)
    progress.currentLesson = 'CH6INO4_NORMAL'
    progress.currentChapter = 6

    const chapter6 = progress.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    chapter6.selectedDifficulty = DifficultyLevel.HARD
    const hardDifficulty = chapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )
    if (hardDifficulty) {
      hardDifficulty.lessons = completeLessonsBefore(
        hardDifficulty.lessons,
        'CH6INO4_HARD'
      )
    }

    const normalized = normalize(progress)
    const normalizedChapter6 = normalized.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    const normalizedHard = normalizedChapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )

    expect(normalized.currentLesson).toBe('CH6INO4_HARD')
    expect(normalized.currentChapter).toBe(6)
    expect(
      normalizedHard?.lessons.find((lesson) => lesson.id === 'CH6INO3')
        ?.completed
    ).toBe(true)
    expect(
      normalizedHard?.lessons.find((lesson) => lesson.id === 'CH6INO4_HARD')
        ?.completed
    ).toBe(false)
  })

  it('does not preserve tampered non-selected difficulty completion', () => {
    const progress = cloneProgress()
    completeChaptersBefore(progress, 6)
    progress.currentLesson = 'CH6INO4_NORMAL'
    progress.currentChapter = 6

    const chapter6 = progress.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    const normalDifficulty = chapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.NORMAL
    )
    if (normalDifficulty) {
      normalDifficulty.lessons = completeLessonsBefore(
        normalDifficulty.lessons,
        'CH6INO4_NORMAL'
      )
    }
    const hardDifficulty = chapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )
    const hardLesson = hardDifficulty?.lessons.find(
      (lesson) => lesson.id === 'CH6INO4_HARD'
    )
    if (hardLesson) {
      hardLesson.completed = true
    }

    const normalized = normalize(progress)
    const normalizedChapter6 = normalized.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    const normalizedHard = normalizedChapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )
    const normalizedHardLesson = normalizedHard?.lessons.find(
      (lesson) => lesson.id === 'CH6INO4_HARD'
    )

    expect(normalizedHardLesson?.completed).toBe(false)
  })

  it('clears selected difficulty completion when current lesson is elsewhere', () => {
    const progress = cloneProgress()
    completeChaptersBefore(progress, 6)
    progress.currentLesson = 'CH6PUT2_NORMAL'
    progress.currentChapter = 6

    const chapter6 = progress.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    chapter6.selectedDifficulty = DifficultyLevel.HARD
    const hardDifficulty = chapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )
    if (hardDifficulty) {
      hardDifficulty.lessons = hardDifficulty.lessons.map((lesson) => ({
        ...lesson,
        completed: true,
      }))
      hardDifficulty.completed = true
    }
    chapter6.completed = true

    const normalized = normalize(progress)
    const normalizedChapter6 = normalized.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    const normalizedHard = normalizedChapter6.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )

    expect(normalizedHard?.lessons.every((lesson) => lesson.completed)).toBe(
      false
    )
    expect(normalizedChapter6.completed).toBe(false)
  })

  it('ignores tampered currentLesson without completions', () => {
    const progress = cloneProgress()
    progress.currentLesson = 'CH10OUT6'
    progress.currentChapter = 10

    const normalized = normalize(progress)

    expect(normalized.currentLesson).toBe('CH1INT1')
    expect(normalized.currentChapter).toBe(1)
  })

  it('clamps currentLesson when it is ahead of stored completion', () => {
    const progress = cloneProgress()
    progress.currentLesson = 'CH1OUT1'
    progress.currentChapter = 1
    const chapter1 = progress.chapters[0] as ChapterWithoutDifficulties
    chapter1.lessons = chapter1.lessons.map((lesson) => ({
      ...lesson,
      completed: lesson.id === 'CH1INT1',
    }))

    const normalized = normalize(progress)

    expect(normalized.currentLesson).toBe('CH1INT2')
    expect(normalized.currentChapter).toBe(1)
  })

  it('falls back when currentLesson is invalid', () => {
    const progress = cloneProgress()
    progress.currentLesson = 'NOT_A_LESSON'
    progress.currentChapter = 1

    const normalized = normalize(progress)

    expect(normalized.currentLesson).toBe('CH1INT1')
    expect(normalized.currentChapter).toBe(1)
  })

  it('falls back to default difficulty when selectedDifficulty is invalid', () => {
    const progress = cloneProgress()
    progress.currentLesson = 'CH6INT1'
    progress.currentChapter = 6

    const chapter6 = progress.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties
    chapter6.selectedDifficulty = 'INVALID' as DifficultyLevel

    const normalized = normalize(progress)
    const normalizedChapter6 = normalized.chapters.find(
      (chapter) => chapter.id === 6
    ) as ChapterWithDifficulties

    expect(normalizedChapter6.selectedDifficulty).toBe(DifficultyLevel.NORMAL)
  })
})
