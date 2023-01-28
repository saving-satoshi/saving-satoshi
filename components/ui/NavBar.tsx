'use client';

import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'
import { useEffect, useState } from 'react'
import { LoginModal } from 'components/chapters/LoginModal';
import { SignUpModal } from 'components/chapters/SignUpModal';
import Image from 'next/image';
import User from 'public/assets/icons/avatar.svg';
import { Avatar } from './Avatar';
import { getUser, isUserLoggedIn, isUserRegistered, logoutUser } from 'lib/user'

export const Navbar = ({ items }: { items: NavItem[] }) => {
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    setLoggedIn(isUserLoggedIn())
  }, [])

  useEffect(() => {
    updateUser()
  }, [loggedIn])

  function onLogin() {
    setOpenSignInModal(false)
    setLoggedIn(true)
  }

  function updateUser() {
    setUser(getUser())
  }

  function onClearProgress() {
    setUser(null)
  }

  function onLogout() {
    logoutUser()
    setLoggedIn(false);
  }

  function onSignupConfirm() {
    updateUser()
    setLoggedIn(true)
    setOpenSignUpModal(false)
  }

  function toggleModal(show) {
    if (user && user.publicKey && isUserRegistered()) {
      setOpenSignInModal(show)
    } else {
      setOpenSignUpModal(show)
    }
  }

  function hideModals() {
    setOpenSignInModal(false)
    setOpenSignUpModal(false)
  }

  return (
    <div className="absolute left-0 top-0 w-full">
      <div className="m-auto flex items-center justify-between px-6 py-4 text-white">
        <Link
          href="/"
          className="transition duration-150 ease-in-out hover:opacity-75"
        >
          <h1 className="text-xl md:text-3xl">{siteConfig.name}</h1>
        </Link>
        <nav className="flex items-center text-xl md:text-2xl">
          {items?.length ? (
            items?.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-100 mr-2"
              >
                {item.title}
              </Link>
            ))
          ) : null}

          {!loggedIn && <button onClick={() => toggleModal(true)} className="text-grey-300 w-10 h-10 ml-4 cursor-pointer">
            <User />
          </button>}

          {loggedIn && <button onClick={() => setOpenSignInModal(true)} className="text-grey-300 w-10 h-10 ml-4 cursor-pointer">
            <Avatar
              avatar={user.avatar}
              size={30}
            />
          </button>}
        </nav>

      </div>

      <LoginModal
        onLogin={onLogin}
        onLogout={onLogout}
        open={openSignInModal}
        onClearProgress={onClearProgress}
        onClose={() => hideModals()}
      />

      <SignUpModal
        onConfirm={onSignupConfirm}
        open={openSignUpModal}
        onClose={() => hideModals()}
      />
    </div>
  )
}
