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
  'CH2SCR1',
  'CH2SCR2',
]

const keysMeta = {
  CH1INT1: { path: '/chapters/chapter-1/intro-1' },
  CH1INT2: { path: '/chapters/chapter-1/intro-2' },
  CH1GEN1: { path: '/chapters/chapter-1/genesis-1' },
  CH1GEN2: { path: '/chapters/chapter-1/genesis-2' },
  CH1GEN3: { path: '/chapters/chapter-1/genesis-3' },
  CH1GEN4: { path: '/chapters/chapter-1/genesis-4' },
  CH1TRA1: { path: '/chapters/chapter-1/transacting-1' },
  CH1TRA2: { path: '/chapters/chapter-1/transacting-2' },
  CH1TRA3: { path: '/chapters/chapter-1/transacting-3' },
  CH1OUT1: { path: '/chapters/chapter-1/outro-1' },
  CH1OUT2: { path: '/chapters/chapter-1/outro-2' },

  CH2INT1: { path: '/chapters/chapter-2/intro-1' },
  CH2INT2: { path: '/chapters/chapter-2/intro-2' },
  CH2SCR1: { path: '/chapters/chapter-2/scripting-1' },
  CH2SCR2: { path: '/chapters/chapter-2/scripting-2' },
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
  const idb = keys.indexOf(lessonKey)

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
