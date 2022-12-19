import Link from 'next/link'

import { siteConfig } from 'config/site'
import { NavItem } from 'types'

export const Navbar = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="absolute left-0 top-0 w-screen">
      <div className="m-auto flex items-center justify-between px-6 py-4 text-white">
        <Link
          href="/"
          className="transition duration-150 ease-in-out hover:opacity-75"
        >
          <h1 className="text-xl md:text-3xl">{siteConfig.name}</h1>
        </Link>
        {items?.length ? (
          <ul className="flex text-xl md:text-2xl">
            {items?.map((item, idx) => (
              <li key={idx} className="px-4">
                <Link
                  href={item.href}
                  className="text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-100"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
