'use client'
import { useEffect, useState } from 'react'

function useHorizontalScroll(ref) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setScrollPosition(ref.current.scrollLeft)
      }
    }

    const element = ref.current

    if (element) {
      element.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref])

  return scrollPosition
}

export default useHorizontalScroll
