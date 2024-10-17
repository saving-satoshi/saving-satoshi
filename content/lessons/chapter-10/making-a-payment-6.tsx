'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.making_a_payment_seven.title',
  navigation_title: 'chapter_ten.making_a_payment_seven.nav_title',
  image: '/assets/images/chapter-10-opening-a-channel-3.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10MAP6',
}

export default function MakingAPayment6({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_seven.paragraph_one')}
      </Text>
    </Introduction>
  )
}
