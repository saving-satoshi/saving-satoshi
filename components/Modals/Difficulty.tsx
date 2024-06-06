'use client'

import Modal from './Modal'
import SignIn from 'components/SignIn'
import { useLang } from 'hooks'
import Icon from 'shared/Icon'
import DifficultyChoice from 'components/DifficultyChoice'

export default function DifficultyModal({ onClose, state }) {
  const lang = useLang()

  return (
    <Modal active={state.open} onRequestClose={onClose}>
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>

      <div className="sm:p-[30px]">
        <DifficultyChoice lang={lang} closeModal={onClose} />
      </div>
    </Modal>
  )
}
