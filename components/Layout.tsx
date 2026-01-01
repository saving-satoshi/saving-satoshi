'use client'

import AccountModal from 'components/Modals/Account'
import SignInModal from 'components/Modals/SignIn'
import SignUpModal from 'components/Modals/SignUp'
import HelpModal from 'components/Modals/Help'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { useAuthFunctions } from 'state/AuthFunctions'
import { useFeatureFunctions } from 'state/FeatureFunctions'
import { useModalFunctions } from 'state/ModalFunctions'
import { loadProgressAtom } from 'state/progressState'
import { Modal, modalsAtom } from 'state/state'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [modals] = useAtom(modalsAtom)
  const { close } = useModalFunctions()
  const { check } = useAuthFunctions()
  const { init: initFeatures } = useFeatureFunctions()
  const loadProgress = useSetAtom(loadProgressAtom)

  useEffect(() => {
    const initialDataLoad = async () => {
      await check()
      await initFeatures()
      await loadProgress()
    }
    initialDataLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <HelpModal state={modals[Modal.Help]} onClose={() => close(Modal.Help)} />
    </>
  )
}
