import Tab from './Tab'
import { chapters, lessons } from 'content'

export default function TabGroup({ params }) {
  const lang = params.lang
  const slug = params.slug

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const challenges = chapter.metadata.challenges.map((lessonId) => {
    const { title } = lessons[lessonId].metadata

    return { lessonId, title }
  })

  return (
    <div className="flex-l flex h-full items-stretch">
      {challenges.map((challenge, index) => (
        <Tab
          lang={lang}
          key={index}
          count={challenges.length}
          index={index}
          challenge={challenge}
          params={params}
        />
      ))}
    </div>
  )
}
