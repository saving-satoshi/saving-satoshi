'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ProgressContextType } from 'types'
import { getProgress, setProgress } from 'api/progress'
import { getProgressLocal, setProgressLocal } from 'api/local'
import { useAuthContext } from './AuthProvider'
import { keys } from 'lib/progress'

export const defaultProgressContext = {
  progress: keys[0],
  isLoading: true,
  saveProgress: (key: string) => Promise.resolve(),
  saveProgressLocal: (key: string) => Promise.resolve(),
}

export const ProgressContext = createContext<ProgressContextType>(
  defaultProgressContext
)

export const useProgressContext = () => useContext(ProgressContext)

export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { account } = useAuthContext()
  const [accountProgress, setAccountProgress] = useState<string>(
    defaultProgressContext.progress
  )
  const [isLoading, setIsLoading] = useState(true)

  const init = async () => {
    try {
      setIsLoading(true)
      let progress = await getProgress()
      if (progress === keys[0]) {
        progress = await getProgressLocal()
      }
      setAccountProgress(progress)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const initLocal = async () => {
    try {
      setIsLoading(true)
      const progress = await getProgressLocal()
      setAccountProgress(progress)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const saveProgress = async (key: string) => {
    const progress = await getProgress()
    if (keys.indexOf(progress) < keys.indexOf(key)) {
      try {
        setIsLoading(true)
        setAccountProgress(key)
        await setProgress(key)
      } catch (ex) {
        console.error(ex)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const saveProgressLocal = async (key: string) => {
    const progress = await getProgressLocal()
    if (keys.indexOf(progress) < keys.indexOf(key)) {
      try {
        setIsLoading(true)
        setAccountProgress(key)
        await setProgressLocal(key)
      } catch (ex) {
        console.error(ex)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    if (account) {
      init()
    } else {
      initLocal()
    }
  }, [account])

  return (
    <ProgressContext.Provider
      value={{
        progress: accountProgress ?? keys[0],
        saveProgress,
        saveProgressLocal,
        isLoading,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}
