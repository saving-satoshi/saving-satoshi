'use client'
import { chapters, lessons } from 'content'
import { useLang, useTranslations } from 'hooks'
import Link from 'next/link'
import { Tooltip } from 'ui'

export default function HelpLink({ params }: { params: any }) {
  const lang = useLang()
  const t = useTranslations(lang)

  const { slug, lesson: lessonId } = params
  const theme =
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  return (
    <div className="flex-l flex h-full items-stretch">
      <Tooltip
        id={`navbar-tab-tooltip-3`}
        position="bottom"
        theme={theme}
        offset={0}
        content={
          <div className="flex">
            <span className="whitespace-nowrap">
              {t('navbar.help_tooltip')}
            </span>
          </div>
        }
      >
        <Link
          className="relative flex h-full w-12 cursor-pointer items-center justify-center border-r border-white/25 text-center text-2xl text-white transition duration-100 ease-in-out hover:bg-black/25 md:w-16"
          target="_blank"
          href="https://forms.gle/NVcg9ukPvUBYjw1u7"
        >
          ?
        </Link>
      </Tooltip>
    </div>
  )
}
