'use client'

import { useTranslations } from 'hooks'
import { TextImage } from 'ui'

export const metadata = {
  title: 'chapter_one.outro_one.title',
  image: '/assets/images/chapter-1-outro.jpg',
  theme: 'bg-[#2C3A3F]',
  key: 'CH1OUT1',
}

export default function Transacting4({ lang }) {
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc="/assets/images/chapter-1-outro.jpg"
      imageAlt={t('chapter_one.outro_one.title')}
      btnText={t('chapter_one.outro_one.button_text')}
      btnEnabled={true}
    >
      <p>{t('chapter_one.outro_one.paragraph_one')}</p>
      <p className="pt-6">{t('chapter_one.outro_one.paragraph_two')}</p>
    </TextImage>
  )
}
