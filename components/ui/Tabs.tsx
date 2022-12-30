'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Tab } from './Tab'

export type TabData = {
  id: string
  text: string,
  disabled?: boolean
}

export const Tabs = ({
  activeId,
  items,
  onChange,
  classes,
  stretch
}: {
  activeId: string
  items: TabData[],
  onChange: any,
  classes: string,
  stretch?: boolean
}) => {
  let className = "flex gap-2"

  if(classes) {
    className += ' ' + classes
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <Tab
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
