'use client'

import { ChapterEnd } from 'ui'

export default function Outro2({ lang }) {
  return (
    <ChapterEnd
      {...metadata}
      lang={lang}
      checkpoint={{
        chapter: 'chapter-2',
        lesson: null,
        next: '/chapters/chapter-2',
      }}
    />
  )
}

export const metadata = {
  title: 'chapter_one.outro_two.title',
  image: '/assets/images/chapter-1-finish.jpg',
  description: 'chapter_one.outro_two.description',
}
