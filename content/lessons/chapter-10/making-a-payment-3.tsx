'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.making_a_payment_three.title',
  navigation_title: 'chapter_ten.making_a_payment_three.nav_title',
  image: '/assets/images/chapter-10-opening-a-channel-3.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10MAP3',
}

export default function MakingAPayment3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_three.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_three.paragraph_two')}
      </Text>
    </Introduction>
  )
}
