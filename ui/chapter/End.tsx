'use client'

import { Button } from 'shared'
import { useSaveAndReturn, useTranslations } from 'hooks'
import { Modal, useModalContext } from 'providers/ModalProvider'
import SignUpModal from 'components/Modals/SignUp'
import { useAuthContext } from 'providers/AuthProvider'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export default function End({
  image,
  lang,
  children,
  direction,
}: {
  children: any
  image: string
  lang: string
  direction: 'left' | 'right'
}) {
  const t = useTranslations(lang)
  const { account } = useAuthContext()
  const saveAndReturn = useSaveAndReturn()

  const [modalOpen, setModalOpen] = useState(false)

  const handleSignUpComplete = () => {
    saveAndReturn()
  }

  const handleClick = () => {
    if (!account) {
      setModalOpen(true)
    } else {
      saveAndReturn()
    }
  }

  return (
    <div>
      <Image
        src={image}
        alt={t('chapter_two.title')}
        fill
        className="relative -z-10 object-cover object-bottom"
      />
      <div className="absolute bottom-0 ml-auto w-full bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] p-4 pb-12 text-left md:p-16">
        <div
          className={clsx('max-w-[500px]', {
            'float-left': direction === 'left',
            'float-right': direction === 'right',
          })}
        >
          {children}
          <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
            <Button onClick={handleClick} size="small">
              {!account && t('chapter_one.end.save')}
              {account && t('shared.next')}
            </Button>
          </div>
        </div>
      </div>
      <SignUpModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSignUpComplete={handleSignUpComplete}
      />
    </div>
  )
}
