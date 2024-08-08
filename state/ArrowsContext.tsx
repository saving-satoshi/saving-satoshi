import React, { createContext, ReactNode, useContext, useRef } from 'react'
import { ArcherContainer, ArcherContainerRef } from 'react-archer'

interface ArrowsContextType {
  ref: React.RefObject<ArcherContainerRef> | null
}

const ArrowsContext = createContext<ArrowsContextType>({ ref: null })

interface ArrowsContextProviderProps {
  children: ReactNode
}

export const ArrowsProvider: React.FC<ArrowsContextProviderProps> = ({
  children,
}) => {
  const ref = useRef<ArcherContainerRef>(null)

  return (
    <div className="w-full">
      <ArrowsContext.Provider value={{ ref }}>
        <ArcherContainer ref={ref} noCurves>
          {children}
        </ArcherContainer>
      </ArrowsContext.Provider>
    </div>
  )
}

export const useArrows = () => useContext(ArrowsContext)
