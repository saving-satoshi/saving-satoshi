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
  'CH3SOL1',
  'CH3POL1',
  'CH3POL2',
  'CH3COO1',
  'CH3COO2',
  'CH3COO3',
  'CH3SPL1',
  'CH3SPL2',
  'CH3OUT1',

  'CH4INT1',
  'CH4PKY1',
  'CH4PKY2',
  'CH4PKY3',
  'CH4PKY4',
  'CH4ADR1',
  'CH4ADR2',
  'CH4ADR3',
  'CH4OUT1',

  'CH5INT1',
  'CH5INT2',
  'CH5INT3',
  'CH5DRM1',
  'CH5DRM2',
  'CH5DRM3',
  'CH5DRM4',
  'CH5DRM5',
  'CH5DRM6',
  'CH5DRM7',
  'CH5VFS1',
  'CH5VFS2',
  'CH5VFS3',
  'CH5VFS4',
  'CH5VFS5',
  'CH5VLS1',
  'CH5VLS2',
  'CH5VLS3',
  'CH5VLS4',
  'CH5OUT1',

  'CH6INT1',
  'CH6INT2',
  'CH6INO1',
  'CH6INO2',
  'CH6INO3',
  'CH6INO4',
  'CH6INO5',
  'CH6PUT1',
  'CH6PUT2',
  'CH6PUT3',
  'CH6OUT1',

  'CH7INT1',
  'CH7INT2',
  'CH7INT3',
  'CH7MPT1',
  'CH7OUT1',

  'CH8INT1',
  'CH8INT2',
  'CH8INT3',
  'CH8BBK1',
  'CH8BBK2',
  'CH8BBK3',
  'CH8BBK4',
  'CH8BBK5',
  'CH8BBK6',
  'CH8BBK7',
  'CH8BBK8',
  'CH8OUT1',

  'CH9INT1',
  'CH9INT2',
  'CH9SPL1',
  'CH9SPL2',
  'CH9SPL3',
  'CH9OUT1',
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
  CH3SOL1: { path: '/chapter-3/solo-1' },
  CH3POL1: { path: '/chapter-3/pool-1' },
  CH3POL2: { path: '/chapter-3/pool-2' },
  CH3COO1: { path: '/chapter-3/coop-1' },
  CH3COO2: { path: '/chapter-3/coop-2' },
  CH3COO3: { path: '/chapter-3/coop-3' },
  CH3SPL1: { path: '/chapter-3/split-1' },
  CH3SPL2: { path: '/chapter-3/split-2' },
  CH3OUT1: { path: '/chapter-3/outro-1' },

  CH4INT1: { path: '/chapter-4/intro-1' },
  CH4PKY1: { path: '/chapter-4/public-key-1' },
  CH4PKY2: { path: '/chapter-4/public-key-2' },
  CH4PKY3: { path: '/chapter-4/public-key-3' },
  CH4PKY4: { path: '/chapter-4/public-key-4' },
  CH4ADR1: { path: '/chapter-4/address-1' },
  CH4ADR2: { path: '/chapter-4/address-2' },
  CH4ADR3: { path: '/chapter-4/address-3' },
  CH4OUT1: { path: '/chapter-4/outro-1' },

  CH5INT1: { path: '/chapter-5/intro-1' },
  CH5INT2: { path: '/chapter-5/intro-2' },
  CH5INT3: { path: '/chapter-5/intro-3' },
  CH5DRM1: { path: '/chapter-5/derive-message-1' },
  CH5DRM2: { path: '/chapter-5/derive-message-2' },
  CH5DRM3: { path: '/chapter-5/derive-message-3' },
  CH5DRM4: { path: '/chapter-5/derive-message-4' },
  CH5DRM5: { path: '/chapter-5/derive-message-5' },
  CH5DRM6: { path: '/chapter-5/derive-message-6' },
  CH5DRM7: { path: '/chapter-5/derive-message-7' },
  CH5VFS1: { path: '/chapter-5/verify-signature-1' },
  CH5VFS2: { path: '/chapter-5/verify-signature-2' },
  CH5VFS3: { path: '/chapter-5/verify-signature-3' },
  CH5VFS4: { path: '/chapter-5/verify-signature-4' },
  CH5VFS5: { path: '/chapter-5/verify-signature-5' },
  CH5VLS1: { path: '/chapter-5/validate-signature-1' },
  CH5VLS2: { path: '/chapter-5/validate-signature-2' },
  CH5VLS3: { path: '/chapter-5/validate-signature-3' },
  CH5VLS4: { path: '/chapter-5/validate-signature-4' },
  CH5OUT1: { path: '/chapter-5/outro-1' },

  CH6INT1: { path: '/chapter-6/intro-1' },
  CH6INT2: { path: '/chapter-6/intro-2' },
  CH6INO1: { path: '/chapter-6/in-out-1' },
  CH6INO2: { path: '/chapter-6/in-out-2' },
  CH6INO3: { path: '/chapter-6/in-out-3' },
  CH6INO4: { path: '/chapter-6/in-out-4' },
  CH6INO5: { path: '/chapter-6/in-out-5' },
  CH6PUT1: { path: '/chapter-6/put-it-together-1' },
  CH6PUT2: { path: '/chapter-6/put-it-together-2' },
  CH6PUT3: { path: '/chapter-6/put-it-together-3' },
  CH6OUT1: { path: '/chapter-6/outro-1' },

  CH7INT1: { path: '/chapter-7/intro-1' },
  CH7INT2: { path: '/chapter-7/intro-2' },
  CH7INT3: { path: '/chapter-7/intro-3' },
  CH7MPT1: { path: '/chapter-7/mempool-transaction-1' },
  CH7OUT1: { path: '/chapter-7/outro-1' },

  CH8INT1: { path: '/chapter-8/intro-1' },
  CH8INT2: { path: '/chapter-8/intro-2' },
  CH8INT3: { path: '/chapter-8/intro-3' },
  CH8BBK1: { path: '/chapter-8/building-blocks-1' },
  CH8BBK2: { path: '/chapter-8/building-blocks-2' },
  CH8BBK3: { path: '/chapter-8/building-blocks-3' },
  CH8BBK4: { path: '/chapter-8/building-blocks-4' },
  CH8BBK5: { path: '/chapter-8/building-blocks-5' },
  CH8BBK6: { path: '/chapter-8/building-blocks-6' },
  CH8BBK7: { path: '/chapter-8/building-blocks-7' },
  CH8BBK8: { path: '/chapter-8/building-blocks-8' },
  CH8OUT1: { path: '/chapter-8/outro-1' },
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

