'use client'

import { useState, useEffect } from 'react'

interface UseWidthParams {
  width: number
}

const useMediaQuery = ({ width }: UseWidthParams): boolean => {
  const [isWidthMet, setIsWidthMet] = useState<boolean>(
    window.innerWidth <= width
  )

  useEffect(() => {
    const handleResize = () => {
      setIsWidthMet(window.innerWidth <= width)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])

  return isWidthMet
}

export default useMediaQuery
