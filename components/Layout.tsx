'use client'

import { Modal, useModalContext } from 'contexts/ModalContext'

import AccountModal from 'components/Modals/Account'
import SignInModal from 'components/Modals/SignIn'
import SignUpModal from 'components/Modals/SignUp'
import { useEffect } from 'react'
import { useAuthFunctions } from 'state/AuthFunctions'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { modals, close } = useModalContext()
  const { check } = useAuthFunctions()

  // Check if the user is authenticated
  useEffect(() => {
    check()
  }, [check])

  return (
    <>
      {children}
      <SignInModal
        state={modals[Modal.SignIn]}
        onClose={() => close(Modal.SignIn)}
      />
      <SignUpModal
        state={modals[Modal.SignUp]}
        onClose={() => close(Modal.SignUp)}
      />
      <AccountModal
        state={modals[Modal.Account]}
        onClose={() => close(Modal.Account)}
      />
    </>
  )
}
