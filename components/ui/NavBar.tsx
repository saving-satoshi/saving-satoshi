'use client';

import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'
import { useEffect, useState } from 'react'
import { LoginModal } from 'components/chapters/LoginModal';
import Image from 'next/image';
import User from 'public/assets/icons/avatar.svg';

export const Navbar = ({ items }: { items: NavItem[] }) => {
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    const logged = !!window.localStorage.getItem('loggedIn');
    setLoggedIn(logged);
  }, [])

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [loggedIn])

  function onLogin() {
    setOpenSignInModal(false)
    setLoggedIn(true)
  }

  function onLogout() {
    window.localStorage.removeItem('loggedIn');
    setLoggedIn(false);
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
            <User />
        </button>}
        
        {loggedIn && <button onClick={() => setOpenSignInModal(true)} className="text-grey-300 w-10 h-10 ml-4 cursor-pointer">
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

      <LoginModal 
        signedIn={loggedIn}
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        open={openSignInModal}
        onClose={() => setOpenSignInModal(false)} 
      />
    </div>
  )
}
