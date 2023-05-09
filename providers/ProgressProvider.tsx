'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ProgressContextType } from 'types'
import { getProgress, setProgress } from 'api/progress'
import { getProgressLocal, setProgressLocal } from 'api/local'
import { useAuthContext } from './AuthProvider'

export const defaultProgressContext = {
  progress: 'CH1INT1',
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
  const [savePending, setSavePending] = useState(false)

  const init = async () => {
    try {
      setIsLoading(true)
      const progress = await getProgress()
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
    try {
      setSavePending(true)
      setAccountProgress(key)
      await setProgress(key)
    } catch (ex) {
      console.error(ex)
    } finally {
      setSavePending(false)
    }
  }

  const saveProgressLocal = async (key: string) => {
    try {
      setSavePending(true)
      setAccountProgress(key)
      await setProgressLocal(key)
    } catch (ex) {
      console.error(ex)
    } finally {
      setSavePending(false)
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
        progress: accountProgress,
        saveProgress,
        saveProgressLocal,
        isLoading,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}
