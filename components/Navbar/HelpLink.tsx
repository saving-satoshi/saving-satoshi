'use client'
import { chapters, lessons } from 'content'
import {
  useLang,
  useTranslations,
  useLocalizedRoutes,
  usePathData,
} from 'hooks'
import Link from 'next/link'
import { Tooltip } from 'ui'
import { themeSelector } from 'lib/themeSelector'
import { getCurrentLessonKey, getChapterKey, keys } from 'lib/progress'
import { useAuthContext } from 'providers/AuthProvider'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function HelpLink({ params }: { params: any }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { chaptersUrl } = useLocalizedRoutes()
  const { chapterId } = usePathData()
  const { account } = useAuthContext()
  const pathName = usePathname() || ''

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteHelp = pathData.length === 5

  const { slug, lesson: lessonId } = params

  const chapterLessons = lessons?.[chapterId]
  const lesson = chapterLessons?.[lessonId]?.metadata ?? null
  const currentLessonKey = getCurrentLessonKey(lesson?.key ?? keys[0], account)

  const chapterKey = getChapterKey(currentLessonKey)

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
          //target="_blank"
          href={`${chaptersUrl}/${chapterKey}/${lessonId}/help`}
          //href="https://forms.gle/NVcg9ukPvUBYjw1u7"
        >
          <span className="sr-only">Need help</span>?
        </Link>
      </Tooltip>
    </div>
  )
}
