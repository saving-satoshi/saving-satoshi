'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_four.outro_one.title',
  navigation_title: 'chapter_four.outro_one.nav_title',
  image: '/assets/images/chapter-4-finish.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#472B26]',
  gradientTheme: 'from-[#472B26] via-[rgba(71, 43, 38, 0)]',
  key: 'CH4OUT1',
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
        {t('chapter_four.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_four.outro_one.paragraph_one')}
      </p>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_four.outro_one.paragraph_two')}
      </p>
    </ChapterEnd>
  )
}
