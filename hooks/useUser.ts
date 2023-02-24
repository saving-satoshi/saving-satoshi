'use client'

import useLocalStorageState from 'use-local-storage-state'

interface User {
  publicKey: { x: string; y: string }
  privateKey: any // TODO: figure out the proper type for this
  avatar: number
  registered: boolean
  progress: {
    chapter: string
    lesson: string
  }
}

export const useUser = () => {
  const [user] = useLocalStorageState<User>('SavingSatoshiUser')
  const [isLoggedIn] = useLocalStorageState<boolean>('SavingSatoshiLoggedIn', {
    defaultValue: false,
  })

  return { user, isLoggedIn, isRegistered: user?.registered }
}
