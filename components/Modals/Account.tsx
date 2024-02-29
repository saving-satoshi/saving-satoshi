'use client'

import Modal from 'components/Modals/Modal'
import Icon from 'shared/Icon'
import Avatar from 'components/Avatar'
import { Button, Loader } from 'shared'
import { useTranslations, useLang } from 'hooks'
import { ToggleSwitch } from 'ui'
import { useState } from 'react'
import clsx from 'clsx'
import { useAuthContext } from 'contexts/AuthContext'
import { useProgressContext } from 'contexts/ProgressContext'

export default function AccountModal({ onClose, state }) {
  const lang = useLang()
  const { account, isLoading: isAccountLoading, logout } = useAuthContext()
  const { isLoading: isProgressLoading } = useProgressContext()
  const t = useTranslations(lang)
  const [showPrivKey, setShowPrivKey] = useState(false)

  const isLoaded = !isAccountLoading && !isProgressLoading

  const handleSignOut = async () => {
    const logoutSuccess = await logout()

    onClose()
  }

  const handleShowPrivKey = () => {
    setShowPrivKey(!showPrivKey)
  }

  if (!isLoaded || !account) {
    return null
  }

  return (
    <Modal active={state.open} onRequestClose={onClose}>
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>

      {!isLoaded && (
        <div className="sm:p-[30px]">
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}
      {isLoaded && (
        <div className="sm:p-[30px]">
          <Avatar avatar={account.avatar} size={75} />
          <div className="mb-[15px] mt-[30px]">
            <h2 className="mb-1.5 text-2xl font-bold">
              {t('modal_logout.heading')}
            </h2>
            <p className="text-lg">{t('modal_logout.paragraph_one')}</p>
          </div>

          <h2 className="mb-4 text-xl font-bold">Your Private Key</h2>
          <>
            <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
              {account.private_key && (
                <>
                  <code className="whitespace-pre-wrap break-all text-base">
                    {account.private_key.toUpperCase()}
                  </code>
                </>
              )}
            </pre>
          </>

          <div className="mb-[15px] flex flex-col items-start gap-2">
            <p className="text-lg">Show Private Key</p>
            <div className="flex flex-row items-center gap-2">
              <ToggleSwitch
                checked={showPrivKey}
                onChange={handleShowPrivKey}
              />
              <pre className="whitespace-normal break-all border-2 border-dotted border-white/25 p-2">
                <span
                  className={clsx({
                    'select-none blur-sm': !showPrivKey,
                  })}
                >
                  {account.private_key}
                </span>
              </pre>
            </div>
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
