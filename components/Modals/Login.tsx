'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import Secp256k1 from '@lionello/secp256k1-js'
import CloseIcon from 'public/assets/icons/close.svg'
import WarningIcon from 'public/assets/icons/warning.svg'
import Avatar from 'components/Avatar'
import { Button, CopyButton } from 'shared'
import { loginUser, logoutUser, clearUser } from 'lib/user'
import { useUser, useTranslations, useLang } from 'hooks'

export default function LoginModal({ onClose, onLogin, open }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const [willShowProgressRestored, setWillShowProgressRestored] =
    useState(false)
  const [userPrivateKey, setPrivateKey] = useState('')
  const { user, isLoggedIn } = useUser()

  function handleLoadProgressClick() {
    const privateKey = Secp256k1.uint256(Buffer.from(userPrivateKey, 'hex'), 16)
    const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)

    if (user) {
      if (
        user.publicKey.x === publicKey.x &&
        user.publicKey.y === publicKey.y
      ) {
        loginUser()
        setWillShowProgressRestored(true)
      } else {
        alert('Invalid private key')
      }
    }
  }

  function checkValidKey() {
    if (userPrivateKey.length !== 64) return false

    if (user) {
      const privateKey = Secp256k1.uint256(
        Buffer.from(userPrivateKey, 'hex'),
        16
      )
      const publicKey =
        Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)

      if (
        user.publicKey.x === publicKey.x &&
        user.publicKey.y === publicKey.y
      ) {
        return true
      }
    }

    return false
  }

  function handleClearProgressClick() {
    clearUser()
    onClose()
  }

  function handleSignOutClick() {
    logoutUser()
    onClose()
  }

  function handleContinueClick() {
    onLogin()
    setWillShowProgressRestored(false)
  }

  function handleCloseClick() {
    onClose()
    setWillShowProgressRestored(false)
  }

  return (
    <Modal
      isOpen={open}
      overlayClassName="fixed inset-0 bg-overlayColor"
      className="fixed inset-0 top-1/2 left-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2 transform bg-back p-5  pt-10 font-nunito text-white shadow-lg outline-none sm:absolute sm:h-fit sm:w-[550px] sm:rounded-lg sm:pt-5"
      contentLabel="Login Modal"
     >
      <div className="float-right flex justify-end">
        <button onClick={handleCloseClick} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="sm:p-[30px]">
        {!isLoggedIn && (
          <>
            <Avatar avatar={user && user.avatar} size={80} />
            <h2 className="mb-4 mt-5 text-3xl font-bold">
              {t('modal_login.heading')}
            </h2>
            <p className="mb-5">
              {t('modal_login.paragraph_one')}{' '}
              <a href="#" className="text-white underline">
                {t('modal_login.clear')}
              </a>
            </p>

            <div className="flex flex-col justify-between">
              <div className="flex w-full">
                <input
                  className="w-full border-2 border-dotted border-white bg-transparent p-1 font-space-mono text-lg text-white outline-none"
                  type="text"
                  placeholder={t('modal_login.prompt')}
                  value={userPrivateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                />
              </div>
              <div className="mt-4 flex w-full">
                <Button
                  full
                  size="small"
                  style="outline"
                  disabled={!userPrivateKey || !checkValidKey()}
                  onClick={handleLoadProgressClick}
                  classes={`border-white border-2 p-1 text-xl md:w-full ${
                    !userPrivateKey && 'opacity-50'
                  }`}
                >
                  {t('modal_login.confirm')}
                </Button>
              </div>
              <div className="mt-4 mb-4 flex w-full">
                {userPrivateKey && !checkValidKey() && (
                  <div className="flex items-center">
                    <WarningIcon className="fill-red-500" />
                    <p className="ml-2 text-sm text-red-500">
                      {t('modal_login.paragraph_two')}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-auto flex items-center">
                <p>
                  {t('modal_login.paragraph_three')}{' '}
                  <button
                    onClick={handleClearProgressClick}
                    className="underline"
                  >
                    {t('modal_login.quit')}
                  </button>
                  .
                </p>
              </div>
            </div>
          </>
        )}
        {isLoggedIn && !willShowProgressRestored && (
          <>
            <Avatar avatar={user.avatar} size={75} />
            <div className="my-[30px]">
              <h2 className="mb-1.5 text-2xl font-bold">
                {t('modal_logout.heading')}
              </h2>
              <p className="text-lg">{t('modal_logout.paragraph_one')}</p>
            </div>
            <pre className="mb-[30px] flex flex-col rounded-md border-2 border-dotted border-white/25 p-2.5">
              <code className="mb-2 whitespace-pre-wrap break-all">
                {user.privateKey}
              </code>
              <CopyButton style="dark" content={user.privateKey}>
                {t('shared.copy')}
              </CopyButton>
            </pre>
            <div className="mt-auto flex items-center">
              <button
                onClick={handleSignOutClick}
                className="w-full border-2 py-2.5 text-xl text-white"
              >
                {t('modal_logout.signout')}
              </button>
            </div>
          </>
        )}

        {isLoggedIn && willShowProgressRestored && (
          <>
            <Avatar avatar={user.avatar || 1} size={80} />
            <h2 className="mt-2 mb-2 text-3xl font-bold">
              {t('modal_login.success')}
            </h2>
            <p className="mb-5">
              {`${t('modal_login.success_message')} ${
                user.progress.chapter
              }, ${t('shared.challenge')} ${user.progress.lesson}.`}
            </p>

            <Button
              full
              size="small"
              style="outline"
              onClick={handleContinueClick}
              classes="border-white border-2 p-1 text-xl"
            >
              {t('shared.continue')}
            </Button>
          </>
        )}
      </div>
    </Modal>
  )
}
