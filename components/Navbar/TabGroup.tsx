import Tab from './Tab'
import chapters from 'content/chapters'
import lessons from 'content/lessons'

export default function TabGroup({ params }) {
  const { slug } = params

  const chapter = chapters[slug]

  if (!chapter) {
    return null
  }

  const challenges = chapter.metadata.challenges.map((lessonId) => {
    const { title } = lessons[lessonId].metadata

    return { lessonId, title }
  })

  return (
    <nav className="flex items-stretch">
      {challenges.map((challenge, index) => (
        <Tab
          key={index}
          count={challenges.length}
          index={index}
          challenge={challenge}
          params={params}
        />
      ))}
    </nav>
  )
}
