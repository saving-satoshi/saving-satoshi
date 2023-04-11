'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import Secp256k1 from '@lionello/secp256k1-js'
import CloseIcon from 'public/assets/icons/close.svg'
import Avatar from 'components/Avatar'
import { Button, CopyButton, Input, Loader } from 'shared'
import { useTranslations, useLang } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import { useModalContext } from 'providers/ModalProvider'

export default function LoginModal({ onClose, open }) {
  const lang = useLang()
  const modals = useModalContext()
  const { login } = useAuthContext()
  const t = useTranslations(lang)

  const [loading, setLoading] = useState<boolean>(false)
  const [privateKey, setPrivateKey] = useState<string>('')

  const handleConfirm = async () => {
    try {
      setLoading(true)
      const loginSuccess = await login(privateKey)
      if (loginSuccess) {
        setPrivateKey('')
      }
      onClose()
    } catch (ex) {
      console.error(ex)
    } finally {
      setLoading(false)
    }
  }

  function handleCreateClick() {
    modals.close('login')
    modals.show('signup')
  }

  function handleCloseClick() {
    onClose()
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
      <div className="sm:p-[30px]">
        <h2 className="mb-4 text-3xl font-bold">{t('modal_login.heading')}</h2>
        <p className="mb-5">{t('modal_login.paragraph_one')}</p>

        <div className="flex flex-col justify-between">
          <div className="flex w-full">
            <Input
              type="text"
              name="private_key"
              placeholder={t('modal_login.prompt')}
              value={privateKey}
              onInput={setPrivateKey}
              disabled={loading}
            />
          </div>
          <div className="mt-4 flex w-full">
            <Button
              full
              size="small"
              style="outline"
              disabled={!privateKey || loading}
              onClick={handleConfirm}
              classes={`border-white border-2 p-1 text-xl md:w-full ${
                !privateKey && 'opacity-50'
              }`}
            >
              {loading && <Loader className="h-7 w-7" />}
              {!loading && t('modal_login.confirm')}
            </Button>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button className="underline" onClick={handleCreateClick}>
              {t('modal_login.create_account')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
