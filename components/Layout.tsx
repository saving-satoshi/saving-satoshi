'use client'

import { useModalContext } from 'providers/ModalProvider'

import AccountModal from 'components/Modals/Account'
import SignUpModal from 'components/Modals/SignUp'
import LoginModal from 'components/Modals/Login'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { modals, close } = useModalContext()

  return (
    <>
      {children}
      <>
        <LoginModal open={modals['login']} onClose={() => close('login')} />
        <SignUpModal open={modals['signup']} onClose={() => close('signup')} />
        <AccountModal
          open={modals['account']}
          onClose={() => close('account')}
        />
      </>
    </>
  )
}
