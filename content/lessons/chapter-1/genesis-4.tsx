'use client'

import { useTranslations } from 'hooks'
import { TextImage, Text } from 'ui'

export const metadata = {
  title: 'genesis_four.title',
  image: '/assets/images/chapter-1-challenge-1-success.jpg',
}

export default function Genesis4({ lang }) {
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc={metadata.image}
      imageAlt={metadata.title}
      next="/chapters/chapter-1/transacting-1"
      btnEnabled={true}
    >
      <Text className="font-nunito text-2xl font-bold">
        {t('genesis_four.subtitle')}
      </Text>
      <Text className="mt-2.5 text-lg md:text-xl">
        {t('genesis_four.paragraph_one')}
      </Text>
    </TextImage>
  )
}
