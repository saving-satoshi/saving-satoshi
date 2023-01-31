'use client'

import clsx from 'clsx'

import { useLessonContext } from 'ui'
import LessonTab from './Tab'
import { TabData } from 'types'

export default function Tabs({
  items,
  classes,
  stretch,
}: {
  items: TabData[]
  classes: string
  stretch?: boolean
}) {
  const { activeView, setActiveView } = useLessonContext()

  return (
    <div className={clsx('flex gap-2 md:hidden', classes)}>
      {items.map((item, index) => (
        <LessonTab
          key={index}
          tabData={item}
          onSelect={setActiveView}
          activeView={activeView}
          stretch={stretch}
        />
      ))}
    </div>
  )
}
