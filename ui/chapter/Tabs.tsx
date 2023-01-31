'use client'

import clsx from 'clsx'

import ChapterTab from './Tab'

import { TabData } from 'types'

export default function Tabs({
  activeId,
  items,
  onChange,
  classes,
  stretch,
}: {
  activeId: string
  items: TabData[]
  onChange: any
  classes: string
  stretch?: boolean
}) {
  return (
    <div className={clsx('flex gap-2', classes)}>
      {items.map((item, index) => (
        <ChapterTab
          key={index}
          tabData={item}
          onSelect={onChange}
          activeId={activeId}
          stretch={stretch}
        />
      ))}
    </div>
  )
}
