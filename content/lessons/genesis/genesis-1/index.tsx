'use client'
import { useTranslations } from 'hooks'
import { IntroductionLayout, Text } from 'ui'

export const metadata = {
  title: 'holocat.title',
  image: '/assets/images/chapter-1-holocat.jpg',
}

export default function Holocat({ lang }) {
  const t = useTranslations(lang)

  return (
    <IntroductionLayout
      lang={lang}
      image={metadata.image}
      title={metadata.title}
      next={`/chapters/chapter-1/genesis-2`}
      nextStatus={true}
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
    </IntroductionLayout>
  )
}
