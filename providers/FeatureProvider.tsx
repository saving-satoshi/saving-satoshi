'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { FeatureContextType } from 'types'
import { keys } from 'lib/progress'
import { getFeatures } from 'api/features'

export const defaultFeatureContext = {
  isLoading: true,
  features: {},
  isFeatureEnabled: (key: string) => false,
}

export const FeatureContext = createContext<FeatureContextType>(
  defaultFeatureContext
)

export const useFeatureContext = () => useContext(FeatureContext)

export default function FeatureProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [features, setFeatures] = useState<{ [key: string]: number }>({})

  const init = async () => {
    try {
      setIsLoading(true)
      const features = await getFeatures()
      setFeatures(
        features.reduce((obj, feature) => {
          obj[feature.feature_name] = feature.feature_value
          return obj
        }, {})
      )
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const isFeatureEnabled = (name: string) => {
    return !!features[name]
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <FeatureContext.Provider value={{ isLoading, features, isFeatureEnabled }}>
      {children}
    </FeatureContext.Provider>
  )
}
