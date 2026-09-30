import { describe, expect, it } from 'vitest'
import { LessonOrderIndex } from 'state/guestProgress/lessonOrderIndex'

describe('LessonOrderIndex', () => {
  const index = new LessonOrderIndex({ A: 1, B: 2 })

  it('returns the order for known lessons', () => {
    expect(index.getOrder('A')).toBe(1)
    expect(index.getOrder('B')).toBe(2)
  })

  it('returns null for unknown lessons', () => {
    expect(index.getOrder('C')).toBeNull()
  })

  it('detects max order', () => {
    expect(index.isMaxOrder(2)).toBe(true)
    expect(index.isMaxOrder(1)).toBe(false)
  })

  it('computes completion based on order and current flag', () => {
    expect(index.isCompleted('A', 2, false)).toBe(true)
    expect(index.isCompleted('B', 2, false)).toBe(false)
    expect(index.isCompleted('B', 2, true)).toBe(true)
  })
})
