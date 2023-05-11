'use client'

import { Modal, useModalContext } from 'providers/ModalProvider'

import AccountModal from 'components/Modals/Account'
import SignInModal from 'components/Modals/SignIn'
import SignUpModal from 'components/Modals/SignUp'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { modals, close } = useModalContext()

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
