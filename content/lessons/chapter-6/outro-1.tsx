'use client'

import { useTranslations } from 'hooks'
import { useEffect } from 'react'
import { useModalFunctions } from 'state/ModalFunctions'
import { Modal } from 'state/state'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_six.outro_one.title',
  navigation_title: 'chapter_six.outro_one.nav_title',
  image: '/assets/images/chapter-6-outro.jpg',
  theme: 'bg-transparent/40',
  secondaryTheme: 'bg-[#19202D]',
  gradientTheme: 'from-[#19202D] via-[rgba(71, 43, 38, 0)]',
  key: 'CH6OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)
  const { open } = useModalFunctions()
  useEffect(() => {
    open(Modal.Popup, metadata.key)
  }, [])
  return (
    <ChapterEnd
      image={metadata.image}
      direction="left"
      lang={lang}
      theme={metadata.secondaryTheme}
      gradientTheme={metadata.gradientTheme}
    >
      <h1 className="text-5xl font-bold text-white">
        {t('chapter_six.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_six.outro_one.paragraph_one')}
      </p>
    </ChapterEnd>
  )
}
