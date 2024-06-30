'use client'
import { chapters, lessons } from 'content'
import { useLang, useTranslations, useLocalizedRoutes } from 'hooks'
import Link from 'next/link'
import { Tooltip } from 'ui'
import { themeSelector } from 'lib/themeSelector'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { currentChapterAtom } from 'state/progressState'
import { useAtomValue } from 'jotai'

export default function HelpLink({ params }: { params: any }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { chaptersUrl } = useLocalizedRoutes()
  const currentChapter = useAtomValue(currentChapterAtom)
  const pathName = usePathname() || ''

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteHelp = pathData.length === 5

  const { slug, lesson: lessonId } = params

  const theme = themeSelector(lessons, lessonId, chapters, slug)

  return (
    <div
      className={`flex-l flex h-full items-stretch ${
        lessonId.startsWith('intro-') || lessonId.startsWith('outro-')
          ? 'hidden'
          : ''
      }`}
    >
      <Tooltip
        id={`navbar-tab-tooltip-3`}
        position="bottom"
        theme={theme}
        offset={0}
        className="no-underline"
        zIndex={20}
        content={
          <div className="flex">
            <span className="whitespace-nowrap">
              {t('navbar.help_tooltip')}
            </span>
          </div>
        }
      >
        <Link
          className={clsx(
            'relative flex h-full w-[50px] cursor-pointer items-center justify-center border-r border-white/25 text-center font-nunito text-xl font-semibold text-white transition duration-100 ease-in-out hover:bg-black/25 md:w-[70px]',
            { 'bg-black/25 text-opacity-100': isRouteHelp }
          )}
          target="_blank"
          href={`${chaptersUrl}/chapter-${currentChapter}/${lessonId}/help`}
        >
          <span className="sr-only">Need help</span>?
        </Link>
      </Tooltip>
    </div>
  )
}
