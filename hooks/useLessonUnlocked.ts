import { useUser, usePathData } from 'hooks'
import { chapters } from 'content'

function removeAfterHyphen(str: string): string {
  return str.split('-')[0]
}

function getIndex(arr: string[], searchStr: string): number {
  return arr.indexOf(searchStr)
}

export const useLessonUnlocked = () => {
  let { lang, pageId, chapterId, lessonId } = usePathData()
  const userInfo = useUser()

  // if someone vists the website for the first time
  if (userInfo.user === undefined) {
    return `/${lang}`
  } else {
    const userProgress = userInfo.user.progress.lesson
    const lessonArray = chapters[chapterId].metadata.lessons
    const reDirectURL = `/${lang}/${pageId}/${chapterId}/${userProgress}`

    // the URL contains intro or outro
    if (lessonId.includes('intro') || lessonId.includes('outro')) {
      if (lessonId.includes('outro')) {
        if (removeAfterHyphen(userProgress) === removeAfterHyphen(lessonId)) {
          // the user has completed the chapter
          return true
        } else {
          // the URL contains outro for a chapter that is not fully completed, redirect to last unlocked lesson
          return reDirectURL
        }
      } else {
        // intro for a chapter can be viewed, might require work when we add new chapter as we don't want the user to view a locked chapter
        return true
      }
    } else {
      if (removeAfterHyphen(userProgress) === removeAfterHyphen(lessonId)) {
        // the user is on a chapter that is unlocked
        return true
      } else {
        if (
          getIndex(lessonArray, userProgress) < getIndex(lessonArray, lessonId)
        ) {
          // the user is on a chapter that is locked
          return reDirectURL
        } else {
          // the user is on a chapter lower than the unlocked chapter
          return true
        }
      }
    }
  }
}
