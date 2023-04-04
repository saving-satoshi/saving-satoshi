'use client'

import { useState, useEffect } from 'react'

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(undefined)

  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      setValue(storedValue)
    }
  }, [key])

  return value
}
