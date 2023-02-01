'use client'

import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'
import { useState, useEffect } from 'react'
import LoginModal from 'components/Modals/Login'
import SignUpModal from 'components/Modals/SignUp'
import UserIcon from 'public/assets/icons/avatar.svg'
import Avatar from 'components/Avatar'
import { useUser } from 'hooks'

export default function Topbar({ items }: { items: NavItem[] }) {
  const [isMounted, setIsMounted] = useState(false)
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  const { user, isLoggedIn, isRegistered } = useUser()

  function toggleModal(show) {
    if (user && user.publicKey && isRegistered) {
      setOpenSignInModal(show)
    } else {
      setOpenSignUpModal(show)
    }
  }

  function hideModals() {
    setOpenSignInModal(false)
    setOpenSignUpModal(false)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
          {items?.length
            ? items?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="mr-2 text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-100"
                >
                  {item.title}
                </Link>
              ))
            : null}
          {isMounted && isLoggedIn ? (
            <button
              onClick={() => setOpenSignInModal(true)}
              className="text-grey-300 ml-4 h-10 w-10 cursor-pointer"
            >
              <Avatar avatar={user.avatar} size={30} />
            </button>
          ) : (
            <button
              onClick={() => toggleModal(true)}
              className="text-grey-300 ml-4 h-10 w-10 cursor-pointer"
            >
              <UserIcon />
            </button>
          )}
        </nav>
      </div>
      {isRegistered ? (
        <LoginModal
          onLogin={() => setOpenSignInModal(false)}
          open={openSignInModal}
          onClose={hideModals}
        />
      ) : (
        <SignUpModal
          onConfirm={() => setOpenSignUpModal(false)}
          open={openSignUpModal}
          onClose={hideModals}
        />
      )}
    </div>
  )
}
