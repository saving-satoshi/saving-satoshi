'use client'

import { useEffect, useState } from 'react'
import { LessonDirection, LessonView } from 'types'
import { Lesson, LessonTabs, useLessonContext } from 'ui'
import { useMediaQuery, useDynamicHeight } from 'hooks'
import { editor } from 'monaco-editor'
import PlainEditor from './PlainEditor'

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

export default function PlainEditorWrapper({
  children,
  code,
}: {
  children?: React.ReactNode
  code: string
}) {
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

        <PlainEditor code={code} />
      </Lesson>
    )
  )
}
