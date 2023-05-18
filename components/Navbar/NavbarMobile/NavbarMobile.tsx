'use client'

import { useLocalizedRoutes, useTranslations, useLang } from 'hooks'
import { chapters, lessons } from 'content'
import Address from 'components/Navbar/Address'
import UserButton from '../UserButton'
import HamburgerMenu from './HamburgerMenu'
import { useState } from 'react'
import Menu from './Menu'
import clsx from 'clsx'
import Link from 'next/link'
import HelpLink from '../HelpLink'
import Icon from 'shared/Icon'
import { themeSelector } from 'lib/themeSelector'

export default function NavbarMobile({ params }) {
  const { chaptersUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)

  const [isOpen, setIsOpen] = useState(false)

  const { slug, lesson: lessonId } = params

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  function handleButtonClick() {
    setIsOpen(!isOpen)
  }

  function handleTabClick() {
    setIsOpen(false)
  }

  return (
    <div className={clsx('left-0 top-0 w-full md:hidden', theme)}>
      <div className="flex items-stretch border-b border-white/80 text-white">
        <div className="flex">
          <Link
            title={t('shared.back')}
            className="group flex items-center border-r border-white/25 p-4 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            href={chaptersUrl}
          >
            <Icon
              icon="powerOff"
              className="h-[30px] w-[30px] opacity-75 transition duration-100 ease-in-out group-hover:opacity-100"
            />
          </Link>
        </div>
        <div
          className={clsx('flex', 'items-stretch', {
            'bg-black': isOpen,
            'bg-opacity-20': isOpen,
          })}
        >
          <Address />
        </div>
        <div
          className={clsx('flex', 'flex-1', 'items-center', 'justify-end', {
            'bg-black': isOpen,
            'bg-opacity-20': isOpen,
          })}
        >
          <HamburgerMenu isOpen={isOpen} clicked={handleButtonClick} />
        </div>
        <div className="flex items-center">
          <HelpLink params={params} />
          <UserButton />
        </div>
      </div>
      <Menu isOpen={isOpen} params={params} clicked={handleTabClick} />
    </div>
  )
}
