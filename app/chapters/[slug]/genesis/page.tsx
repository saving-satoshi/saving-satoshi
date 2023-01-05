'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'
import { BoxButton } from 'components/ui/BoxButton'
import { Tabs } from 'components/ui/Tabs'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'
import { Info } from './info'
import { Code } from './code'

//Am i going to to this boilerplate for every view?
// TODO make a factory (or other pattern) to populate component data
function getGenesis() {
  const slug = 'genesis'
  const data = allLessons.find(
    (challenge: Lesson) => challenge.slugAsParams === slug
  )
  return data
}

export default function Genesis() {
  const [hydrated, setHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('info')
  const genesis = getGenesis()
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })
  const tabData = [
    {
      id: 'info',
      text: 'Info'
    },
    {
      id: 'code',
      text: 'Code',
    }
  ]

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (hydrated && (
    <div className="
      flex
      w-screen
      grow
      flex-col
      items-center
      justify-center
    ">
      {isSmallScreen && (
        <Tabs
          items={tabData}
          activeId={activeTab}
          onChange={setActiveTab}
          classes="px-4 py-2 w-full"
          stretch={true}
        />
      )}
      {(!isSmallScreen || (isSmallScreen && activeTab == 'info')) && (
        <Info
          genesis={genesis}
        />
      )}
      {!isSmallScreen && (
        <hr className="border-1 h-1 w-screen border-white/25"></hr>
      )}
      {(!isSmallScreen || (isSmallScreen && activeTab == 'code')) && (
        <Code
          isSmallScreen={isSmallScreen}
        />
      )}
    </div>
  ))
}
