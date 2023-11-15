'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_five.outro_one.title',
  image: '/assets/images/chapter-5-outro.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#2C3E59]',
  gradientTheme: 'from-[#2C3E59] via-[rgba(71, 43, 38, 0)]',
  key: 'CH5OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd
      image={metadata.image}
      direction="left"
      lang={lang}
      theme={metadata.secondaryTheme}
      gradientTheme={metadata.gradientTheme}
    >
      <h1 className="text-5xl font-bold text-white">
        {t('chapter_five.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_five.outro_one.paragraph_one')}
      </p>
    </ChapterEnd>
  )
}
