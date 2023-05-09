'use client'

import { Modal, useModalContext } from 'providers/ModalProvider'

import AccountModal from 'components/Modals/Account'
import SignInModal from 'components/Modals/SignIn'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { modals, close } = useModalContext()

  return (
    <>
      {children}
      <SignInModal
        state={modals[Modal.SignIn]}
        onClose={() => close(Modal.SignIn)}
      />
      <AccountModal
        state={modals[Modal.Account]}
        onClose={() => close(Modal.Account)}
      />
    </>
  )
}
