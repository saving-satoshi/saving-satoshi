'use client'

import Modal from 'components/Modals/Modal'
import Icon from 'shared/Icon'
import Avatar from 'components/Avatar'
import { Loader } from 'shared'
import { useTranslations, useLang } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'

export default function LoginModal({ onClose, state }) {
  const lang = useLang()
  const { account, isLoading: isAccountLoading, logout } = useAuthContext()
  const { isLoading: isProgressLoading } = useProgressContext()
  const t = useTranslations(lang)

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
