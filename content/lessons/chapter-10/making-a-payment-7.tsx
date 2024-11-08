'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.making_a_payment_seven.title',
  navigation_title: 'chapter_ten.making_a_payment_seven.nav_title',
  image: '/assets/images/chapter-10-making-a-payment-7.jpg',
  key: 'CH10MAP7',
}

export default function MakingAPayment7({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_seven.paragraph_one')}
      </Text>
    </Introduction>
  )
}
