import { DifficultyLevel } from 'state/progress/defaultProgress'

// Guard against tampered difficulty values from localStorage.
export const isValidDifficultyLevel = (
  value: unknown
): value is DifficultyLevel => value === 'NORMAL' || value === 'HARD'

export const resolveSelectedDifficulty = (
  stored: unknown,
  fallback: DifficultyLevel
): DifficultyLevel => (isValidDifficultyLevel(stored) ? stored : fallback)
