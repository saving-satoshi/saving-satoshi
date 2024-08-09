'use client'

import { useDynamicHeight, useMediaQuery } from 'hooks'
import React, { useEffect, useState } from 'react'
import { ArrowsProvider } from 'state/ArrowsContext'
import { LessonDirection } from 'types'
import { Lesson, LessonTabs } from 'ui'
import OpRunner from './OpRunner'
import { OpRunnerTypes } from './runnerTypes'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

export default function OpCodeChallenge({
  children,
  answerScript,
  prePopulate,
  showRunButtons,
  readOnly,
  success,
  setSuccess,
}: OpRunnerTypes) {
  const [hydrated, setHydrated] = useState(false)

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  return (
    hydrated && (
      <Lesson
        direction={
          isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
        }
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}
        <div className="height-minus-nav flex overflow-y-auto border-white/25 md:max-w-[50vw] md:border-l">
          <ArrowsProvider>
            <OpRunner
              answerScript={answerScript}
              prePopulate={prePopulate}
              showRunButtons={showRunButtons}
              readOnly={readOnly}
              success={success}
              setSuccess={setSuccess}
            />
          </ArrowsProvider>
        </div>
      </Lesson>
    )
  )
}
