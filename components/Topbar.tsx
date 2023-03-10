'use client'

import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'
import UserButton from './Navbar/UserButton'

export default function Topbar({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute left-0 top-0 w-full">
      <div className="flex items-center justify-between px-6 py-4 text-white sm:m-auto">
        <Link
          href={`/`}
          className="transition duration-150 ease-in-out hover:opacity-75"
        >
          <h1 className="text-xl sm:text-3xl">{siteConfig.name}</h1>
        </Link>
        <nav className="flex items-center text-xl md:text-2xl">
          {items?.length
            ? items?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="mr-2 text-lg text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-100 sm:text-xl"
                >
                  {item.title}
                </Link>
              ))
            : null}
          <UserButton />
        </nav>
      </div>
    </div>
  )
}
