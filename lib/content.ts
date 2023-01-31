import { getUserProgress } from 'lib/user'

import chapters from 'content/chapters'

// Find out if the user has unlocked or completed a specific lesson
export function getUserLessonStatus(chapterId, lessonId) {
  const result = {
    unlocked: false,
    completed: false,
  }

  const userProgress = getUserProgress()

  if (userProgress) {
    const userChapterId = userProgress.chapter
    const userLessonId = userProgress.lesson

    const userChapter = chapters[userChapterId].metadata
    const currentChapter = chapters[chapterId].metadata

    const userChapterIdIndex = userChapter.position
    const chapterIdIndex = currentChapter.position

    // Has the user reached this chapter?
    if (userChapterIdIndex > chapterIdIndex) {
      result.completed = true
      result.unlocked = true
    } else if (userChapterIdIndex == chapterIdIndex) {
      const chapter = chapters[userChapterId]
      const chapterLessons = chapter.metadata.lessons
        ? chapter.metadata.lessons
        : []

      const lessonIdIndex = chapterLessons.indexOf(lessonId)
      const userLessonIdIndex = chapterLessons.indexOf(userLessonId)

      if (userLessonIdIndex > lessonIdIndex) {
        result.completed = true
      }

      if (userLessonIdIndex >= lessonIdIndex) {
        result.unlocked = true
      }
    }
  } else if (chapterId == 'chapter-1' && lessonId == 'genesis') {
    result.unlocked = true
  }

  return result
}
