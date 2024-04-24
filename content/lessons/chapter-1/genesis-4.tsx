'use client'

import { useTranslations } from 'hooks'
import { TextImage, Text } from 'ui'

export const metadata = {
  title: 'chapter_one.genesis_four.title',
  navigation_title: 'chapter_one.genesis_four.nav_title',
  image: '/assets/images/chapter-1-challenge-1-success.jpg',
  theme: 'bg-[#4F5252]',
  key: 'CH1GEN4',
}

export default function Genesis4({ lang }) {
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc={metadata.image}
      imageAlt={metadata.title}
      btnEnabled={true}
    >
      <Text className="font-nunito text-2xl font-bold">
        {t('chapter_one.genesis_four.subtitle')}
      </Text>
      <Text className="mt-2.5 text-lg md:text-xl">
        {t('chapter_one.genesis_four.paragraph_one')}
      </Text>
    </TextImage>
  )
}
