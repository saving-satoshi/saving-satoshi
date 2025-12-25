'use client'

import { useEffect } from 'react'
import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_two.outro_one.title',
  navigation_title: 'chapter_two.outro_one.nav_title',
  image: '/assets/images/chapter-2-finish.jpg',
  theme: 'bg-transparent/40',
  secondaryTheme: 'bg-[#362042]',
  gradientTheme: 'from-[#362042] via-[#362042BF]',
  key: 'CH2OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  useEffect(() => {
    if (typeof window === 'undefined') return

    import('canvas-confetti').then((mod) => {
      const confetti = mod.default

      // main burst
      confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.7 },
      })

      // left + right follow up
      setTimeout(() => {
        confetti({
          particleCount: 120,
          angle: 60,
          spread: 150,
          origin: { x: 0 },
        })
        confetti({
          particleCount: 120,
          angle: 120,
          spread: 150,
          origin: { x: 1 },
        })
      }, 250)
    })
  }, [])

  return (
    <ChapterEnd
      image={metadata.image}
      direction="right"
      lang={lang}
      theme={metadata.secondaryTheme}
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
