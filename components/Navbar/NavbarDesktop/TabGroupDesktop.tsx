import TabDesktop from './TabDesktop'
import { chapters, lessons } from 'content'
import { useAtomValue } from 'jotai'
import { getLessonKey, syncedCourseProgressAtom } from 'state/progressState'
import { ChapterInState } from 'types'

export default function TabGroup({ params }) {
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const chapterFromState: ChapterInState =
    courseProgress.chapters[params.slug.split('-')[1] - 1]
  const { slug } = params

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const introsData = chapter.metadata.intros
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
    })

  const lessonsData = chapter.metadata.lessons
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
    })

  const outrosData = chapter.metadata.outros
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
    })

  let groupedLessonData = {}

  lessonsData.forEach((lesson) => {
    const key = lesson.lessonId.split('-')[0]
    const value = lesson

    if (!groupedLessonData[key]) {
      groupedLessonData[key] = []
    }

    groupedLessonData[key].push(value)
  })

  const challenges = chapter.metadata.challenges
    .filter((lessonId: string) => {
      if (chapterFromState.hasDifficulty) {
        const difficulty = chapterFromState.difficulties.find(
          (d) => d.level === chapterFromState.selectedDifficulty
        )
        const lessonsWithDifficulty = difficulty?.lessons
        return lessonsWithDifficulty?.some(
          (lesson) => lesson.id === getLessonKey(slug, lessonId)
        )
      }
      return true
    })
    .map((lessonId: string) => {
      const { title } = lessons[slug][lessonId].metadata
      return { lessonId, title }
    })

  return (
    <div className="flex-l flex h-full items-stretch">
      <TabDesktop
        key={0}
        part="intro"
        index={1}
        challenge={introsData[0]}
        params={params}
        challengeLessons={introsData}
      />
      {challenges.map((challenge, index: number) => (
        <TabDesktop
          key={index}
          index={index + 2}
          challenge={challenge}
          params={params}
          challengeLessons={groupedLessonData[challenge.lessonId.split('-')[0]]}
        />
      ))}
      <TabDesktop
        key={4}
        part="outro"
        index={challenges.length + 2}
        challenge={outrosData[0]}
        params={params}
        challengeLessons={outrosData}
      />
    </div>
  )
}
