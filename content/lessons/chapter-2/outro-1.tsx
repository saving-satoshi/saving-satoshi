'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_two.outro_one.title',
  image: '/assets/images/chapter-2-finish.jpg',
  theme: 'bg-[#362042]',
  secondaryTheme: 'bg-[#362042]',
  gradientTheme: 'from-[#362042] via-[#362042] to-transparent',
  key: 'CH2OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd
      image={metadata.image}
      className={`-mt-[70px] min-h-screen ${metadata.secondaryTheme}`}
      direction="right"
      lang={lang}
      gradientTheme={metadata.gradientTheme}
    >
      <h1 className="text-5xl font-bold text-white">
        {t('chapter_two.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_two.outro_one.paragraph_one')}
      </p>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_two.outro_one.paragraph_two')}
      </p>

      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_two.outro_one.paragraph_three')}
      </p>

      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_two.outro_one.paragraph_four')}
      </p>
    </ChapterEnd>
  )
}
