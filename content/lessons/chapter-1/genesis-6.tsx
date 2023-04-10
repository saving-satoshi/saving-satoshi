'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { TextImage, Text } from 'ui'

export const metadata = {
  title: 'chapter_one.genesis_four.title',
  image: '/assets/images/chapter-1-challenge-1-success.jpg',
  theme: 'bg-[#4F5252]',
}

export default function Genesis4({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc={metadata.image}
      imageAlt={metadata.title}
      next={`${routes.chaptersUrl}/chapter-1/transacting-1`}
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
