'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { login, getSession, logout } from 'api/auth'
import { AuthContextType } from 'types'

export const AuthContext = createContext<AuthContextType>({
  account: undefined,
  login: async (privateKey: string) => false,
  logout: async () => {},
  isLoading: true,
})

export const useAuthContext = () => useContext(AuthContext)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [account, setAccount] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const attemptLogin = async (privateKey: string) => {
    try {
      setIsLoading(true)

      const loginSuccess = await login(privateKey)
      if (!loginSuccess) {
        return false
      }

      const account = await getSession()
      setAccount(account)

      return true
    } catch (ex) {
      console.error(ex)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const attemptLogout = async () => {
    await logout()
    setAccount(undefined)
  }

  const check = async () => {
    try {
      setIsLoading(true)

      const account = await getSession()

      setAccount(account)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    check()
  }, [])

  return (
    <AuthContext.Provider
      value={{ account, isLoading, login: attemptLogin, logout: attemptLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
