'use client'

import Avatar from 'components/Avatar'
import Modal from 'components/Modals/Modal'
import { useTranslations, useLang } from 'hooks'
import { useAtom } from 'jotai'
import { Button } from 'shared'
import { accountAtom } from 'state/state'

export default function Popup({ onClose, state }) {
  const lang = useLang()
  const [account] = useAtom(accountAtom)
  const t = useTranslations(lang)

  return (
    <Modal active={state.open} onRequestClose={() => {}}>
      <div className="flex flex-col gap-8">
        <Avatar avatar="/assets/images/chapter-6-intro-2.jpg" size={120} />
        <div>
          <p>{t('modal_popup.paragraph_one')}</p>
          <p className="mt-2">{t('modal_popup.paragraph_two')}</p>
          <p className="mt-4 text-sm">{t('modal_popup.paragraph_three')}</p>
        </div>

        <div className="flex justify-between">
          <Button
            size="tiny"
            external
            href="https://calendly.com/thebitcoindevproject/30min"
          >
            {t('modal_popup.button_text_one')}
          </Button>
          <Button style="outline" size="tiny" onClick={() => onClose()}>
            {t('modal_popup.button_text_two')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
