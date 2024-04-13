import { useSetAtom } from 'jotai'
import { accountAtom, isAuthLoadingAtom } from './state'
import { login, getSession, logout } from 'api/auth'

export const useAuthFunctions = () => {
  const setAccount = useSetAtom(accountAtom)
  const setAuthIsLoading = useSetAtom(isAuthLoadingAtom)

  const attemptLogin = async (privateKey: string) => {
    try {
      setAuthIsLoading(true)

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
      setAuthIsLoading(false)
    }
  }

  const attemptLogout = async () => {
    await logout()
    setAccount(undefined)
  }

  const check = async () => {
    try {
      setAuthIsLoading(true)

      const account = await getSession()
      setAccount(account)
    } catch (ex) {
      console.error(ex)
    } finally {
      setAuthIsLoading(false)
    }
  }

  return { attemptLogin, attemptLogout, check }
}
