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
  const [currentLocale] = useLocalStorageState<number>(
    'SavingSatoshiCurrentLocale',
    {
      defaultValue: 0,
    }
  )

  return { user, isLoggedIn, currentLocale, isRegistered: user?.registered }
}
