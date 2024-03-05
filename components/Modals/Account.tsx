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
  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isLoaded = !isAccountLoading && !isProgressLoading

  const handleSignOut = async () => {
    const logoutSuccess = await logout()

    onClose()
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
          <h2 className="mb-4 text-xl font-bold">
            {t('modal_logout.private_key')}
          </h2>
          <>
            <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
              <>
                <code className="mb-2 whitespace-pre-wrap break-all text-base">
                  {account.private_key.toUpperCase()}
                </code>
                <Button
                  round
                  size="tiny"
                  style="w-full"
                  onClick={() => copy(account.private_key)}
                >
                  {copied ? t('shared.copy_acknowledged') : t('shared.copy')}
                </Button>
              </>
            </pre>
          </>
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
