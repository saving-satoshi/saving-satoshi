'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_one.outro_one.title',
  image: '/assets/images/chapter-1-finish.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#2B3B3E]',
  key: 'CH1OUT2',
}

export default function Outro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd
      image={metadata.image}
      direction="left"
      lang={lang}
      className={`relative -mt-[70px] h-full md:-mt-[70px] md:h-screen ${metadata.secondaryTheme}`}
    >
      <h1 className="text-5xl font-bold text-white">
        {t('chapter_one.outro_two.title')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_one.outro_two.description')}
      </p>
    </ChapterEnd>
  )
}
