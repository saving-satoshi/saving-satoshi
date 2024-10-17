'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.making_a_payment_four.title',
  navigation_title: 'chapter_ten.making_a_payment_four.nav_title',
  image: '/assets/images/chapter-10-making-a-payment-4.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10MAP4',
}

export default function MakingAPayment4({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_four.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_four.paragraph_two')}
      </Text>
    </Introduction>
  )
}
