'use client'

import ReactModal from 'react-modal'
import CloseIcon from 'public/assets/icons/close.svg'
import SignIn from 'components/SignIn'
import { useLang } from 'hooks'

export default function LoginModal({ onClose, open }) {
  const lang = useLang()

  function handleCloseClick() {
    onClose()
  }

  return (
    <ReactModal
      isOpen={open}
      overlayClassName="fixed inset-0 bg-overlayColor"
      className="fixed inset-0 top-1/2 left-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2 transform bg-back p-5  pt-10 font-nunito text-white shadow-lg outline-none sm:absolute sm:h-fit sm:w-[550px] sm:rounded-lg sm:pt-5"
      contentLabel="Login Modal"
      onRequestClose={onClose}
    >
      <div className="float-right flex justify-end">
        <button onClick={handleCloseClick} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="sm:p-[30px]">
        <SignIn lang={lang} onSignIn={onClose} />
      </div>
    </ReactModal>
  )
}
