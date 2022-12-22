'use client'

import { Chapter } from '.contentlayer/generated/types'
import { Overview } from './Overview'
import { Tabs } from 'components/ui/Tabs'
import { useState } from 'react'
import { ChallengeList } from './ChallengeList'

export const OverviewInfo = (chapter: Chapter) => {
  const [activeTab, setActiveTab] = useState('info')
  const tabData = [
    {
      id: 'info',
      text: 'Info'
    },
    {
      id: 'challenges',
      text: 'Challenges',
    }
  ]

  return (
    <div className="w-full content-center justify-items-start px-1">
      <h2 className="text-left font-nunito text-xl font-bold text-white text-opacity-75 md:text-3xl">
        Chapter {chapter.position}
      </h2>
      <h2 className="text-left text-3xl text-white md:text-5xl">
        {chapter.title}
      </h2>
      <Tabs
        items={tabData}
        activeId={activeTab}
        onChange={setActiveTab}
        classes="mt-8"
      />
      <div className="flex grow">
        {activeTab == 'info' &&
          <Overview chapter={chapter}></Overview>
        }
        {activeTab == 'challenges' && (
          <ChallengeList challenges={chapter.lessons} path={chapter.slug} ></ChallengeList>
        )}
      </div>
    </div>
  )
}
