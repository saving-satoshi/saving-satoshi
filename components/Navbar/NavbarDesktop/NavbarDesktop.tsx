'use client'

import clsx from 'clsx'

import { useLocalizedRoutes, useTranslations, useLang } from 'hooks'
import { chapters, lessons, resources } from 'content'
import Address from '../Address'
import TabGroupDesktop from './TabGroupDesktop'
import UserButton from '../UserButton'
import Link from 'next/link'
import HelpButton from '../HelpButton'
import Icon from 'shared/Icon'
import { usePathData } from 'hooks'
import { navbarThemeSelector } from 'lib/themeSelector'
import { useAtom, useAtomValue } from 'jotai'
import { accountAtom } from 'state/state'
import { currentChapterAtom } from 'state/progressState'

export default function NavbarDesktop({ params }) {
  const { chaptersUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { slug, lesson: lessonId } = params
  const currentChapter = useAtomValue(currentChapterAtom)

  const theme = navbarThemeSelector(lessons, lessonId, chapters, slug)

  const chapterResources = resources[slug]

  const Resources = chapterResources?.default[lessonId]?.default

  return (
    <div className={clsx('z-10 hidden w-full md:block', theme)}>
      <div className="flex h-[70px] items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex">
          <Link
            title={t('shared.poweroff')}
            className="group flex items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            href={`${chaptersUrl}#chapter-${currentChapter}`}
          >
            <Icon
              icon="powerOff"
              className="h-[30px] w-[30px] opacity-75 transition duration-100 ease-in-out group-hover:opacity-100"
            />
          </Link>
        </div>
        <div className="flex overflow-x-hidden">
          <Address />
        </div>
        <nav className="flex items-center">
          <TabGroupDesktop params={params} />
          {Resources && (
            <span className="h-full w-[70px] items-stretch hover:bg-black/25">
              <HelpButton lessonId={lessonId} />
            </span>
          )}
          <span className="h-full w-[70px] items-stretch hover:bg-black/25">
            <UserButton />
          </span>
        </nav>
      </div>
    </div>
  )
}
