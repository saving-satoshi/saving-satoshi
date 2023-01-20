import { allChapters, Chapter } from 'contentlayer/generated'
import { compareAsc } from 'date-fns'
import { getUserProgress } from 'lib/user'

export async function getChapters() {
  const chapters: Chapter[] = await allChapters.sort((a, b) => {
    return compareAsc(a.position, b.position)
  })
  return chapters
}

// Find out if the user has unlocked or completed a specific lesson
export function getUserLessonStatus(
  chapterId,
  lessonId
) {
  const result = {
    unlocked: false,
    completed: false
  }

  const userProgress = getUserProgress()

  if(userProgress) {
    const userChapterId = userProgress.chapter
    const userLessonId = userProgress.lesson

    // Sort chapters by position as they are reversed by default.
    const sortedChapters = allChapters.sort((a, b) => {
      if(a.position < b.position) return -1
      else if(a.position > b.position) return 1
      return 0
    })
    const chapterIds = allChapters.map(chapter => chapter.slugAsParams)

    const chapterIdIndex = chapterIds.indexOf(chapterId)
    const userChapterIdIndex = chapterIds.indexOf(userChapterId)

    // Has the user reached this chapter?
    if(userChapterIdIndex > chapterIdIndex) {
      result.completed = true
      result.unlocked = true
    } else if(userChapterIdIndex == chapterIdIndex) {
      const chapter = allChapters[userChapterIdIndex]
      const chapterLessons = chapter.lessons ? chapter.lessons : []

      const lessonIdIndex = chapterLessons.indexOf(lessonId)
      const userLessonIdIndex = chapterLessons.indexOf(userLessonId)

      if(userLessonIdIndex > lessonIdIndex) {
        result.completed = true
      }

      if(userLessonIdIndex >= lessonIdIndex) {
        result.unlocked = true
      }
    }
  } else if(chapterId == 'chapter-1' && lessonId == 'genesis') {
    result.unlocked = true
  }

  return result
}

