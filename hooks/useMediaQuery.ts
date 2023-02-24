'use client'
import { useState, useEffect } from 'react'

interface UseMediaQueryParams {
  width: number
}

export const useMediaQuery = ({ width }: UseMediaQueryParams): boolean => {
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
