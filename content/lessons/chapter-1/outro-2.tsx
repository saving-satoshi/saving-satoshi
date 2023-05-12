'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_one.outro_one.title',
  image: '/assets/images/chapter-1-finish.jpg',
  theme: 'bg-transparent',
  solidTheme: 'bg-transparent/25',
  key: 'CH1OUT2',
}

export default function Outro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd image={metadata.image} direction="left" lang={lang}>
      <h1 className="text-3xl font-bold text-white md:text-5xl">
        {t('chapter_one.outro_two.title')}
      </h1>
      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        {t('chapter_one.outro_two.description')}
      </p>
    </ChapterEnd>
  )
}
