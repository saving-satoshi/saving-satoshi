import Tab from './Tab'
import { chapters, lessons } from 'content'

export default function TabGroup({ params }) {
  const { slug } = params

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const introsData = chapter.metadata.intros.map((lessonId: string) => {
    const { title } = lessons[slug][lessonId].metadata

    return { lessonId, title }
  })

  const lessonsData = chapter.metadata.lessons.map((lessonId: string) => {
    const { title } = lessons[slug][lessonId].metadata

    return { lessonId, title }
  })

  const outrosData = chapter.metadata.outros.map((lessonId: string) => {
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

  const challenges = chapter.metadata.challenges.map((lessonId: string) => {
    const { title } = lessons[slug][lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="flex-l flex h-full items-stretch">
      <Tab
        key={0}
        part="intro"
        index={-1}
        challenge={introsData[0]}
        params={params}
        challengeLessons={introsData}
      />
      {challenges.map((challenge, index: number) => (
        <Tab
          key={index}
          index={index}
          challenge={challenge}
          params={params}
          challengeLessons={groupedLessonData[challenge.lessonId.split('-')[0]]}
        />
      ))}
      <Tab
        key={4}
        part="outro"
        index={2}
        challenge={outrosData[0]}
        params={params}
        challengeLessons={outrosData}
      />
    </div>
  )
}
