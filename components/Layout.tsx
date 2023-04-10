'use client'

import { useModalContext } from 'providers/ModalProvider'

import LoginModal from './Modals/Login'
import AccountModal from 'components/Modals/Account'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { modals, close } = useModalContext()

  return (
    <>
      {children}
      <>
        <LoginModal open={modals['login']} onClose={() => close('login')} />
        <AccountModal
          open={modals['account']}
          onClose={() => close('account')}
        />
      </>
    </>
  )
}
