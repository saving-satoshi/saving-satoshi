'use client'

import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_one.outro_two.title',
  image: '/assets/images/chapter-1-finish.jpg',
  description: 'chapter_one.outro_two.description',
  key: 'CH1OUT2',
}

export default function Outro2({ lang }) {
  return <ChapterEnd {...metadata} lang={lang} />
}
