'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_two.outro_one.title',
  image: '/assets/images/chapter-2-finish.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#362042]',
  key: 'CH2OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd
      image={metadata.image}
      className="relative -mt-[63px] flex h-[1200px] overflow-y-scroll md:-mt-[70px] md:h-screen"
      direction="right"
      lang={lang}
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
