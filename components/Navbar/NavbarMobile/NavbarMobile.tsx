'use client'

import {
  useLocalizedRoutes,
  useTranslations,
  useLang,
  usePathData,
} from 'hooks'
import { chapters, lessons, resources } from 'content'
import Address from 'components/Navbar/Address'
import UserButton from '../UserButton'
import HamburgerMenu from './HamburgerMenu'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import clsx from 'clsx'
import Link from 'next/link'
import HelpButton from '../HelpButton'
import Icon from 'shared/Icon'
import { navbarThemeSelector } from 'lib/themeSelector'
import { useAtom, useAtomValue } from 'jotai'
import { accountAtom } from 'state/state'
import { currentChapterAtom } from 'state/progressState'

export default function NavbarMobile({ params }) {
  const { chaptersUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { chapterId } = usePathData()
  const { slug, lesson: lessonId } = params
  const [account] = useAtom(accountAtom)
  const currentChapter = useAtomValue(currentChapterAtom)
  const [isOpen, setIsOpen] = useState(false)

  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null

  const theme = !isOpen
    ? navbarThemeSelector(lessons, lessonId, chapters, slug)
    : lessons[slug]?.[lessonId]?.metadata.secondaryTheme ??
      lessons[slug]?.[lessonId]?.metadata.theme ??
      chapters[slug]?.metadata.secondaryTheme ??
      chapters[slug]?.metadata.theme ??
      'bg-back'

  const chapterResources = resources[chapterId]

  const Resources = chapterResources?.default[lessonId]?.default

  function handleButtonClick() {
    if (!isOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
    setIsOpen(!isOpen)
  }

  function handleTabClick() {
    document.body.classList.remove('overflow-y-hidden')
    setIsOpen(false)
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [])

  return (
    <div
      className={clsx(
        'z-10 w-full transition duration-100 ease-in-out md:hidden',
        theme,
        {
          'delay-500': !isOpen,
        }
      )}
    >
      <div className="flex h-[70px] items-stretch border-b border-white/80 text-white">
        <div className="flex">
          <Link
            title={t('shared.back')}
            className="group flex items-center border-r border-white/25 p-4 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            href={`${chaptersUrl}#chapter-${currentChapter}`}
          >
            <Icon
              icon="powerOff"
              className="h-[30px] w-[30px] opacity-75 transition duration-100 ease-in-out group-hover:opacity-100"
            />
          </Link>
        </div>
        <div
          className={clsx('flex', 'items-stretch overflow-x-hidden', {
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
          {Resources && (
            <span className="h-full w-[50px]">
              <HelpButton lessonId={lessonId} />
            </span>
          )}
          <span className="h-full w-[50px]">
            <UserButton />
          </span>
        </div>
      </div>
      <Menu isOpen={isOpen} params={params} clicked={handleTabClick} />
    </div>
  )
}
