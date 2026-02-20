import { createStore } from 'jotai'
import {
  courseProgressAtom,
  currentChapterAtom,
  currentLessonAtom,
  currentLessonComputedAtom,
  currentLessonPathAtom,
  DifficultyLevel,
  markLessonAsCompleteAtom,
  nextLessonAtom,
  nextLessonPathAtom,
  progressToNextLessonAtom,
  setChapterDifficultyAtom,
} from 'state/progressState'
import { presentPageAtom } from 'state/state'
import { CourseProgress } from 'types'
import { describe, expect, it } from 'vitest'
import { createProgressFixture } from './fixtures/progressFixtures'
import {
  setLessonCompleted,
  setLessonsCompleted,
  syncChapterCompletion,
} from './helpers/progressStateHelpers'

const createSeededStore = (
  progress: CourseProgress = createProgressFixture()
) => {
  const store = createStore()
  // Seed the base progress atom directly to keep tests focused on pure atom logic
  // instead of load/sync side effects.
  store.set(courseProgressAtom, progress)
  return store
}

describe('progressState atoms', () => {
  it('setLessonCompletion only updates lessons in the selected difficulty track', () => {
    let progress = createProgressFixture()
    progress = setLessonCompleted(progress, 'CH6INT1', true)

    const chapterSix = progress.chapters.find((chapter) => chapter.id === 6)
    if (!chapterSix || !chapterSix.hasDifficulty) {
      throw new Error('expected difficulty chapter 6')
    }

    const normal = chapterSix.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.NORMAL
    )
    const hard = chapterSix.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.HARD
    )

    expect(
      normal?.lessons.find((lesson) => lesson.id === 'CH6INT1')?.completed
    ).toBe(true)
    expect(
      hard?.lessons.find((lesson) => lesson.id === 'CH6INT1')?.completed
    ).toBe(false)
  })

  it('currentLessonComputedAtom returns first incomplete lesson and null when all are complete', () => {
    const store = createSeededStore()
    expect(store.get(currentLessonComputedAtom)?.id).toBe('CH1INT1')

    let allComplete = createProgressFixture()
    const lessons = [
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
    allComplete = setLessonsCompleted(allComplete, lessons, true)

    const completeStore = createSeededStore(allComplete)
    expect(completeStore.get(currentLessonComputedAtom)).toBeNull()
  })

  it('nextLessonAtom returns next lesson in chapter, across chapters, and null at the end', () => {
    const store = createSeededStore()

    expect(store.get(nextLessonAtom)?.id).toBe('CH1INT2')

    store.set(currentLessonAtom, 'CH1OUT1')
    expect(store.get(nextLessonAtom)?.id).toBe('CH6INT1')

    store.set(currentLessonAtom, 'CH10OUT1')
    expect(store.get(nextLessonAtom)).toBeNull()
  })

  it('currentLessonPathAtom returns path for current chapter+lesson and null for missing chapter', () => {
    const store = createSeededStore()
    expect(store.get(currentLessonPathAtom)).toBe('/chapter-1/intro-1')

    store.set(currentChapterAtom, 404)
    expect(store.get(currentLessonPathAtom)).toBeNull()
  })

  it('nextLessonPathAtom returns next path and null at end of course', () => {
    const store = createSeededStore()
    expect(store.get(nextLessonPathAtom)).toBe('/chapter-1/intro-2')

    let crossChapter = createProgressFixture()
    crossChapter = setLessonsCompleted(
      crossChapter,
      ['CH1INT1', 'CH1INT2'],
      true
    )
    const crossChapterStore = createSeededStore(crossChapter)
    expect(crossChapterStore.get(nextLessonPathAtom)).toBe('/chapter-6/intro-1')

    let allComplete = createProgressFixture()
    const lessons = [
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
    allComplete = setLessonsCompleted(allComplete, lessons, true)
    const completeStore = createSeededStore(allComplete)
    expect(completeStore.get(nextLessonPathAtom)).toBeNull()
  })

  it('progressToNextLessonAtom marks current lesson complete and advances when present page matches', () => {
    const store = createSeededStore()

    store.set(presentPageAtom, 'CH1INT1')
    store.set(progressToNextLessonAtom)

    const progress = store.get(courseProgressAtom)
    const chapterOne = progress.chapters.find((chapter) => chapter.id === 1)
    if (!chapterOne || chapterOne.hasDifficulty) {
      throw new Error('expected non-difficulty chapter 1')
    }

    expect(
      chapterOne.lessons.find((lesson) => lesson.id === 'CH1INT1')?.completed
    ).toBe(true)
    expect(progress.currentLesson).toBe('CH1INT2')
    expect(progress.currentChapter).toBe(1)
  })

  it('progressToNextLessonAtom does not mark lesson complete when present page does not match', () => {
    const store = createSeededStore()

    // Gate should block completion because present page != computed current lesson.
    store.set(presentPageAtom, 'CH1INT2')
    store.set(progressToNextLessonAtom)

    const progress = store.get(courseProgressAtom)
    const chapterOne = progress.chapters.find((chapter) => chapter.id === 1)
    if (!chapterOne || chapterOne.hasDifficulty) {
      throw new Error('expected non-difficulty chapter 1')
    }

    expect(
      chapterOne.lessons.find((lesson) => lesson.id === 'CH1INT1')?.completed
    ).toBe(false)
    expect(progress.currentLesson).toBe('CH1INT1')
    expect(progress.currentChapter).toBe(1)
  })

  it('markLessonAsCompleteAtom marks a lesson complete and moves to the next incomplete lesson', () => {
    const store = createSeededStore()
    store.set(markLessonAsCompleteAtom, 'CH1INT1')

    const progress = store.get(courseProgressAtom)
    const chapterOne = progress.chapters.find((chapter) => chapter.id === 1)
    if (!chapterOne || chapterOne.hasDifficulty) {
      throw new Error('expected non-difficulty chapter 1')
    }

    expect(
      chapterOne.lessons.find((lesson) => lesson.id === 'CH1INT1')?.completed
    ).toBe(true)
    expect(progress.currentChapter).toBe(1)
    expect(progress.currentLesson).toBe('CH1INT2')
  })

  it('markLessonAsCompleteAtom preserves the chapter-10 substring quirk in chapter completion detection', () => {
    let progress = createProgressFixture()

    // Force progression to chapter 10 so we can exercise the
    // `lessonId.substring(2, 3)` chapter parsing quirk.
    progress = setLessonsCompleted(
      progress,
      ['CH1INT1', 'CH1INT2', 'CH1OUT1', 'CH6INT1', 'CH6INT2', 'CH6INO4_NORMAL'],
      true
    )
    // Keep chapter flags in sync with lesson completion so the test setup
    // reflects a realistic "ready to start chapter 10" state.
    progress = syncChapterCompletion(progress)
    progress.currentChapter = 10
    progress.currentLesson = 'CH10INT1'

    const store = createSeededStore(progress)
    store.set(markLessonAsCompleteAtom, 'CH10INT1')

    const updated = store.get(courseProgressAtom)
    const chapterTen = updated.chapters.find((chapter) => chapter.id === 10)
    if (!chapterTen || chapterTen.hasDifficulty) {
      throw new Error('expected non-difficulty chapter 10')
    }

    expect(chapterTen.completed).toBe(true)
    expect(
      chapterTen.lessons.find((lesson) => lesson.id === 'CH10INT2')?.completed
    ).toBe(false)
    expect(updated.currentChapter).toBe(10)
    expect(updated.currentLesson).toBe('CH10INT2')
  })

  it('markLessonAsCompleteAtom advances from chapter 6 to chapter 10 in sparse chapter-id fixtures', () => {
    let progress = createProgressFixture()

    // Finish chapter 1 and the first two chapter 6 lessons so completing
    // CH6INO4_NORMAL should transition to chapter 10.
    progress = setLessonsCompleted(
      progress,
      ['CH1INT1', 'CH1INT2', 'CH1OUT1', 'CH6INT1', 'CH6INT2'],
      true
    )
    progress = syncChapterCompletion(progress)
    progress.currentChapter = 6
    progress.currentLesson = 'CH6INO4_NORMAL'

    const store = createSeededStore(progress)
    store.set(markLessonAsCompleteAtom, 'CH6INO4_NORMAL')

    const updated = store.get(courseProgressAtom)
    const chapterSix = updated.chapters.find((chapter) => chapter.id === 6)
    if (!chapterSix || !chapterSix.hasDifficulty) {
      throw new Error('expected difficulty chapter 6')
    }

    const normalDifficulty = chapterSix.difficulties.find(
      (difficulty) => difficulty.level === DifficultyLevel.NORMAL
    )

    expect(
      normalDifficulty?.lessons.find((lesson) => lesson.id === 'CH6INO4_NORMAL')
        ?.completed
    ).toBe(true)
    expect(chapterSix.completed).toBe(true)
    expect(updated.currentChapter).toBe(10)
    expect(updated.currentLesson).toBe('CH10INT1')
  })

  it('setChapterDifficultyAtom updates selected difficulty for a chapter', () => {
    const store = createSeededStore()
    store.set(setChapterDifficultyAtom, {
      chapterId: 6,
      difficultyLevel: DifficultyLevel.HARD,
    })

    const progress = store.get(courseProgressAtom)
    const chapterSix = progress.chapters.find((chapter) => chapter.id === 6)
    if (!chapterSix || !chapterSix.hasDifficulty) {
      throw new Error('expected difficulty chapter 6')
    }

    expect(chapterSix.selectedDifficulty).toBe(DifficultyLevel.HARD)
  })

  it('currentChapterAtom and currentLessonAtom are readable and writable derived atoms', () => {
    const store = createSeededStore()

    expect(store.get(currentChapterAtom)).toBe(1)
    expect(store.get(currentLessonAtom)).toBe('CH1INT1')

    store.set(currentChapterAtom, 6)
    store.set(currentLessonAtom, 'CH6INT1')

    expect(store.get(currentChapterAtom)).toBe(6)
    expect(store.get(currentLessonAtom)).toBe('CH6INT1')
  })
})
