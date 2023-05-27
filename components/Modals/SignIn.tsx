'use client'

import Modal from './Modal'
import SignIn from 'components/SignIn'
import { useLang } from 'hooks'
import Icon from 'shared/Icon'

export default function LoginModal({ onClose, state }) {
  const lang = useLang()

  if (state.open) {
    document.body.classList.add('overflow-y-hidden')
  }

  return (
    <Modal active={state.open} onRequestClose={onClose}>
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>

      <div className="sm:p-[30px]">
        <SignIn lang={lang} onSignIn={onClose} />
      </div>
    </Modal>
  )
}
