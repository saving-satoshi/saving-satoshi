'use client'

import { Chapter } from '.contentlayer/generated/types'
import { Overview } from './Overview'
import { Tabs } from 'components/ui/Tabs'
import { useState, useEffect } from 'react'
import { ChallengeList } from './ChallengeList'
import { useMediaQuery } from 'react-responsive'

export const OverviewInfo = (chapter: Chapter) => {
  const [activeTab, setActiveTab] = useState('info')
  const [hydrated, setHydrated] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
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

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (hydrated && (
    <div className="w-full ml-3.5 mr-3.5 content-center justify-items-start px-1">
      <h2 className="text-left mt-6 font-nunito text-xl font-bold text-white text-opacity-75 md:text-3xl">
        Chapter {chapter.position}
      </h2>
      <h2 className="text-left mb-6 text-3xl text-white md:text-5xl">
        {chapter.title}
      </h2>
      <Tabs
        items={tabData}
        activeId={activeTab}
        onChange={setActiveTab}
        classes="mt-8"
      />
        {isSmallScreen ? (
          <div className="flex grow">
            {activeTab == 'info' &&
              <Overview chapter={chapter}></Overview>
            }
            {activeTab == 'challenges' && (
              <ChallengeList challenges={chapter.lessons} path={chapter.slug} ></ChallengeList>
            )}
          </div>
        ) : (
          <div className='flex'>
            <div 
              aria-hidden={(activeTab != 'info' ? 'true' : 'false')} 
              className={'tab-content ' + (activeTab != 'info' ? '' : 'tab-content-active')}>
              <Overview chapter={chapter}></Overview>
            </div>
            <div 
              aria-hidden={(activeTab != 'challenges' ? 'true' : 'false')} 
              className={'tab-content ' + (activeTab != 'challenges' ? '' : 'tab-content-active')}>
              <ChallengeList challenges={chapter.lessons} path={chapter.slug} ></ChallengeList>
            </div>
          </div>
        )}
    </div>
  ))
}
