'use client'

import SignUpModal from 'components/Modals/SignUp'
import { Button } from 'ui'
import { useState } from 'react'
import { setUserProgress } from 'lib/user'
import { useStatus, useTranslations } from 'hooks'

export default function End({
  title,
  description,
  image,
  checkpoint,
  lang,
}: {
  title?: string
  description?: string
  image: string
  checkpoint: {
    chapter: any
    lesson: any
    next: string
  }
  lang: string
}) {
  const t = useTranslations(lang)
  const [openModal, setOpenModal] = useState(false)
  const status = useStatus(checkpoint.chapter, checkpoint.lesson)

  function onSaveProgress() {
    saveProgressLocally()
    setOpenModal(false)

    window.location.href = checkpoint.next
  }

  function onContinue() {
    saveProgressLocally()

    window.location.href = checkpoint.next
  }

  function saveProgressLocally() {
    if (!status.completed) {
      setUserProgress(checkpoint.chapter, checkpoint.lesson)
    }
  }

  return (
    <div
      className="flex w-screen grow justify-center bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* bottom left */}
      <div className="left-unset absolute bottom-10 ml-auto w-11/12 bg-[var(--back)] p-4 sm:left-10 sm:w-1/2 sm:bg-transparent lg:w-1/3">
        <h1 className="text-4xl font-bold text-white">{t(title)}</h1>
        <p className="text-justify font-nunito text-xl text-white">
          {t(description)}
        </p>

        <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
          <Button size="small" onClick={() => setOpenModal(true)}>
            Save my progress
          </Button>
          {/* TODO */}
          <Button size="small" onClick={onContinue}>
            Continue without saving
          </Button>
        </div>
      </div>
      <SignUpModal
        onConfirm={onSaveProgress}
        onClose={() => setOpenModal(false)}
        open={openModal}
      />
    </div>
  )
}
