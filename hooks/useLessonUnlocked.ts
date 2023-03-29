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
    const userLesson = userInfo.user.progress.lesson
    const userChapter = userInfo.user.progress.chapter
    const lessonArray = chapters[chapterId].metadata.lessons
    const reDirectURL = `/${lang}/${pageId}/${userChapter}/${userLesson}`

    if (userChapter.split('-')[1] < chapterId.split('-')[1]) {
      return reDirectURL
    } else {
      if (lessonId.includes('intro')) {
        return true
      } else {
        if (lessonId.includes('outro')) {
          if (removeAfterHyphen(userLesson) === 'outro') {
            return true
          } else {
            return reDirectURL
          }
        } else {
          if (removeAfterHyphen(userLesson) === removeAfterHyphen(lessonId)) {
            return true
          } else {
            if (
              getIndex(lessonArray, userLesson) <
              getIndex(lessonArray, lessonId)
            ) {
              return reDirectURL
            } else {
              return true
            }
          }
        }
      }
    }
  }
}
