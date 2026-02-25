import {
  DifficultyLevel,
  getLessonById,
  getLessonKey,
  getNextLessonUsingChapterIdAndLessonName,
  isChapterInProgress,
  isLastLesson,
  isLessonCompletedUsingId,
  isLessonCompletedUsingLessonName,
  isLessonUnlockedUsingId,
  isLessonUnlockedUsingLessonName,
  mergeProgressState,
} from 'state/progressState'
import { CourseProgress, LessonInState } from 'types'
import { describe, expect, it } from 'vitest'
import { createProgressFixture } from './fixtures/progressFixtures'
import {
  setLessonCompleted,
  setLessonsCompleted,
  syncChapterCompletion,
} from './helpers/progressStateHelpers'

describe('progressState utility functions', () => {
  it('getLessonById finds lessons in normal and difficulty chapters, and null for missing', () => {
    const progress = createProgressFixture()

    expect(getLessonById('CH1INT2', progress)?.id).toBe('CH1INT2')
    expect(getLessonById('CH6PUT4_HARD', progress)?.id).toBe('CH6PUT4_HARD')
    expect(getLessonById('DOES_NOT_EXIST', progress)).toBeNull()
  })

  it('isLastLesson works for a non-difficulty final chapter', () => {
    const progress = createProgressFixture()

    expect(isLastLesson('CH10OUT1', progress)).toBe(true)
    expect(isLastLesson('CH10INT2', progress)).toBe(false)
  })

  it('isLastLesson respects selected difficulty when final chapter has difficulties', () => {
    const progress = createProgressFixture()
    // Keep chapter 6 as the final chapter in this fixture to exercise
    // "last chapter + selected difficulty" behavior.
    progress.chapters = progress.chapters.slice(0, 2)

    const chapterSix = progress.chapters[1]
    if (!chapterSix.hasDifficulty) {
      throw new Error('expected difficulty chapter')
    }

    chapterSix.selectedDifficulty = DifficultyLevel.NORMAL
    expect(isLastLesson('CH6INO4_NORMAL', progress)).toBe(true)

    chapterSix.selectedDifficulty = DifficultyLevel.HARD
    expect(isLastLesson('CH6PUT4_HARD', progress)).toBe(true)
  })

  it('isChapterInProgress is true only when first lesson is complete and not all lessons are complete', () => {
    let progress = createProgressFixture()
    progress = setLessonCompleted(progress, 'CH1INT1', true)
    expect(isChapterInProgress(1, progress)).toBe(true)

    progress = setLessonsCompleted(progress, ['CH1INT2', 'CH1OUT1'], true)
    expect(isChapterInProgress(1, progress)).toBe(false)
  })

  it('isChapterInProgress handles difficulty chapters', () => {
    const progress = setLessonCompleted(
      createProgressFixture(),
      'CH6INT1',
      true
    )
    expect(isChapterInProgress(6, progress)).toBe(true)
  })

  it('mergeProgressState merges backend completion while preserving missing chapters and lessons from defaults', () => {
    // Deliberately sparse backend payload: only a subset of chapters/lessons
    // so merge logic must fill the rest from defaults.
    const backendState: CourseProgress = {
      chapters: [
        {
          id: 1,
          hasDifficulty: false,
          completed: false,
          lessons: [
            { id: 'CH1INT1', path: '/chapter-1/intro-1', completed: true },
          ],
        },
        {
          id: 6,
          hasDifficulty: true,
          completed: false,
          selectedDifficulty: DifficultyLevel.HARD,
          difficulties: [
            {
              level: DifficultyLevel.NORMAL,
              completed: false,
              lessons: [
                { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: true },
              ],
            },
          ],
        },
      ],
      currentChapter: 6,
      currentLesson: 'CH6INT2',
    }

    const merged = mergeProgressState(createProgressFixture(), backendState)
    const chapterOne = merged.chapters.find((chapter) => chapter.id === 1)
    const chapterSix = merged.chapters.find((chapter) => chapter.id === 6)
    const chapterTen = merged.chapters.find((chapter) => chapter.id === 10)

    if (!chapterOne || chapterOne.hasDifficulty) {
      throw new Error('expected non-difficulty chapter 1')
    }
    if (!chapterSix || !chapterSix.hasDifficulty) {
      throw new Error('expected difficulty chapter 6')
    }

    expect(
      chapterOne.lessons.find((lesson) => lesson.id === 'CH1INT1')?.completed
    ).toBe(true)
    expect(
      chapterOne.lessons.find((lesson) => lesson.id === 'CH1INT2')?.completed
    ).toBe(false)
    expect(chapterSix.selectedDifficulty).toBe(DifficultyLevel.HARD)
    expect(
      chapterSix.difficulties
        .find((difficulty) => difficulty.level === DifficultyLevel.NORMAL)
        ?.lessons.find((lesson) => lesson.id === 'CH6INT1')?.completed
    ).toBe(true)
    expect(chapterTen).toBeDefined()
    expect(merged.currentChapter).toBe(6)
    expect(merged.currentLesson).toBe('CH6INT2')
  })

  it('getLessonKey maps chapter+lesson names to lesson ids and handles missing values', () => {
    expect(getLessonKey('chapter-1', 'intro-1')).toBe('CH1INT1')
    expect(getLessonKey('chapter-missing', 'intro-1')).toBeUndefined()
    expect(getLessonKey('chapter-1', 'missing-lesson')).toBeUndefined()
  })

  it('isLessonCompletedUsingId checks completion status by lesson id', () => {
    const progress = setLessonCompleted(
      createProgressFixture(),
      'CH1INT2',
      true
    )

    expect(isLessonCompletedUsingId('CH1INT2', progress)).toBe(true)
    expect(isLessonCompletedUsingId('CH1INT1', progress)).toBe(false)
    expect(isLessonCompletedUsingId('DOES_NOT_EXIST', progress)).toBe(false)
  })

  it('isLessonCompletedUsingLessonName wraps getLessonKey and isLessonCompletedUsingId', () => {
    const progress = setLessonCompleted(
      createProgressFixture(),
      'CH1INT2',
      true
    )

    expect(
      isLessonCompletedUsingLessonName('chapter-1', 'intro-2', progress)
    ).toBe(true)
    expect(
      isLessonCompletedUsingLessonName('chapter-1', 'intro-1', progress)
    ).toBe(false)
    expect(
      isLessonCompletedUsingLessonName('chapter-1', 'missing-lesson', progress)
    ).toBe(false)
  })

  it('isLessonUnlockedUsingId handles first lessons, previous lessons, and chapter boundaries', () => {
    let progress = createProgressFixture()

    expect(isLessonUnlockedUsingId('CH1INT1', progress)).toBe(true)
    expect(isLessonUnlockedUsingId('CH1INT2', progress)).toBe(false)

    progress = setLessonCompleted(progress, 'CH1INT1', true)
    expect(isLessonUnlockedUsingId('CH1INT2', progress)).toBe(true)

    expect(isLessonUnlockedUsingId('CH6INT1', progress)).toBe(false)
    // First lesson in non-first chapters unlocks only when previous chapter is complete.
    // Complete all chapter 1 lessons, then recompute `chapter.completed`.
    progress = setLessonsCompleted(
      progress,
      ['CH1INT1', 'CH1INT2', 'CH1OUT1'],
      true
    )
    progress = syncChapterCompletion(progress)
    expect(isLessonUnlockedUsingId('CH6INT1', progress)).toBe(true)
  })

  it('isLessonUnlockedUsingLessonName wraps getLessonKey and isLessonUnlockedUsingId', () => {
    const progress = createProgressFixture()

    expect(
      isLessonUnlockedUsingLessonName('chapter-1', 'intro-1', progress)
    ).toBe(true)
    expect(
      isLessonUnlockedUsingLessonName('chapter-1', 'intro-2', progress)
    ).toBe(false)
  })

  it('getNextLessonUsingChapterIdAndLessonName returns next lesson in chapter, across chapters, and null at end', () => {
    const progress = createProgressFixture()

    const nextInChapter = getNextLessonUsingChapterIdAndLessonName(
      'chapter-1',
      'intro-1',
      progress
    )
    const nextChapterFirst = getNextLessonUsingChapterIdAndLessonName(
      'chapter-1',
      'outro-1',
      progress
    )
    const endOfCourse = getNextLessonUsingChapterIdAndLessonName(
      'chapter-10',
      'outro-1',
      progress
    )

    expect((nextInChapter as LessonInState).id).toBe('CH1INT2')
    expect((nextChapterFirst as LessonInState).id).toBe('CH6INT1')
    expect(endOfCourse).toBeNull()
  })
})
