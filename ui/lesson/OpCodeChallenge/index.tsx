'use client'

import { useDynamicHeight, useMediaQuery } from 'hooks'
import React, { useEffect, useState, useContext } from 'react'
import { ArrowsProvider } from 'state/ArrowsContext'
import { LessonDirection, LessonView } from 'types'
import { Lesson, LessonTabs } from 'ui'
import OpRunner from './OpRunner'
import clsx from 'clsx'
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
  const [activeView, setActiveView] = useState(LessonView.Info)

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleViewChange = (view) => {
    setActiveView(view)
  }

  return (
    <Lesson
      direction={
        isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
      }
      onViewChange={handleViewChange}
    >
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
      {children}
      <div
        className={clsx(
          'h-[calc(100dvh-70px-48px)] border-white/25 md:h-[calc(100vh-70px)] md:max-w-[50vw] md:border-l',
          {
            'hidden md:flex': activeView === LessonView.Info,
          }
        )}
      >
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
}
