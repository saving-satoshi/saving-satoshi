'use client'
import { useTranslations } from 'hooks'
import { TextImage, Text } from 'ui'

export const metadata = {
  title: 'holocat.title',
  image: '/assets/images/chapter-1-holocat.jpg',
}

export default function Genesis1({ lang }) {
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc={metadata.image}
      imageAlt={metadata.title}
      next={`/chapters/chapter-1/genesis-2`}
      btnEnabled={true}
    >
      <Text className="text-lg md:text-xl">{t('holocat.paragraph_one')}</Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('holocat.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('holocat.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('holocat.paragraph_four')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('holocat.paragraph_five')}
      </Text>
    </TextImage>
  )
}
