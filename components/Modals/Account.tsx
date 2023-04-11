'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import Secp256k1 from '@lionello/secp256k1-js'
import CloseIcon from 'public/assets/icons/close.svg'
import Avatar from 'components/Avatar'
import { Button, CopyButton, Loader } from 'shared'
import { useTranslations, useLang } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import Account from './Account'

export default function LoginModal({ onClose, open }) {
  const lang = useLang()
  const { account, isLoading: isAccountLoading, logout } = useAuthContext()
  const { isLoading: isProgressLoading } = useProgressContext()
  const t = useTranslations(lang)

  const isLoaded = !isAccountLoading && !isProgressLoading

  const handleSignOut = async () => {
    const logoutSuccess = await logout()

    onClose()
  }

  function handleCloseClick() {
    onClose()
  }

  if (!isLoaded || !account) {
    return
  }

  return (
    <Modal
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

      {!isLoaded && (
        <div className="sm:p-[30px]">
          <Loader />
        </div>
      )}
      {isLoaded && (
        <div className="sm:p-[30px]">
          <Avatar avatar={account.avatar} size={75} />
          <div className="my-[30px]">
            <h2 className="mb-1.5 text-2xl font-bold">
              {t('modal_logout.heading')}
            </h2>
            <p className="text-lg">{t('modal_logout.paragraph_one')}</p>
          </div>

          <div className="mt-auto flex items-center">
            <button
              onClick={handleSignOut}
              className="w-full border-2 py-2.5 text-xl text-white"
            >
              {t('modal_logout.signout')}
            </button>
          </div>
        </div>
      )}
    </Modal>
  )
}
