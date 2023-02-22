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
      className="absolute top-1/2 left-1/2 w-[32rem] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-back p-5 font-nunito text-white shadow-lg outline-none"
      contentLabel="Login Modal"
    >
      <div className="float-right flex justify-end">
        <button onClick={handleCloseClick} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4">
        {!isLoggedIn && (
          <>
            <Avatar avatar={user && user.avatar} size={80} />
            <h2 className="mb-4 mt-5 text-3xl font-bold">
              {t('login.heading')}
            </h2>
            <p className="mb-5">
              {t('login.paragraph_one')}{' '}
              <a href="#" className="text-white underline">
                {t('login.clear')}
              </a>
            </p>

            <div className="flex flex-col justify-between">
              <div className="flex w-full">
                <input
                  className="w-full border-2 border-dotted border-white bg-transparent p-1 font-space-mono text-lg text-white outline-none"
                  type="text"
                  placeholder={t('login.prompt')}
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
                  {t('login.confirm')}
                </Button>
              </div>
              <div className="mt-4 mb-4 flex w-full">
                {userPrivateKey && !checkValidKey() && (
                  <div className="flex items-center">
                    <WarningIcon className="fill-red-500" />
                    <p className="ml-2 text-sm text-red-500">
                      {t('login.paragraph_two')}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-auto flex items-center">
                <p>
                  {t('login.paragraph_three')}{' '}
                  <button
                    onClick={handleClearProgressClick}
                    className="underline"
                  >
                    {t('login.quit')}
                  </button>
                  .
                </p>
              </div>
            </div>
          </>
        )}
        {isLoggedIn && !willShowProgressRestored && (
          <>
            <Avatar avatar={user.avatar} size={80} />
            <h2 className="mt-2 mb-2 text-3xl font-bold">Load your progress</h2>
            <p className="mb-5">
              Your progress is stored in this browser. Use the code below to
              restore it after taking a break.
            </p>

            <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
              <code className="mb-2 whitespace-pre-wrap break-all">
                {user.privateKey}
              </code>
              <CopyButton content={user.privateKey}>Copy</CopyButton>
            </pre>
            <div className="mt-auto flex items-center">
              <button
                onClick={handleSignOutClick}
                className="w-full border-2 border-red-500 bg-red-500 p-1 text-xl text-white"
              >
                Sign out
              </button>
            </div>
          </>
        )}

        {isLoggedIn && willShowProgressRestored && (
          <>
            <Avatar avatar={user.avatar || 1} size={80} />
            <h2 className="mt-2 mb-2 text-3xl font-bold">Progress loaded</h2>
            <p className="mb-5">
              {`You're all set to continue with Chapter ${user.progress.chapter}, Challenge ${user.progress.lesson}.`}
            </p>

            <Button
              full
              size="small"
              style="outline"
              onClick={handleContinueClick}
              classes="border-white border-2 p-1 text-xl"
            >
              Continue
            </Button>
          </>
        )}
      </div>
    </Modal>
  )
}
