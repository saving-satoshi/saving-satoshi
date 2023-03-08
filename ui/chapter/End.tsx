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
      <div className="left-unset absolute bottom-0 ml-auto w-full bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] p-4">
        <div className="p-4 md:left-10 md:w-1/2 lg:w-1/3">
          <h1 className="text-4xl font-bold text-white">{t(title)}</h1>
          <p className="text-justify font-nunito text-xl text-white">
            {t(description)}
          </p>

          <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
            <Button size="small" onClick={() => setOpenModal(true)}>
              {t('end.save')}
            </Button>
            {/* TODO */}
            <Button size="small" onClick={onContinue}>
              {t('end.next')}
            </Button>
          </div>
        </div>
      </div>
      <SignUpModal
        lang={lang}
        onConfirm={onSaveProgress}
        onClose={() => setOpenModal(false)}
        open={openModal}
      />
    </div>
  )
}
