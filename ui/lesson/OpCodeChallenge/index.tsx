'use client'

import { useDynamicHeight, useMediaQuery } from 'hooks'
import React, { useEffect, useState } from 'react'
import { LessonDirection } from 'types'
import Lesson from '../Lesson'
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
        {children}
        <div className="height-minus-nav flex border-white/25 md:max-w-[50vw] md:border-l">
          <OpRunner
            answerScript={answerScript}
            prePopulate={prePopulate}
            showRunButtons={showRunButtons}
            readOnly={readOnly}
            success={success}
            setSuccess={setSuccess}
          />
        </div>
      </Lesson>
    )
  )
}
