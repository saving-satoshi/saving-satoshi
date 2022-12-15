import { Tab } from './Tab'

export type Item = {
  slug: string
  id: number
}

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <nav className="flex items-stretch">
      {items.map((item) => (
        <Tab key={path + item.slug + item.id} item={item} path={path} />
      ))}
    </nav>
  )
}
