'use client'

import clsx from 'clsx'

import TransactionsTab from './Tab'
import { TabData } from 'types'
import { SetStateAction, useState } from 'react'

export default function Tabs({
  items,
  classes,
  stretch,
  activeView,
  setActiveView,
}: {
  items: TabData[]
  classes: string
  stretch?: boolean
  setActiveView: React.Dispatch<SetStateAction<string>>
  activeView: string
}) {
  return (
    <div className={clsx('flex ', classes)}>
      {items.map((item, index) => (
        <TransactionsTab
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
