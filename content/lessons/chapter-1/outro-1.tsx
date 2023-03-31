'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { TextImage } from 'ui'
import { setUserProgress } from 'lib/user'

export default function Transacting4({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  setUserProgress('chapter-2', 'scripting-1')

  return (
    <TextImage
      lang={lang}
      imageSrc="/assets/images/chapter-1-outro.jpg"
      imageAlt={t('chapter_one.outro_one.title')}
      btnText={t('chapter_one.outro_one.button_text')}
      btnEnabled={true}
      next={`${routes.chaptersUrl}/chapter-2/intro-1`}
    >
      <p>{t('chapter_one.outro_one.paragraph_one')}</p>
      <p className="pt-6">{t('chapter_one.outro_one.paragraph_two')}</p>
    </TextImage>
  )
}

export const metadata = {
  title: 'chapter_one.outro_one.title',
  image: '/assets/images/chapter-1-outro.jpg',
  theme: 'bg-[#2C3A3F]',
}
