'use client'

import { useLocalizedRoutes, useTranslations } from 'hooks'
import { TextImage, Text } from 'ui'

export const metadata = {
  title: 'intro_two.title',
  image: '/assets/images/chapter-1-holocat.jpg',
}

export default function Holocat({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc={metadata.image}
      imageAlt={metadata.title}
      next={`${routes.chaptersUrl}/chapter-1/genesis-1`}
      btnEnabled={true}
    >
      <Text className="text-lg md:text-xl">{t('intro_two.paragraph_one')}</Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('intro_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('intro_two.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('intro_two.paragraph_four')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('intro_two.paragraph_five')}
      </Text>
    </TextImage>
  )
}
