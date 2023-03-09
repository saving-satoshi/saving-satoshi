'use client'

import Avatar from 'components/Avatar'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import CloseIcon from 'public/assets/icons/close.svg'
import { CopyButton } from 'shared'
import HorizontalScrollView from 'components/HorizontalScrollView'
import {
  loginUser,
  setUserAvatar,
  setUserRegistered,
  createUser,
} from 'lib/user'
import { useUser, useHasMounted, useTranslations, useLang } from 'hooks'
import clsx from 'clsx'

export default function SignUpModal({ open, onClose, onConfirm }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const hasMounted = useHasMounted()
  const { user } = useUser()
  let [avatar, setAvatar] = useState(1)

  function saveLocally() {
    setUserAvatar(avatar)
    loginUser()
  }

  function confirm() {
    saveLocally()
    setUserRegistered()
    onConfirm()
  }

  useEffect(() => {
    if (hasMounted && !user) {
      createUser(null)
    }
  }, [hasMounted, user])

  return (
    <Modal
      isOpen={open}
      overlayClassName="fixed inset-0 bg-overlayColor"
      className="fixed inset-0 top-1/2 left-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto bg-back p-5 pt-10 font-nunito text-white shadow-lg outline-none sm:absolute sm:h-fit sm:w-[550px] sm:rounded-lg sm:pt-5"
      contentLabel="Sign up Modal"
    >
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="sm:p-[30px]">
        <h2 className="mb-4 text-2xl font-bold">{t('modal_signup.heading')}</h2>
        <p className="mb-5 text-lg">{t('modal_signup.paragraph_one')}</p>

        <h2 className="mb-4 text-xl font-bold">
          {t('modal_signup.subheading_one')}
        </h2>

        <HorizontalScrollView>
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar
              key={i}
              avatar={i}
              size={80}
              onClick={() => setAvatar(i)}
              classes={clsx('border-2 h-20 w-20 rounded-full inline-block', {
                'border-white': avatar === i,
                'border-transparent': avatar !== i,
              })}
            />
          ))}
        </HorizontalScrollView>

        <h2 className="mb-4 text-xl font-bold">
          {t('modal_signup.subheading_two')}
        </h2>

        <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
          <code className="mb-2 whitespace-pre-wrap break-all text-base">
            {user ? user.privateKey.toString(16) : ''}
          </code>
          <CopyButton content={user ? user.privateKey.toString(16) : ''}>
            {t('shared.copy')}
          </CopyButton>
        </pre>

        <p className="mt-5 text-base">{t('modal_signup.paragraph_two')}</p>
        <button
          onClick={confirm}
          className="mt-4 w-full rounded-md border border-white px-4 py-2 text-xl text-white"
        >
          {t('modal_signup.confirm')}
        </button>
      </div>
    </Modal>
  )
}
