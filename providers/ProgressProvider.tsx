'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ProgressContextType } from 'types'
import { getProgress, setProgress } from 'api/progress'
import { useAuthContext } from './AuthProvider'

export const ProgressContext = createContext<ProgressContextType>({
  progress: undefined,
  isLoading: true,
  saveProgress: undefined,
})

export const useProgressContext = () => useContext(ProgressContext)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { account } = useAuthContext()
  const [accountProgress, setAccountProgress] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const init = async () => {
    try {
      setIsLoading(true)
      const { progress } = await getProgress()
      setAccountProgress(progress)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const saveProgress = async (key: string) => {
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

  useEffect(() => {
    if (account) {
      init()
    }
  }, [account])

  return (
    <ProgressContext.Provider
      value={{ progress: accountProgress, saveProgress, isLoading }}
    >
      {children}
    </ProgressContext.Provider>
  )
}
