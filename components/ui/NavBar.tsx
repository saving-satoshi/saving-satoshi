'use client';

import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'
import { useEffect, useState } from 'react'
import { LoginModal } from 'components/chapters/LoginModal';
import Image from 'next/image';

export const Navbar = ({ items }: { items: NavItem[] }) => {
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(window.localStorage.getItem('loggedIn') ? true : false)
  }, [])

  function onLogin() {
    setOpenSignInModal(false)
    setLoggedIn(true)
  }

  return (
    <div className="absolute left-0 top-0 w-screen">
      <div className="m-auto flex items-center justify-between px-6 py-4 text-white">
        <Link
          href="/"
          className="transition duration-150 ease-in-out hover:opacity-75"
        >
          <h1 className="text-xl md:text-3xl">{siteConfig.name}</h1>
        </Link>
        <nav className="flex text-xl md:text-2xl">
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
        {}
        {!loggedIn && <button onClick={() => setOpenSignInModal(true)} className="text-grey-300 w-10 h-10 ml-4 cursor-pointer">
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_393_10135)">
            <g clip-path="url(#clip1_393_10135)">
            <circle cx="15" cy="32.5" r="10" stroke="white" stroke-width="1.5"/>
            <circle cx="15" cy="13.5" r="5" stroke="white" stroke-width="1.5"/>
            </g>
            <rect x="0.75" y="1.25" width="28.5" height="28.5" rx="14.25" stroke="white" stroke-width="1.5"/>
            </g>
            <defs>
            <clipPath id="clip0_393_10135">
            <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            <clipPath id="clip1_393_10135">
            <rect y="0.5" width="30" height="30" rx="15" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </button>}
        
        {loggedIn && <button className="text-grey-300 w-10 h-10 ml-4 cursor-pointer">
            <Image
              src={`/assets/avatars/${JSON.parse(window.localStorage.getItem('user')).avatar}.png`}
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full"
          />
        </button>}
        </nav>

      </div>

      <LoginModal onLogin={onLogin} open={openSignInModal} onClose={() => setOpenSignInModal(false)} />
    </div>
  )
}
