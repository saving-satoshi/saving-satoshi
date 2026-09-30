import { allLessonOrder } from 'lib/progess'

export class LessonOrderIndex {
  private readonly maxOrder: number

  constructor(
    private readonly orderMap: Record<string, number> = allLessonOrder
  ) {
    this.maxOrder = Math.max(...Object.values(orderMap))
  }

  getOrder(lessonId?: string): number | null {
    if (!lessonId) return null
    const order = this.orderMap[lessonId]
    return typeof order === 'number' ? order : null
  }

  isMaxOrder(order: number): boolean {
    return order === this.maxOrder
  }

  isCompleted(
    lessonId: string,
    candidateLessonOrder: number,
    currentLessonMarkedComplete: boolean
  ): boolean {
    const order = this.getOrder(lessonId)
    return (
      typeof order === 'number' &&
      (order < candidateLessonOrder ||
        (currentLessonMarkedComplete && order === candidateLessonOrder))
    )
  }
}
