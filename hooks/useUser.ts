'use client'

import useLocalStorageState from 'use-local-storage-state'
import { User } from 'types'

export const useUser = () => {
  const [user] = useLocalStorageState<User>('SavingSatoshiUser')
  const [isLoggedIn] = useLocalStorageState<boolean>('SavingSatoshiLoggedIn', {
    defaultValue: false,
  })

  return { user, isLoggedIn, isRegistered: user?.registered }
}
