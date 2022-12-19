'use client'

import { useState } from 'react'
import Modal from 'react-modal'

export const SaveProgressButton = (props) => {
  const [modalIsOpen, setIsOpen] = useState(props.open)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function randomHex(length) {
    let result = ''
    let characters = '0123456789abcdef'
    let charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#32455D',
      color: '#fff',
      width: 550,
    },
  }

  const [code, _] = useState(randomHex(64))

  let [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(code)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <>
      <button onClick={openModal}>Save Progress</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="float-right flex justify-end">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
          <div className="flex flex-col items-center">
            <img
              src={'/assets/avatars/1.png'}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={'/assets/avatars/2.png'}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={'/assets/avatars/3.png'}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={'/assets/avatars/4.png'}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={'/assets/avatars/5.png'}
              alt="avatar"
              className="h-20 w-20 rounded-full"
            />
          </div>
        </div>

        <h2 className="mb-4 text-xl font-bold">Back up your personal code</h2>

        <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
          <code className="whitespace-pre-wrap break-all">{code}</code>
          {/* <button className="bg-[#233346] text-white rounded-md px-4 py-2 mt-4 w-full">
            Copy
          </button> */}
          {copied ? (
            <button
              className="mt-4 w-full rounded-md bg-green-500 px-4 py-2 text-green-800"
              onClick={copy}
            >
              Copied!
            </button>
          ) : (
            <button
              className="mt-4 w-full rounded-md bg-[#233346] px-4 py-2 text-white"
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
          onClick={copy}
          className="mt-4 w-full rounded-md border border-white px-4 py-2 text-white"
        >
          I’ve copied and backed up my code
        </button>
      </Modal>
    </>
  )
}
