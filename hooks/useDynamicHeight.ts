/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'

export default function useDynamicHeight(deps?: any[]) {
  const handleResize = () => {
    console.log('updating dynamic height')
    const cssRoot = document.documentElement
    cssRoot.style.setProperty('--dynamic-height', `${window.innerHeight}px`)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, deps)
}