export const getCurrentLessonKey = (
  userProgressKey: string,
  account?: any
): string => {
  if (!account) {
    return userProgressKey
  }

  const id = keys.indexOf(userProgressKey)
  const nextChapterIntro = 'CH' + getNextChapterNumber(userProgressKey) + 'INT1'

  // Explaination: If the following lesson exist, and is equal to
  // the intro of next chapter, that means we are on the outro of
  // the current lesson, and can skip it to appropriately mark the
  // progress
  if (keys[id + 1] && keys[id + 1] === nextChapterIntro) {
    return nextChapterIntro
  }

  return userProgressKey
}

export const getNextLessonKey = (
  userProgressKey: string,
  account?: any
): string => {
  const id = keys.indexOf(userProgressKey)
  const nextChapterIntro = 'CH' + getNextChapterNumber(userProgressKey) + 'INT1'

  // Explaination: If account exist, and the next to next lesson
  // is the Intro of next chapter, then that means, we are on the
  // penultimate lesson of the current chapter and can skip the
  // following lesson to get the next chapter's intro key.
  if (account && keys[id + 2] && keys[id + 2] === nextChapterIntro) {
    return nextChapterIntro
  }

  // If the next lesson exist. Return next lesson's key.
  if (keys[id + 1]) {
    return keys[id + 1]
  } else {
    console.debug('There is no next lesson')
    return userProgressKey
  }
}

export const getNextChapterNumber = (userProgressKey: string): number => {
  const currentLessonNumber = parseInt(userProgressKey.slice(2, 3))
  return currentLessonNumber + 1
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

export const getLessonPath = (userProgressKey: string): string => {
  return keysMeta[userProgressKey].path
}
