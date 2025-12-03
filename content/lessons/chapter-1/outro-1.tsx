// app/.../Outro1.tsx
'use client'

import dynamic from 'next/dynamic'
import { useTranslations } from 'hooks'
import { TextImage } from 'ui'

const CelebrationAuto = dynamic(
  () => import('components/Celebration_Confetti'),
  { ssr: false }
)

export const metadata = {
  title: 'chapter_one.outro_one.title',
  navigation_title: 'chapter_one.outro_one.nav_title',
  image: '/assets/images/chapter-1-outro.jpg',
  theme: 'bg-[#2C3A3F]',
  key: 'CH1OUT1',
}

type Outro1Props = {
  lang: string
}

export default function Outro1({ lang }: Outro1Props) {
  const t = useTranslations(lang)
  const btnText = t('chapter_one.outro_one.button_text')

  return (
    <>
      {/* 🎉 Confetti logic now runs ONLY on client, no SSR */}
      <CelebrationAuto buttonText={btnText} intensity={1.2} />

      <TextImage
        lang={lang}
        imageSrc="/assets/images/chapter-1-outro.jpg"
        imageAlt={t('chapter_one.outro_one.title')}
        btnText={btnText}
        btnEnabled={true}
        objectPosition="object-left-top"
      >
        <p>{t('chapter_one.outro_one.paragraph_one')}</p>
        <p className="pt-6">{t('chapter_one.outro_one.paragraph_two')}</p>
      </TextImage>
    </>
  )
}
