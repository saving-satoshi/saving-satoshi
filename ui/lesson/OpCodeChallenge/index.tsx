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
  {
    id: 'execute',
    text: 'Execute',
  },
]

export default function OpCodeChallenge({
  children,
  lang,
  answerScript,
  prePopulate,
  readOnly,
  success,
  setSuccess,
  advancedChallenge,
  initialHeight,
  initialStackScript,
  nextStepMessage,
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
        <div className="flex h-[calc(100vh-70px-48px)] border-white/25 md:h-[calc(100vh-70px)] md:max-w-[50vw] md:border-l">
          <ArrowsProvider>
            <OpRunner
              lang={lang}
              answerScript={answerScript}
              readOnly={readOnly}
              prePopulate={prePopulate}
              initialStackScript={initialStackScript}
              success={success}
              initialHeight={initialHeight}
              advancedChallenge={advancedChallenge}
              setSuccess={setSuccess}
              nextStepMessage={nextStepMessage}
            />
          </ArrowsProvider>
        </div>
      </Lesson>
    )
  )
}
