'use client'

import clsx from 'clsx'

import { useLocalizedRoutes, useTranslations, useLang } from 'hooks'
import { chapters, lessons } from 'content'
import Address from '../Address'
import TabGroupDesktop from './TabGroupDesktop'
import UserButton from '../UserButton'
import Link from 'next/link'
import HelpLink from '../HelpLink'
import Icon from 'shared/Icon'
import { usePathData } from 'hooks'
import { navbarThemeSelector } from 'lib/themeSelector'
import { getChapterKey, getCurrentLessonKey, keys } from 'lib/progress'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

export default function NavbarDesktop({ params }) {
  const { chaptersUrl } = useLocalizedRoutes()
  const lang = useLang()
  const t = useTranslations(lang)
  const { slug, lesson: lessonId } = params
  const { chapterId } = usePathData()
  const [account] = useAtom(accountAtom)

  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = getCurrentLessonKey(lesson?.key ?? keys[0], account)

  const chapterKey = getChapterKey(currentLessonKey)

  const theme = navbarThemeSelector(lessons, lessonId, chapters, slug)

  return (
    <div className={clsx('z-10 hidden w-full md:block', theme)}>
      <div className="flex h-[70px] items-stretch justify-between border-b border-white/80 text-white">
        <div className="flex">
          <Link
            title={t('shared.poweroff')}
            className="group flex items-center border-r border-white/25 p-5 text-sm text-white transition duration-100 ease-in-out hover:bg-black/20"
            href={`${chaptersUrl}#${chapterKey}`}
          >
            <Icon
              icon="powerOff"
              className="h-[30px] w-[30px] opacity-75 transition duration-100 ease-in-out group-hover:opacity-100"
            />
          </Link>
          <Address />
        </div>
        <nav className="flex items-center">
          <TabGroupDesktop params={params} />
          <HelpLink params={params} />
          <span className="h-full w-[70px] items-stretch hover:bg-black/25">
            <UserButton />
          </span>
        </nav>
      </div>
    </div>
  )
}
