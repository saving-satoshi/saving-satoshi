import { describe, expect, it } from 'vitest'
import { createProgressFixture } from './fixtures/progressFixtures'
import {
  DifficultyLevel,
  findNextIncompleteLesson,
  markLessonCompleteInChapters,
} from 'state/progressState'

describe('markLessonCompleteInChapters', () => {
  it('marks a lesson complete in a plain chapter', () => {
    const { chapters } = createProgressFixture()
    const updated = markLessonCompleteInChapters(chapters, 'CH1INT1')

    const ch1 = updated.find((ch) => ch.id === 1)
    if (!ch1 || ch1.hasDifficulty) throw new Error('expected plain chapter 1')

    expect(ch1.lessons.find((l) => l.id === 'CH1INT1')?.completed).toBe(true)
    expect(ch1.lessons.find((l) => l.id === 'CH1INT2')?.completed).toBe(false)
  })

  it('marks a lesson complete only in the selected difficulty track', () => {
    const { chapters } = createProgressFixture()
    const updated = markLessonCompleteInChapters(chapters, 'CH6INT1')

    const ch6 = updated.find((ch) => ch.id === 6)
    if (!ch6 || !ch6.hasDifficulty)
      throw new Error('expected difficulty chapter 6')

    const normal = ch6.difficulties.find(
      (d) => d.level === DifficultyLevel.NORMAL
    )
    const hard = ch6.difficulties.find((d) => d.level === DifficultyLevel.HARD)

    expect(normal?.lessons.find((l) => l.id === 'CH6INT1')?.completed).toBe(
      true
    )
    expect(hard?.lessons.find((l) => l.id === 'CH6INT1')?.completed).toBe(false)
  })

  it('returns chapters unchanged when lesson id does not exist', () => {
    const { chapters } = createProgressFixture()
    const updated = markLessonCompleteInChapters(chapters, 'NONEXISTENT')

    const ch1 = updated.find((ch) => ch.id === 1)
    if (!ch1 || ch1.hasDifficulty) throw new Error('expected plain chapter 1')
    expect(ch1.lessons.every((l) => !l.completed)).toBe(true)
  })

  it('does not mutate the original chapters array', () => {
    const { chapters } = createProgressFixture()
    const originalFirstLesson = chapters[0]
    markLessonCompleteInChapters(chapters, 'CH1INT1')

    // Original reference should be untouched.
    expect(chapters[0]).toBe(originalFirstLesson)
    if (!chapters[0].hasDifficulty) {
      expect(chapters[0].lessons[0].completed).toBe(false)
    }
  })
})

describe('findNextIncompleteLesson', () => {
  it('returns the first incomplete lesson when starting from index 0', () => {
    const { chapters } = createProgressFixture()
    const result = findNextIncompleteLesson(chapters)

    expect(result).not.toBeNull()
    expect(result!.lesson.id).toBe('CH1INT1')
    expect(result!.chapterId).toBe(1)
  })

  it('skips chapters before the start index', () => {
    const { chapters } = createProgressFixture()
    // Start from chapter index 1 (chapter 6 in the fixture).
    const result = findNextIncompleteLesson(chapters, 1)

    expect(result).not.toBeNull()
    expect(result!.lesson.id).toBe('CH6INT1')
    expect(result!.chapterId).toBe(6)
  })

  it('returns null when all lessons are complete', () => {
    const { chapters } = createProgressFixture()
    const allLessons = [
      'CH1INT1',
      'CH1INT2',
      'CH1OUT1',
      'CH6INT1',
      'CH6INT2',
      'CH6INO4_NORMAL',
      'CH10INT1',
      'CH10INT2',
      'CH10OUT1',
    ]
    // Mark every lesson done by chaining calls.
    const allDone = allLessons.reduce(
      (chs, id) => markLessonCompleteInChapters(chs, id),
      chapters
    )

    expect(findNextIncompleteLesson(allDone)).toBeNull()
  })

  it('finds the next incomplete lesson after a completed one mid-chapter', () => {
    const { chapters } = createProgressFixture()
    const updated = markLessonCompleteInChapters(chapters, 'CH1INT1')
    const result = findNextIncompleteLesson(updated)

    expect(result).not.toBeNull()
    expect(result!.lesson.id).toBe('CH1INT2')
    expect(result!.chapterId).toBe(1)
  })
})
