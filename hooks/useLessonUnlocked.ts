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

  const userLesson = userInfo.user.progress.lesson
  const userChapter = userInfo.user.progress.chapter
  const lessonArray = [
    ...chapters[chapterId].metadata.intros,
    ...chapters[chapterId].metadata.lessons,
    ...chapters[chapterId].metadata.outros,
  ]
  console.log(lessonArray)
  const redirectURL = `/${lang}/${pageId}/${userChapter}/${userLesson}`

  if (userChapter.split('-')[1] > chapterId.split('-')[1]) {
    return true
  }

  if (
    userChapter.split('-')[1] == chapterId.split('-')[1] &&
    getIndex(lessonArray, userLesson) >= getIndex(lessonArray, lessonId)
  ) {
    return true
  }

  if (
    userChapter.split('-')[1] == chapterId.split('-')[1] &&
    removeAfterHyphen(userLesson) === removeAfterHyphen(lessonId)
  ) {
    return true
  }

  return redirectURL
}
