'use client'

import SignUpModal from 'components/Modals/SignUp'
import { Button } from 'ui'
import { useState } from 'react'
import { setUserProgress } from 'lib/user'
import { getUserLessonStatus } from 'lib/content'

export default function End({
  title,
  description,
  image,
  checkpoint,
}: {
  title?: string
  description?: string
  image: string
  checkpoint: {
    chapter: any
    lesson: any
    next: string
  }
}) {
  const [openModal, setOpenModal] = useState(false)

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
    const status = getUserLessonStatus(checkpoint.chapter, checkpoint.lesson)
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
        <h1 className="text-4xl font-bold text-white">
          {title || 'You did it!!!'}
        </h1>
        <p className="text-justify font-nunito text-xl text-white">
          {description || ''}
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
