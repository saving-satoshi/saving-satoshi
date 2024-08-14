'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text, Title } from 'ui'

export const metadata = {
  title: 'chapter_nine.proposal_one.title',
  navigation_title: 'chapter_nine.proposal_one.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH9PRP1',
}

export default function Proposal1({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Title>{t('chapter_nine.proposal_one.heading')}</Title>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.proposal_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.proposal_one.paragraph_two')}
      </Text>
    </Introduction>
  )
}
