'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import crypto from 'crypto';
import Secp256k1 from '@lionello/secp256k1-js';
import Close from 'public/assets/icons/close.svg'
import Warning from 'public/assets/icons/warning.svg'
import { Avatar } from 'components/ui/Avatar';
import { BoxButton } from 'components/ui/BoxButton';
import { getUser, loginUser, isUserLoggedIn, isUserRegistered, clearUser } from 'lib/user'

export const LoginModal = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [userPrivateKey, setPrivateKey] = useState('');
  const [user, setUser] = useState<any>({});
  const [copied, setCopied] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  useEffect(() => {
    setUser(getUser())
    setLoggedIn(isUserLoggedIn())
    setRegistered(isUserRegistered())
    // setLoaded(isUserLoggedIn())
  }, []);

  function loadProgress() {
    const privateKey = Secp256k1.uint256(Buffer.from(userPrivateKey, 'hex'), 16)
    const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey);

    let user: any = getUser()
    if (user) {
      if (user.publicKey.x === publicKey.x && user.publicKey.y === publicKey.y) {
        loginUser()
        setLoggedIn(true)
        setUser(user)
        setLoaded(true)
      } else {
        alert('Invalid private key')
      }
    }
  }

  function checkValidKey() {
    if (userPrivateKey.length !== 64) return false

    const user = getUser()
    if (user) {
      const privateKey = Secp256k1.uint256(Buffer.from(userPrivateKey, 'hex'), 16)
      const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)

      if (user.publicKey.x === publicKey.x && user.publicKey.y === publicKey.y) {
        return true;
      }
    }

    return false;
  }

  function clearProgress() {
    clearUser()

    props.onClearProgress()
    props.onClose();
  }

  function copy() {
    navigator.clipboard.writeText(user.privateKey)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  function signOut() {
    setLoggedIn(false)
    setLoaded(false)
    props.onLogout()
    props.onClose()
  }

  function onContinue() {
    props.onLogin()
    setLoaded(false)
  }

  return (
    <Modal
      isOpen={props.open}
      className="font-nunito top-1/2 left-1/2 outline-none p-5 transform -translate-x-1/2 -translate-y-1/2 absolute w-[32rem] rounded-lg shadow-lg bg-back text-white"
      contentLabel="Login Modal"
    >
      <div className="float-right flex justify-end">
        <button onClick={props.onClose} aria-label="Close">
          <Close className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4">
      {!isLoggedIn && (
        <>
          <Avatar avatar={user.avatar} size={80} />
          <h2 className="mb-4 mt-5 text-3xl font-bold">Load your progress</h2>
          <p className="mb-5">
            Enter your personal code below to restore your chapter and challenge progress, as well as your avatar. <a href="#" className='text-white underline'>No code yet?</a>
          </p>

          <div className="flex flex-col justify-between">
            <div className="flex w-full">
              <input
                className="font-space-mono bg-transparent outline-none text-white border-dotted border-white border-2 p-1 w-full text-lg"
                type="text"
                placeholder="Enter your code"
                value={userPrivateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </div>
            <div className="flex w-full mt-4">
              <BoxButton full size='small' style='outline' disabled={!userPrivateKey || !checkValidKey()} onClick={loadProgress} classes={`border-white border-2 p-1 text-xl md:w-full ${!userPrivateKey && 'opacity-50'}`}>Load my progress</BoxButton>
            </div>
            <div className="flex w-full mt-4 mb-4">
              {userPrivateKey && !checkValidKey() && (
                <div className='flex items-center'>
                  <Warning className="fill-red-500" />
                  <p className="text-red-500 text-sm ml-2">Sorry, that’s not the right code for the progress stored in this browser.</p>
                </div>
              )}
            </div>

            <div className='flex items-center mt-auto'>
                <p>
                  Want to start again? <button onClick={clearProgress} className='underline'>Clear saved progress</button>.
                </p>
            </div>
          </div>
        </>)}
      {isLoggedIn && !loaded && (
        <>
          <Avatar
            avatar={user.avatar}
            size={80}
          />
          <h2 className="mt-2 mb-2 text-3xl font-bold">Load your progress</h2>
          <p className="mb-5">
            Your progress is stored in this browser. Use the code below to restore it after taking a break.
          </p>

        <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
          <code className="whitespace-pre-wrap break-all">{user.privateKey}</code>
          {copied ? (
            <button
              className="mt-4 w-full rounded-md bg-green-500 px-4 py-2 text-green-800"
              onClick={copy}
            >
              Copied!
            </button>
          ) : (
            <button
              className="mt-4 w-full rounded-md bg-black bg-opacity-25 px-4 py-2 text-white"
              onClick={copy}
            >
              Copy
            </button>
          )}
        </pre>
        <div className='flex items-center mt-auto'>
          <button onClick={signOut} className="border-red-500 bg-red-500 border-2 w-full p-1 text-xl text-white">Sign out</button>
        </div>
      </>)}

      {isLoggedIn && loaded && (
        <>
          <Avatar
            avatar={user.avatar || 1}
            size={80}
          />
          <h2 className="mt-2 mb-2 text-3xl font-bold">Progress loaded</h2>
          <p className="mb-5">
            {`You're all set to continue with Chapter ${user.progress.chapter}, Challenge ${user.progress.lesson}.`}
          </p>

          <BoxButton full size='small' style='outline' onClick={onContinue} classes='border-white border-2 p-1 text-xl'>Continue</BoxButton>
        </>
      )}
      </div>
    </Modal>
  )
}
