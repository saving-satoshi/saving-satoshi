import { lessons } from 'content'

export const keys = [
  'CH1INT1',
  'CH1INT2',
  'CH1GEN1',
  'CH1GEN2',
  'CH1GEN3',
  'CH1GEN4',
  'CH1TRA1',
  'CH1TRA2',
  'CH1TRA3',
  'CH1OUT1',
  'CH1OUT2',

  'CH2INT1',
  'CH2INT2',
  'CH2HSH1',
  'CH2HSH2',
  'CH2HSH3',
  'CH2HSH4',
  'CH2HSH5',
  'CH2HSH6',
  'CH2SCR1',
  'CH2SCR2',
  'CH2MIN1',
  'CH2OUT1',

  'CH3INT1',
  'CH3INT2',
  'CH3SOL1',
  'CH3OUT1',
]

export const keysMeta = {
  CH1INT1: { path: '/chapter-1/intro-1' },
  CH1INT2: { path: '/chapter-1/intro-2' },
  CH1GEN1: { path: '/chapter-1/genesis-1' },
  CH1GEN2: { path: '/chapter-1/genesis-2' },
  CH1GEN3: { path: '/chapter-1/genesis-3' },
  CH1GEN4: { path: '/chapter-1/genesis-4' },
  CH1TRA1: { path: '/chapter-1/transacting-1' },
  CH1TRA2: { path: '/chapter-1/transacting-2' },
  CH1TRA3: { path: '/chapter-1/transacting-3' },
  CH1OUT1: { path: '/chapter-1/outro-1' },
  CH1OUT2: { path: '/chapter-1/outro-2' },

  CH2INT1: { path: '/chapter-2/intro-1' },
  CH2INT2: { path: '/chapter-2/intro-2' },
  CH2HSH1: { path: '/chapter-2/hashing-1' },
  CH2HSH2: { path: '/chapter-2/hashing-2' },
  CH2HSH3: { path: '/chapter-2/hashing-3' },
  CH2HSH4: { path: '/chapter-2/hashing-4' },
  CH2HSH5: { path: '/chapter-2/hashing-5' },
  CH2HSH6: { path: '/chapter-2/hashing-6' },
  CH2SCR1: { path: '/chapter-2/scripting-1' },
  CH2SCR2: { path: '/chapter-2/scripting-2' },
  CH2MIN1: { path: '/chapter-2/mining-1' },
  CH2OUT1: { path: '/chapter-2/outro-1' },

  CH3INT1: { path: '/chapter-3/intro-1' },
  CH3INT2: { path: '/chapter-3/intro-2' },
  CH3SOL1: { path: '/chapter-3/solo-1' },
  CH3OUT1: { path: '/chapter-3/outro-1' },
}

export const isLessonUnlocked = (
  userProgressKey: string,
  lessonKey: string
) => {
  if (!userProgressKey || !lessonKey) {
    return false
  }

  const ida = keys.indexOf(userProgressKey)
  const idb = keys.indexOf(lessonKey)

  return ida >= idb
}

export const isLessonCompleted = (
  userProgressKey: string,
  lessonKey: string
) => {
  if (!userProgressKey || !lessonKey) {
    return false
  }

  const ida = keys.indexOf(userProgressKey)
  const challengeCode = lessonKey.slice(-4, -1)

  let idb

  keys.slice().forEach((element, index) => {
    if (element.includes(challengeCode)) {
      idb = index
      return
    }
  })

  return ida > idb
}

export const isChallengeCompleted = (
  userProgressKey: string,
  lessonKey: string
) => {
  if (!userProgressKey || !lessonKey) {
    return false
  }

  const ida = keys.indexOf(userProgressKey)
  const challengeCode = lessonKey.slice(-4, -1)

  let idb

  keys.forEach((element, index) => {
    if (element.includes(challengeCode)) {
      idb = index
    }
  })

  return ida > idb
}

export const getLastUnlockedLessonPath = (userProgressKey: string): string => {
  const { path } = keysMeta[userProgressKey]

  return path
}

export const getNextLessonKey = (userProgressKey: string): string => {
  const id = keys.indexOf(userProgressKey)
  const result = keys[id + 1]

  if (!result) {
    console.error('There is no next lesson')
    return userProgressKey
  }

  return result
}

export const getNextLessonPath = (userProgressKey: string): string => {
  const id = keys.indexOf(userProgressKey)
  const result = keys[id + 1]

  if (!result) {
    console.error('There is no next lesson')
    return keysMeta[userProgressKey].path
  }

  return keysMeta[result].path
}

export const getLessonKey = (chapterId, lessonId) => {
  if (!(chapterId in lessons)) {
    return undefined
  }

  const chapterLessons = lessons[chapterId]
  if (!(lessonId in chapterLessons)) {
    return undefined
  }

  const lesson = chapterLessons[lessonId]
  if (!lesson) {
    return undefined
  }

  return lesson.metadata.key
}

export const getChapterKey = (userProgressKey: string): string => {
  const chapterKey =
    userProgressKey === keys[keys.length - 1]
      ? (parseInt(userProgressKey.substring(2, 3)) + 1).toString()
      : userProgressKey.substring(2, 3)
  return `chapter-${chapterKey}`
}
