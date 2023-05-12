'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_two.outro_one.title',
  image: '/assets/images/chapter-2-finish.jpg',
  theme: 'bg-transparent',
  solidTheme: 'bg-transparent/20',
  key: 'CH2OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd image={metadata.image} direction="right" lang={lang}>
      <h1 className="text-3xl font-bold text-white md:text-5xl">
        {t('chapter_two.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        {t('chapter_two.outro_one.paragraph_one')}
      </p>
      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        {t('chapter_two.outro_one.paragraph_two')}
      </p>

      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        {t('chapter_two.outro_one.paragraph_three')}
      </p>

      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        {t('chapter_two.outro_one.paragraph_four')}
      </p>
    </ChapterEnd>
  )
}
