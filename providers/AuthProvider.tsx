'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { login, getSession } from 'api/auth'
import { AuthContextType } from 'types'

export const AuthContext = createContext<AuthContextType>({
  account: undefined,
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

  const attemptLogin = async () => {
    try {
      setIsLoading(true)

      // TODO: Get users private key
      const privateKey =
        '85f5e10431f69bc2a14046a13aabaefc660103b6de7a84f75c4b96181d03f0b5'
      if (!privateKey) {
        return
      }

      const loginSuccess = await login(privateKey)
      if (loginSuccess) {
        const account = await getSession()

        setAccount(account)
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    attemptLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ account, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
