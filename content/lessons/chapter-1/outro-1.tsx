'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { TextImage } from 'ui'

export default function Transacting4({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc="/assets/images/chapter-1-outro.jpg"
      imageAlt={t('outro.title')}
      btnText={t('outro.button_text')}
      btnEnabled={true}
      next={`${routes.chaptersUrl}/chapter-1/outro-2`}
    >
      <p>{t('outro.paragraph_one')}</p>
      <p className="pt-6">{t('outro.paragraph_two')}</p>
    </TextImage>
  )
}

export const metadata = {
  title: 'outro.title',
  image: '/assets/images/chapter-1-outro.jpg',
}
