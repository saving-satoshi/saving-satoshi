import { Tab } from './Tab'
import { allLessons, Lesson } from 'contentlayer/generated'

export type Item = {
  path: string
  title: string
}

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <nav className="flex items-stretch">
      {items.map((challenge, index) => (
        <Tab key={index} index={index} challenge={challenge} last={index === items.length - 1} />
      ))}
    </nav>
  )
}
