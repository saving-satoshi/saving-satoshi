'use client'

import { createContext, useContext, useState } from 'react'
import { LessonDirection, LessonContextType, LessonView } from 'types'

const LessonContext = createContext<LessonContextType>({
  direction: LessonDirection.Horizontal,
  activeView: LessonView.Info,
  setActiveView: (view: LessonView) => {},
})

export const useLessonContext = () => useContext(LessonContext)

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
        <div className="flex grow flex-col md:flex-row">{props.children}</div>
      )}
      {direction === LessonDirection.Vertical && (
        <div className="flex w-full grow flex-col">{props.children}</div>
      )}
    </LessonContext.Provider>
  )
}
