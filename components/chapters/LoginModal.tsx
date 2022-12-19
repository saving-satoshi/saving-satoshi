'use client'

import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import crypto from 'crypto';
import Secp256k1 from '@lionello/secp256k1-js';

export const LoginModal = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [userPrivateKey, setPrivateKey] = useState('');
  const [user, setUser] = useState<any>({});

  function loadProgress() {
    const privateKey = Secp256k1.uint256(Buffer.from(userPrivateKey, 'hex'), 16)
    const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey);

    let user: any = window.localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)

      if (user.publicKey.x === publicKey.x && user.publicKey.y === publicKey.y) {
        window.localStorage.setItem('loggedIn', "true");
        setUser(user);
        setLoaded(true);
      } else {
        alert('Invalid private key')
      }
    }
  }

  return (
    <Modal
      isOpen={props.open}
      className="top-1/2 left-1/2 outline-none p-5 transform -translate-x-1/2 -translate-y-1/2 absolute w-[32rem] rounded-lg shadow-lg bg-[var(--back)] text-white"
      contentLabel="Login Modal"
    >
      <div className="float-right flex justify-end">
        <button onClick={props.onClose}>
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

      <div className="p-4">
      {!loaded ? (
        <>
          <h2 className="mb-4 text-3xl font-bold">Load your progress</h2>
          <p className="mb-5 text-xl">
            Enter your personal code below to restore your chapter and challenge progress, as well as your avatar. <a href="#" className='text-white underline'>No code yet?</a>
          </p>

          <div className="flex flex-col justify-between">
            <div className="flex w-full">
              <input
                className="bg-transparent outline-none text-white border-dotted border-white border-2 p-1 w-full text-lg"
                type="text"
                placeholder="Enter your code"
                value={userPrivateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </div>
            <div className="flex w-full mt-4">
              <button onClick={loadProgress} className="border-white border-2 w-full p-1 text-xl">Load my progress</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Image
            alt="avatar"
            src={`/assets/avatars/${user.avatar}.png`}
            width={80}
            height={80}
            className="rounded-full mb-2"
          />
          <h2 className="mb-2 text-3xl font-bold">Progress loaded</h2>
          <p className="mb-5 text-xl">
            {`You're all set to continue with Chapter ${user.progress.chapter}, Challenge ${user.progress.lesson}.`}
          </p>

          <button onClick={props.onLogin} className="border-white border-2 w-full p-1 text-xl">Continue</button>
        </>
      )}
      </div>
    </Modal>
  )
}
