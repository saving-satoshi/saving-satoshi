'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { TextImage } from 'ui'

export default function Transacting4({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      saveInfo={{
        chapter: 'chapter-2',
        challenge: 'scripting-1',
      }}
      imageSrc="/assets/images/chapter-1-outro.jpg"
      imageAlt={t('chapter_one.outro_one.title')}
      btnText={t('chapter_one.outro_one.button_text')}
      btnEnabled={true}
      next={`${routes.chaptersUrl}/chapter-1/outro-2`}
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
