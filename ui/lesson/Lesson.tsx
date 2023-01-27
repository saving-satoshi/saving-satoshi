'use client'

import { createContext, useState } from 'react'
import { LessonDirection, LessonContextType, LessonView } from 'types'

export const LessonContext = createContext<LessonContextType | null>(null)

export default function Lesson(props) {
  const [activeView, setActiveView] = useState(LessonView.Info)

  const direction = props.direction || LessonDirection.Vertical

  const context = {
    direction,
    activeView,
    setActiveView,
  }

  return (
    <LessonContext.Provider value={context}>
      {direction === LessonDirection.Horizontal && (
        <div className="justify-stretch grid w-full grow grid-cols-1 px-6 md:grid-cols-2 lg:px-0">
          {props.children}
        </div>
      )}
      {direction === LessonDirection.Vertical && (
        <div className="flex w-full grow flex-col items-center justify-center">
          {props.children}
        </div>
      )}
    </LessonContext.Provider>
  )
}
