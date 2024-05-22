'use client'

import { useLang, useTranslations } from 'hooks'
import { Tooltip } from 'ui'
import clsx from 'clsx'
import { Modal } from 'state/state'
import { useModalFunctions } from 'state/ModalFunctions'

export default function HelpButton() {
  const lang = useLang()
  const t = useTranslations(lang)
  const { open } = useModalFunctions()

  const handleClick = (name: Modal) => {
    open(name)
  }

  return (
    <div className="flex-l flex h-full items-stretch">
      <Tooltip
        id={`navbar-tab-tooltip-3`}
        position="bottom"
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
