import { Tab } from './Tab'
import { allLessons, Lesson } from 'contentlayer/generated'

export type Item = {
  slug: string
  id: number
}

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  const itemSlugs = items.map(item => item.slug)
  const challengesData = items ? allLessons.filter((challenge: Lesson) => itemSlugs.indexOf(challenge.slugAsParams) !== -1) : null
  const count = challengesData.length

  return (
    <nav className="flex items-stretch">
      {challengesData.map((challenge, index) => (
        <Tab key={index} count={count} index={index} challenge={challenge} path={path} />
      ))}
    </nav>
  )
}
