'use client'

import { usePathData } from 'hooks'
import { chapters } from 'content'
import { User } from 'types'

export default function useLessonUnlocked(userInfo) {
  const user: User = userInfo ? JSON.parse(userInfo) : null
  const { lang, pageId, chapterId, lessonId } = usePathData()

  // false if the userInfo is not available
  if (user === null) {
    return false
  }

  const userLesson = user?.progress?.lesson
  const userChapter = user?.progress?.chapter
  const lessonArray = [
    ...chapters[chapterId].metadata.intros,
    ...chapters[chapterId].metadata.lessons,
    ...chapters[chapterId].metadata.outros,
  ]
  const redirectURL = `/${lang}/${pageId}/${userChapter}/${userLesson}`

  // true if the user is trying to access a previous completed chapter
  if (userChapter.split('-')[1] > chapterId.split('-')[1]) {
    return true
  }

  // true if the user is trying to access an ongoing unlocked chapter and is on the ongoing lesson or previous lesson
  if (
    userChapter.split('-')[1] == chapterId.split('-')[1] &&
    lessonArray.indexOf(userLesson) >= lessonArray.indexOf(lessonId)
  ) {
    return true
  }

  // true if the user is trying to access an ongoing unlocked chapter and is on a later part of the lesson. ex: genesis-4
  if (
    userChapter.split('-')[1] == chapterId.split('-')[1] &&
    userLesson.split('-')[0] === lessonId.split('-')[0]
  ) {
    return true
  }

  // redirectURL to the ongoing lesson if none of the above conditions are true
  return redirectURL
}
