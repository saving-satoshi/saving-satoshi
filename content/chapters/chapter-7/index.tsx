'use client'

import { useTranslations } from 'hooks'
import { Chapter, Text } from 'ui'

export default function Chapter7({ lang }) {
  const t = useTranslations(lang)

  return (
    <Chapter metadata={metadata} lang={lang}>
      <Text>
        Things are finally settling down. But people are confused and uncertain
        about whether the bitcoin supply has been tampered with. Your friend, a
        professor at a local university, asks you to help with research for an
        article on this topic. You happily agree, pop open your laptop, and get
        to work.
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 6,
  slug: 'chapter-7',
  title: 'chapter_seven.title',
  image: '/assets/images/chapter-7-cover.jpg',
  intros: [],
  lessons: [],
  outros: [],
  challenges: [],
}
