'use client'

import Icon from 'shared/Icon'
import Avatar from 'components/Avatar'
import { useHasMounted } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'
import { Modal, useModalContext } from 'providers/ModalProvider'

export default function UserButton() {
  const modals = useModalContext()

  const { account, isLoading } = useAuthContext()

  const handleClick = (name: Modal) => {
    modals.open(name)
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {isLoading && <Icon icon="avatar" className="h-[30px] w-[30px]" />}
      {!isLoading && (
        <>
          {account && (
            <button
              onClick={() => handleClick(Modal.Account)}
              aria-label="profile"
              className="text-grey-300 flex h-full w-full cursor-pointer items-center justify-center"
            >
              <Avatar avatar={account.avatar} size={30} />
            </button>
          )}
          {!account && (
            <button
              onClick={() => handleClick(Modal.SignIn)}
              aria-label="profile"
              className="text-grey-300 flex h-full w-full cursor-pointer items-center justify-center"
            >
              <Icon icon="avatar" className="h-[30px] w-[30px]" />
            </button>
          )}
        </>
      )}
    </div>
  )
}
