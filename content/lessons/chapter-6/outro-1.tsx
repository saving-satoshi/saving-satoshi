'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_six.outro_one.title',
  image: '/assets/images/chapter-6-outro.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#19202D]',
  gradientTheme: 'from-[#19202D] via-[rgba(71, 43, 38, 0)]',
  key: 'CH6OUT1',
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
        {t('chapter_six.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_six.outro_one.paragraph_one')}
      </p>
    </ChapterEnd>
  )
}
