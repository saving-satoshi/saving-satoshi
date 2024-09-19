'use client'

import { createContext, useContext, useState } from 'react'
import { LessonDirection, LessonContextType, LessonView } from 'types'

interface LessonProps {
  direction: LessonDirection
  onViewChange?: (view: LessonView) => void
  children?: React.ReactNode
}

const LessonContext = createContext<LessonContextType>({
  direction: LessonDirection.Horizontal,
  activeView: LessonView.Info,
  setActiveView: (view: LessonView) => {},
})

export const useLessonContext = () => useContext(LessonContext)

export default function Lesson({
  direction,
  onViewChange,
  ...props
}: LessonProps) {
  const [activeView, setActiveView] = useState(LessonView.Info)

  const handleSetActiveView = (view: LessonView) => {
    setActiveView(view)
    onViewChange?.(view)
  }

  const context = {
    direction,
    activeView,
    setActiveView: handleSetActiveView,
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
