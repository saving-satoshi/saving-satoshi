import type {
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
} from 'types'
import { describe, expect, it } from 'vitest'
import {
  findChapterIdForLesson,
  getFirstIncompleteLesson,
  getFirstIncompleteLessonFromStoredProgress,
  isLessonCompletedInProgress,
} from 'state/guestProgress/progressSelectors'

const buildProgress = (): CourseProgress => ({
  currentChapter: 1,
  currentLesson: 'L1',
  chapters: [
    {
      id: 1,
      hasDifficulty: false,
      completed: false,
      lessons: [
        { id: 'L1', path: '/l1', completed: true },
        { id: 'L2', path: '/l2', completed: false },
      ],
    } as ChapterWithoutDifficulties,
    {
      id: 2,
      hasDifficulty: true,
      completed: false,
      selectedDifficulty: 'NORMAL',
      difficulties: [
        {
          level: 'NORMAL',
          completed: false,
          lessons: [{ id: 'D1', path: '/d1', completed: false }],
        },
        {
          level: 'HARD',
          completed: false,
          lessons: [{ id: 'D1H', path: '/d1h', completed: false }],
        },
      ],
    } as ChapterWithDifficulties,
  ],
})

describe('progressSelectors', () => {
  it('finds the chapter id for a lesson', () => {
    const progress = buildProgress()

    expect(findChapterIdForLesson('L2', progress)).toBe(1)
    expect(findChapterIdForLesson('D1', progress)).toBe(2)
  })

  it('checks lesson completion in progress', () => {
    const progress = buildProgress()

    expect(isLessonCompletedInProgress(progress, 'L1')).toBe(true)
    expect(isLessonCompletedInProgress(progress, 'L2')).toBe(false)
  })

  it('returns the first incomplete lesson in the selected difficulty', () => {
    const progress = buildProgress()

    expect(getFirstIncompleteLesson(progress)?.id).toBe('L2')
  })

  it('derives the first incomplete lesson from stored progress', () => {
    const progress = buildProgress()
    const defaults = buildProgress()
    const chapter1 = progress.chapters[0] as ChapterWithoutDifficulties
    chapter1.lessons = chapter1.lessons.map((lesson) => ({
      ...lesson,
      completed: lesson.id === 'L1',
    }))

    expect(
      getFirstIncompleteLessonFromStoredProgress(progress, defaults)?.id
    ).toBe('L2')
  })

  it('preserves completed stored chapters that predate new default lessons', () => {
    const progress = buildProgress()
    const chapter1 = progress.chapters[0] as ChapterWithoutDifficulties
    chapter1.completed = true
    chapter1.lessons = [{ ...chapter1.lessons[0], completed: true }]
    progress.currentLesson = 'D1'
    progress.currentChapter = 2

    expect(
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())?.id
    ).toBe('D1')
  })

  it('does not preserve completed chapters with incomplete stored lessons', () => {
    const progress = buildProgress()
    const chapter1 = progress.chapters[0] as ChapterWithoutDifficulties
    chapter1.completed = true
    chapter1.lessons = [{ ...chapter1.lessons[0], completed: false }]
    progress.currentLesson = 'D1'
    progress.currentChapter = 2

    expect(
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())?.id
    ).toBe('L1')
  })

  it('treats malformed stored plain lesson arrays as no completions', () => {
    const progress = buildProgress() as unknown as CourseProgress
    const malformedChapter = progress.chapters[0] as unknown as {
      lessons?: unknown
    }
    malformedChapter.lessons = undefined

    expect(() =>
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())
    ).not.toThrow()
    expect(
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())?.id
    ).toBe('L1')
  })

  it('ignores truthy non-boolean stored completion values', () => {
    const progress = buildProgress()
    const chapter1 = progress.chapters[0] as unknown as {
      lessons: Array<{ id: string; path: string; completed: unknown }>
    }
    chapter1.lessons = chapter1.lessons.map((lesson) => ({
      ...lesson,
      completed: lesson.id === 'L1' ? 'false' : false,
    }))

    expect(isLessonCompletedInProgress(progress, 'L1')).toBe(false)
    expect(
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())?.id
    ).toBe('L1')
  })

  it('treats malformed stored difficulty lesson arrays as no completions', () => {
    const progress = buildProgress() as unknown as CourseProgress
    const chapter1 = progress.chapters[0] as ChapterWithoutDifficulties
    chapter1.lessons = chapter1.lessons.map((lesson) => ({
      ...lesson,
      completed: true,
    }))
    const malformedChapter = progress.chapters[1] as unknown as {
      difficulties?: Array<{ level: string; lessons?: unknown }>
    }
    malformedChapter.difficulties = [{ level: 'NORMAL' }]

    expect(() =>
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())
    ).not.toThrow()
    expect(
      getFirstIncompleteLessonFromStoredProgress(progress, buildProgress())?.id
    ).toBe('D1')
  })
})
