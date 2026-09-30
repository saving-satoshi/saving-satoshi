import { DifficultyLevel } from 'state/progress/defaultProgress'
import { describe, expect, it } from 'vitest'
import { resolveSelectedDifficulty } from 'state/guestProgress/difficulty'

describe('resolveSelectedDifficulty', () => {
  it('returns stored difficulty when valid', () => {
    expect(
      resolveSelectedDifficulty(DifficultyLevel.HARD, DifficultyLevel.NORMAL)
    ).toBe(DifficultyLevel.HARD)
  })

  it('falls back when stored difficulty is invalid', () => {
    expect(resolveSelectedDifficulty('INVALID', DifficultyLevel.NORMAL)).toBe(
      DifficultyLevel.NORMAL
    )
  })
})
