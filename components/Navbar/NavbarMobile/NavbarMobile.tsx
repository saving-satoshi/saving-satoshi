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

export default function NavbarMobile({ params }) {
  const { chaptersUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)

  const [isOpen, setIsOpen] = useState(false)

  function handleButtonClick() {
    if (!isOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
    setIsOpen(!isOpen)
  }

  function handleTabClick() {
    setIsOpen(false)
  }

  const { slug, lesson: lessonId } = params

  //If theme was specified on lesson it should take priority over a theme that was specified on a chapter, otherwise fallback to bg-back. In this case it is used to apply an opacity for transparent outro screens
  const theme =
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  const isChapterEnd =
    Object.entries(lessons?.[slug]).pop()?.[0].toString() === lessonId

  return (
    <div className={clsx('z-10 w-full md:hidden', theme)}>
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
          {!isChapterEnd && (
            <HamburgerMenu isOpen={isOpen} clicked={handleButtonClick} />
          )}
        </div>
        <div className="flex items-center border-l border-white/25">
          {!isChapterEnd && <HelpLink params={params} />}
          <UserButton />
        </div>
      </div>
      <Menu isOpen={isOpen} params={params} clicked={handleTabClick} />
    </div>
  )
}
