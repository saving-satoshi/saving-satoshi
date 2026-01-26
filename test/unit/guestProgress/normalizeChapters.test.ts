import type { ChapterWithDifficulties, ChapterWithoutDifficulties } from 'types'
import type { DifficultyLevel } from 'state/progress/defaultProgress'
import { describe, expect, it } from 'vitest'
import { LessonOrderIndex } from 'state/guestProgress/lessonOrderIndex'
import {
  NormalizationContext,
  normalizeChapterWithDifficulty,
  normalizeChapterWithoutDifficulty,
} from 'state/guestProgress/normalizeChapters'

describe('normalizeChapters', () => {
  it('marks completion for chapters without difficulty based on order', () => {
    const orderIndex = new LessonOrderIndex({ A: 1, B: 2, C: 3 })
    const context: NormalizationContext = {
      candidateChapterId: 1,
      candidateLessonId: 'B',
      candidateLessonOrder: 2,
      currentLessonMarkedComplete: false,
      orderIndex,
    }
    const chapter: ChapterWithoutDifficulties = {
      id: 1,
      hasDifficulty: false,
      completed: false,
      lessons: [
        { id: 'A', path: '/a', completed: false },
        { id: 'B', path: '/b', completed: false },
        { id: 'C', path: '/c', completed: false },
      ],
    }

    const normalized = normalizeChapterWithoutDifficulty(chapter, context)

    expect(normalized.lessons[0].completed).toBe(true)
    expect(normalized.lessons[1].completed).toBe(false)
  })

  it('clears selected difficulty when current lesson is in the other difficulty', () => {
    const orderIndex = new LessonOrderIndex({ N1: 1, N2: 2, H1: 2 })
    const context: NormalizationContext = {
      candidateChapterId: 6,
      candidateLessonId: 'N2',
      candidateLessonOrder: 2,
      currentLessonMarkedComplete: false,
      orderIndex,
    }
    const defaultChapter: ChapterWithDifficulties = {
      id: 6,
      hasDifficulty: true,
      completed: false,
      selectedDifficulty: 'NORMAL' as DifficultyLevel,
      difficulties: [
        {
          level: 'NORMAL' as DifficultyLevel,
          completed: false,
          lessons: [
            { id: 'N1', path: '/n1', completed: false },
            { id: 'N2', path: '/n2', completed: false },
          ],
        },
        {
          level: 'HARD' as DifficultyLevel,
          completed: false,
          lessons: [{ id: 'H1', path: '/h1', completed: true }],
        },
      ],
    }
    const storedChapter: ChapterWithDifficulties = {
      ...defaultChapter,
      selectedDifficulty: 'HARD' as DifficultyLevel,
      difficulties: [
        defaultChapter.difficulties[0],
        {
          ...defaultChapter.difficulties[1],
          lessons: [{ id: 'H1', path: '/h1', completed: true }],
          completed: true,
        },
      ],
    }

    const normalized = normalizeChapterWithDifficulty(
      defaultChapter,
      storedChapter,
      context
    )
    const normalizedHard = normalized.difficulties.find(
      (difficulty) => difficulty.level === 'HARD'
    )

    expect(normalizedHard?.lessons[0].completed).toBe(false)
  })
})
