import Tab from './Tab'
import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'

export default function TabGroup({ params }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { slug } = params

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const lessonsData = chapter.metadata.lessons.map((lessonId: string) => {
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

  const challenges = chapter.metadata.challenges.map((lessonId) => {
    const { title } = lessons[slug][lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="flex-l flex h-full items-stretch">
      {challenges.map((challenge, index) => (
        <Tab
          key={index}
          count={challenges.length}
          index={index}
          challenge={challenge}
          params={params}
          challengeLessons={groupedLessonData[challenge.lessonId.split('-')[0]]}
        />
      ))}
    </div>
  )
}
