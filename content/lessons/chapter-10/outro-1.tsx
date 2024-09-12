'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_nine.outro_one.title',
  navigation_title: 'chapter_nine.outro_one.nav_title',
  image: '/assets/images/chapter-9-outro.jpg',
  theme: 'bg-transparent/40',
  secondaryTheme: 'bg-[#886038]',
  gradientTheme: 'from-[#886038] via-[#886038BF]',
  key: 'CH10OUT1',
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
        {t('chapter_nine.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_nine.outro_one.paragraph_one')}
      </p>
    </ChapterEnd>
  )
}
