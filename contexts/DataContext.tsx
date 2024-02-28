'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { DataContextType, Data } from 'types'
import { getData, setData } from 'api/data'
import { useAuthContext } from './AuthContext'

export const defaultDataContext = {
  isLoading: true,
  data: [],
  loadData: (lessonId: string) => Promise.resolve(),
  saveData: (lesssonId: string, value: any) => Promise.resolve(),
}

export const DataContext = createContext<DataContextType>(defaultDataContext)

export const useDataContext = () => useContext(DataContext)

export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { account } = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setDataState] = useState<Data[]>([])

  const loadData = async (lessonId?: string) => {
    if (!lessonId) {
      return
    }

    try {
      setIsLoading(true)
      let loadedData = await getData(lessonId)
      if (loadedData && loadedData?.answer) {
        setDataState([
          ...data,
          {
            lesson_id: lessonId,
            data: loadedData.answer,
          },
        ])
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const saveData = async (lessonId: string, value: any) => {
    try {
      setIsLoading(true)
      await setData(account?.id || 1, lessonId, value)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <DataContext.Provider
      value={{
        isLoading,
        data,
        loadData,
        saveData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
