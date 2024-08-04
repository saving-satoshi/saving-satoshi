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
    <ArrowsContext.Provider value={{ ref }}>
      <ArcherContainer ref={ref}>{children}</ArcherContainer>
    </ArrowsContext.Provider>
  )
}

export const useArrows = () => useContext(ArrowsContext)
