'use client'

import { Modal, useModalContext } from 'providers/ModalProvider'

import AccountModal from 'components/Modals/Account'
import SignUpModal from 'components/Modals/SignUp'
import SignInModal from 'components/Modals/SignIn'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { modals, close } = useModalContext()

  return (
    <>
      {children}
      <>
        <SignInModal
          open={modals[Modal.SignIn]}
          onClose={() => close(Modal.SignIn)}
        />
        <SignUpModal
          open={modals[Modal.SignUp]}
          onClose={() => close(Modal.SignUp)}
        />
        <AccountModal
          open={modals[Modal.Account]}
          onClose={() => close(Modal.Account)}
        />
      </>
    </>
  )
}
