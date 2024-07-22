'use client'
import { useState, useEffect } from 'react'

interface UseMediaQueryHeightParams {
  height: number
}

export default function useMediaQueryHeight({
  height,
}: UseMediaQueryHeightParams): boolean {
  const [isHeightMet, setIsHeightMet] = useState<boolean>(
    typeof window !== 'undefined' && window.innerHeight <= height
  )

  useEffect(() => {
    const handleResize = () => {
      setIsHeightMet(window.innerHeight <= height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [height])

  return isHeightMet
}
