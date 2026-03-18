import { DifficultyLevel } from 'state/progress/defaultProgress'
import { CourseProgress } from 'types'

export const baseProgressFixture: CourseProgress = {
  chapters: [
    {
      id: 1,
      lessons: [
        { id: 'CH1INT1', path: '/chapter-1/intro-1', completed: false },
        { id: 'CH1INT2', path: '/chapter-1/intro-2', completed: false },
        { id: 'CH1OUT1', path: '/chapter-1/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 6,
      difficulties: [
        {
          level: DifficultyLevel.NORMAL,
          completed: false,
          lessons: [
            { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: false },
            { id: 'CH6INT2', path: '/chapter-6/intro-2', completed: false },
            {
              id: 'CH6INO4_NORMAL',
              path: '/chapter-6/in-out-4-normal',
              completed: false,
            },
          ],
        },
        {
          level: DifficultyLevel.HARD,
          completed: false,
          lessons: [
            { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: false },
            { id: 'CH6INT2', path: '/chapter-6/intro-2', completed: false },
            {
              id: 'CH6INO4_HARD',
              path: '/chapter-6/in-out-4-hard',
              completed: false,
            },
            {
              id: 'CH6PUT4_HARD',
              path: '/chapter-6/put-it-together-4-hard',
              completed: false,
            },
          ],
        },
      ],
      completed: false,
      selectedDifficulty: DifficultyLevel.NORMAL,
      hasDifficulty: true,
    },
    {
      id: 10,
      lessons: [
        { id: 'CH10INT1', path: '/chapter-10/intro-1', completed: false },
        { id: 'CH10INT2', path: '/chapter-10/intro-2', completed: false },
        { id: 'CH10OUT1', path: '/chapter-10/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
  ],
  currentChapter: 1,
  currentLesson: 'CH1INT1',
}

// Keep each test isolated from shared object mutation.
export const createProgressFixture = (): CourseProgress =>
  structuredClone(baseProgressFixture)
