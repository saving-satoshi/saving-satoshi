'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_one.outro_one.title',
  image: '/assets/images/chapter-1-finish.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#142B2B]',
  gradientTheme: 'from-[#142B2B] via-[#142B2B] to-transparent',
  key: 'CH1OUT2',
}

export default function Outro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd
      image={metadata.image}
      direction="left"
      lang={lang}
      className={`-mt-[70px] min-h-screen ${metadata.secondaryTheme}`}
      gradientTheme={metadata.gradientTheme}
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
