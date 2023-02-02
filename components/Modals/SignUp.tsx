'use client'

import Avatar from 'components/Avatar'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import CloseIcon from 'public/assets/icons/close.svg'
import { CopyButton } from 'shared'
import {
  loginUser,
  setUserAvatar,
  setUserRegistered,
  createUser,
} from 'lib/user'
import { useUser } from 'hooks'

export default function SignUpModal({ open, onClose, onConfirm }) {
  const { user, isRegistered } = useUser()
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
    if (!isRegistered) {
      createUser(null)
    }
  }, [isRegistered])

  return (
    <Modal
      isOpen={open}
      className="absolute top-1/2 left-1/2 w-[32rem] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-back p-5 text-white shadow-lg outline-none"
      contentLabel="Example Modal"
    >
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <h2 className="mb-4 text-xl font-bold">Want to save your progress?</h2>
      <p className="mb-5 text-sm">
        Copy and store a simple code to save and load your progress on any
        device and browser. If you already have a code, load your progress here.
      </p>

      <h2 className="mb-4 text-xl font-bold">Choose an avatar</h2>

      <div className="mb-5 flex cursor-pointer justify-between">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="flex flex-col items-center" key={i}>
            <Avatar
              avatar={i}
              size={80}
              onClick={() => setAvatar(i)}
              classes={`h-20 w-20 rounded-full ${
                avatar === i ? 'border-2 border-blue-500' : ''
              }`}
            />
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-bold">Back up your personal code</h2>

      <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
        <code className="mb-2 whitespace-pre-wrap break-all">
          {user ? user.privateKey.toString(16) : ''}
        </code>
        <CopyButton content={user ? user.privateKey.toString(16) : ''}>
          Copy
        </CopyButton>
      </pre>

      <p className="mt-5 text-sm">
        All set? Code copied and backed-up? Make sure your do, as it can’t be
        recovered if you lose it.
      </p>
      <button
        onClick={confirm}
        className="mt-4 w-full rounded-md border border-white px-4 py-2 text-white"
      >
        I’ve copied and backed up my code
      </button>
    </Modal>
  )
}
