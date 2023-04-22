'use client'
import { useState, useEffect } from 'react'

interface UseMediaQueryParams {
  width: number
}

export default function useMediaQuery({ width }: UseMediaQueryParams): boolean {
  const [isWidthMet, setIsWidthMet] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth <= width
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
