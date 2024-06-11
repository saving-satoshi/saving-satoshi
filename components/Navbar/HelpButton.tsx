'use client'

import { useLang, usePathData, useTranslations } from 'hooks'
import { Tooltip } from 'ui'
import { lessons, chapters } from 'content'
import { navbarThemeSelector } from 'lib/themeSelector'
import clsx from 'clsx'
import { Modal } from 'state/state'
import { useModalFunctions } from 'state/ModalFunctions'

export default function HelpButton(lessonId) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { chapterId } = usePathData()
  const { open } = useModalFunctions()

  const theme =
    lessons[chapterId]?.[lessonId]?.metadata.secondaryTheme ??
    lessons[chapterId]?.[lessonId]?.metadata.theme ??
    chapters[chapterId]?.metadata.secondaryTheme ??
    chapters[chapterId]?.metadata.theme ??
    'bg-back'

  const handleClick = (name: Modal) => {
    open(name, lessonId)
  }

  return (
    <div className="flex-l flex h-full items-stretch">
      <Tooltip
        id={`navbar-tab-tooltip-3`}
        position="bottom"
        offset={0}
        theme={theme}
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
        <div
          className={clsx(
            'relative flex h-full w-[50px] cursor-pointer items-center justify-center border-r border-white/25 text-center font-nunito text-xl font-semibold text-white transition duration-100 ease-in-out md:w-[70px]'
          )}
          onClick={() => handleClick(Modal.Help)}
        >
          <span className="sr-only">Need help</span>?
        </div>
      </Tooltip>
    </div>
  )
}
