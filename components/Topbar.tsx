'use client'

import Link from 'next/link'

import config from 'config'

import UserButton from './Navbar/UserButton'
import LangSwitch from './Navbar/LangSwitch'
import { useLang, useLocalizedRoutes, useTranslations } from 'hooks'

export default function Topbar() {
  const routes = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { name, navItems } = config

  return (
    <div className="absolute left-0 top-0 w-full">
      <div className="flex items-center justify-between px-6 py-2.5 text-white">
        <Link
          href={lang === 'en' ? '/' : routes.homeUrl}
          className="transition duration-150 ease-in-out hover:opacity-75"
        >
          <h1 className="text-xl sm:text-3xl">{name}</h1>
        </Link>
        <nav className="flex items-center gap-3 text-xl md:gap-8 md:text-2xl">
          {navItems.length > 0 &&
            navItems.map((item, idx) => (
              <Link
                key={idx}
                href={
                  item.title === 'chapters'
                    ? routes.chaptersUrl
                    : routes.aboutUrl
                }
                className="mr-2 align-middle text-lg text-white text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-100 sm:text-xl"
              >
                {t(`shared.${item.title}`)}
              </Link>
            ))}
          <LangSwitch />
          <UserButton />
        </nav>
      </div>
    </div>
  )
}
