'use client'

import { useState } from 'react'
import UserIcon from 'public/assets/icons/avatar.svg'
import Avatar from 'components/Avatar'
import { useHasMounted } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'
import { useModalContext } from 'providers/ModalProvider'

export default function UserButton() {
  const hasMounted = useHasMounted()
  const modals = useModalContext()

  const { account, isLoading } = useAuthContext()

  const handleClick = (name: string) => {
    modals.show(name)
  }

  return (
    <div>
      <div className="ml-4 h-10 w-10">
        {!hasMounted || (isLoading && <div />)}
        {hasMounted && !isLoading && (
          <>
            {account && (
              <button
                onClick={() => handleClick('account')}
                aria-label="profile"
                className="text-grey-300 flex h-10 cursor-pointer items-center"
              >
                <Avatar avatar={account.avatar} size={30} />
              </button>
            )}
            {!account && (
              <button
                onClick={() => handleClick('login')}
                aria-label="profile"
                className="text-grey-300 h-10 cursor-pointer"
              >
                <UserIcon />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
