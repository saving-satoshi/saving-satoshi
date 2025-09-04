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
import { navbarThemeSelector, themeSelector } from 'lib/themeSelector'
import { useAtomValue } from 'jotai'
import { currentChapterAtom } from 'state/progressState'
import { Tooltip } from 'ui'

export default function NavbarDesktop({ params }) {
  const { chaptersUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { slug, lesson: lessonId } = params
  const currentChapter = useAtomValue(currentChapterAtom)

  const theme = navbarThemeSelector(lessons, lessonId, chapters, slug)
  const chapterTheme = themeSelector(lessons, lessonId, chapters, slug)

  const chapterResources = resources[slug]

  const Resources = chapterResources?.default[lessonId]?.default

  return (
    <div className={clsx('z-10 hidden w-full md:block', theme)}>
      <div className="flex h-[70px] items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex">
          <Tooltip
            id="home"
            position="bottom"
            offset={12}
            theme={`${chapterTheme} border-0 border-t-0 border-l-0`}
            arrowPosition="top-0 left-[-80px]"
            content={t('shared.home_tooltip')}
            zIndex={10}
            contentClass="rounded-lg"
          >
            <Link
              className="group flex items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
              href={`${chaptersUrl}#chapter-${currentChapter}`}
            >
              <Icon
                icon="home"
                className="h-[30px] w-[30px] opacity-75 transition duration-100 ease-in-out group-hover:opacity-100"
              />
            </Link>
          </Tooltip>
        </div>
        <div className="flex w-full overflow-x-hidden">
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
