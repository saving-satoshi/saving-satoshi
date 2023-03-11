'use client'
import { useTranslations } from 'hooks'
import { IntroductionLayout, Text } from 'ui'

export const metadata = {
  title: 'Genesis1Success.title',
  image: '/assets/images/chapter-1-challenge-1-success.jpg',
}

export default function Genesis1Success({ lang }) {
  const t = useTranslations(lang)

  return (
    <IntroductionLayout
      lang={lang}
      image={metadata.image}
      title={metadata.title}
      next={`/chapters/chapter-1/genesis-5`}
      nextStatus={true}
    >
      <Text className="font-nunito text-2xl font-bold">
        {t('genesis1success.subtitle')}
      </Text>
      <Text className="mt-2.5 text-lg md:text-xl">
        {t('genesis1success.paragraph_one')}
      </Text>
    </IntroductionLayout>
  )
}
