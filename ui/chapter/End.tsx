'use client'

import { Button } from 'shared'
import { useTranslations } from 'hooks'
import { Modal, useModalContext } from 'providers/ModalProvider'

export default function End({
  image,
  lang,
  children,
  direction,
}: {
  children: any
  image: string
  lang: string
  direction?: string
}) {
  const t = useTranslations(lang)
  const modals = useModalContext()

  function handleCreateClick() {
    modals.open(Modal.Progress)
  }

  const handleClick = () => {
    modals.open(Modal.Progress)
  }

  return (
    <div
      className="flex w-screen grow justify-center bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="left-unset absolute bottom-0 ml-auto w-full bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] p-4 pb-12 md:p-16">
        <div className="md:max-w-[500px]">
          {children}
          <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
            <Button onClick={handleClick} size="small">
              {t('chapter_one.end.save')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
