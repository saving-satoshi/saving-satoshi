import type { CourseProgress } from 'types'
import { LessonOrderIndex } from './lessonOrderIndex'
import {
  findChapterIdForLesson,
  getFirstIncompleteLesson,
  getFirstIncompleteLessonFromStoredProgress,
  isLessonCompletedInProgress,
} from './progressSelectors'
import {
  NormalizationContext,
  normalizeChapterWithDifficulty,
  normalizeChapterWithoutDifficulty,
} from './normalizeChapters'

export class GuestProgressNormalizer {
  private readonly orderIndex = new LessonOrderIndex()
  private readonly storedChapters = Array.isArray(this.progress.chapters)
    ? this.progress.chapters
    : []

  constructor(
    private readonly progress: CourseProgress,
    private readonly defaults: CourseProgress
  ) {}

  normalize(): CourseProgress {
    const candidateLessonId = this.pickCandidateLessonId()
    const fallbackLessonId = this.defaults.currentLesson
    const candidateLessonOrder =
      this.orderIndex.getOrder(candidateLessonId) ??
      this.orderIndex.getOrder(fallbackLessonId) ??
      1
    const currentLessonMarkedComplete =
      this.orderIndex.isMaxOrder(candidateLessonOrder) &&
      isLessonCompletedInProgress(this.progress, candidateLessonId)
    const candidateChapterId = findChapterIdForLesson(
      candidateLessonId,
      this.defaults
    )

    const context: NormalizationContext = {
      candidateChapterId,
      candidateLessonId,
      candidateLessonOrder,
      currentLessonMarkedComplete,
      orderIndex: this.orderIndex,
    }

    const normalizedChapters = this.defaults.chapters.map((defaultChapter) => {
      const storedChapter = this.storedChapters.find(
        (chapter) => chapter.id === defaultChapter.id
      )

      if (defaultChapter.hasDifficulty) {
        return normalizeChapterWithDifficulty(
          defaultChapter,
          storedChapter && storedChapter.hasDifficulty
            ? storedChapter
            : undefined,
          context
        )
      }

      return normalizeChapterWithoutDifficulty(defaultChapter, context)
    })

    const normalizedProgress: CourseProgress = {
      ...this.defaults,
      chapters: normalizedChapters,
      currentLesson: candidateLessonId,
      currentChapter: this.defaults.currentChapter,
    }
    const firstIncompleteLesson = getFirstIncompleteLesson(normalizedProgress)
    const currentLesson = firstIncompleteLesson?.id ?? candidateLessonId
    const currentChapter =
      findChapterIdForLesson(currentLesson, normalizedProgress) ??
      this.defaults.currentChapter

    return {
      ...normalizedProgress,
      currentLesson,
      currentChapter,
    }
  }

  private pickCandidateLessonId(): string {
    const fallbackLessonId = this.defaults.currentLesson
    const storedFirstIncompleteLesson =
      getFirstIncompleteLessonFromStoredProgress(this.progress, this.defaults)
    const storedCurrentLessonOrder = this.orderIndex.getOrder(
      this.progress?.currentLesson
    )
    const storedCurrentLessonId =
      storedCurrentLessonOrder !== null ? this.progress.currentLesson : null
    const storedFirstIncompleteOrder = storedFirstIncompleteLesson
      ? this.orderIndex.getOrder(storedFirstIncompleteLesson.id)
      : null

    // Clamp to the earliest progress signal so currentLesson alone can't skip ahead.
    let candidateLessonId = fallbackLessonId
    if (storedFirstIncompleteLesson && storedFirstIncompleteOrder !== null) {
      candidateLessonId = storedFirstIncompleteLesson.id
    }

    if (storedCurrentLessonId && storedCurrentLessonOrder !== null) {
      const storedCurrentLessonIsKnown =
        findChapterIdForLesson(storedCurrentLessonId, this.defaults) !== null
      const storedCurrentIsBeforeFirstIncomplete =
        storedFirstIncompleteOrder !== null &&
        storedCurrentLessonOrder < storedFirstIncompleteOrder
      const storedCurrentIsFirstIncomplete =
        storedFirstIncompleteLesson?.id === storedCurrentLessonId

      if (
        storedCurrentLessonIsKnown &&
        (storedFirstIncompleteOrder === null ||
          storedCurrentIsBeforeFirstIncomplete ||
          storedCurrentIsFirstIncomplete)
      ) {
        candidateLessonId = storedCurrentLessonId
      }
    }

    return candidateLessonId
  }
}
