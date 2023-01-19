'use client'

import { Avatar } from 'components/ui/Avatar'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
const crypto = require('crypto')
const Secp256k1 = require('@lionello/secp256k1-js')
import Close from 'public/assets/icons/close.svg'
import { getUser, loginUser, setUserAvatar, setUserRegistered } from 'lib/user'

export const SignUpModal = (props) => {
  const [user, setUser] = useState(null)

  let [copied, setCopied] = useState(false)
  let [avatar, setAvatar] = useState(1)

  function saveLocally() {
    setUserAvatar(avatar)
    loginUser()
  }

  function copy() {
    navigator.clipboard.writeText(user.privateKey.toString(16))
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  function confirm() {
    saveLocally()
    setUserRegistered()

    props.onConfirm()
  }

  useEffect(() => {
    setUser(getUser())
  }, []);

  return (
    <Modal
      isOpen={props.open}
      className="top-1/2 left-1/2 outline-none p-5 transform -translate-x-1/2 -translate-y-1/2 absolute w-[32rem] rounded-lg shadow-lg bg-back text-white"
      contentLabel="Example Modal">

        <div className="float-right flex justify-end">
          <button onClick={props.onClose} aria-label="Close">
            <Close className="h-6 w-6" />
          </button>
        </div>

      <h2 className="mb-4 text-xl font-bold">Want to save your progress?</h2>
      <p className="mb-5 text-sm">
        Copy and store a simple code to save and load your progress on any
        device and browser. If you already have a code, load your progress
        here.
      </p>

      <h2 className="mb-4 text-xl font-bold">Choose an avatar</h2>

      <div className="mb-5 flex cursor-pointer justify-between">
        {[1, 2, 3, 4, 5].map((i) => (
        <div className="flex flex-col items-center" key={i}>
          <Avatar
            avatar={i}
            size={80}
            onClick={() => setAvatar(i)}
            classes={`h-20 w-20 rounded-full ${avatar === i ? 'border-2 border-blue-500' : ''}`}
          />
        </div>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-bold">Back up your personal code</h2>

      <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
        <code className="whitespace-pre-wrap break-all">{user ? user.privateKey.toString(16) : ''}</code>
        {copied ? (
          <button
            className="mt-4 w-full rounded-md bg-green-500 px-4 py-2 text-green-800"
            onClick={copy}
          >
            Copied!
          </button>
        ) : (
          <button
            className="mt-4 w-full rounded-md bg-black  bg-opacity-25 px-4 py-2 text-white"
            onClick={copy}
          >
            Copy
          </button>
        )}
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
