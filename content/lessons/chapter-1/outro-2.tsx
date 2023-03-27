'use client'

import { ChapterEnd } from 'ui'

export default function Done({ lang }) {
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
  title: 'done.title',
  image: '/assets/images/chapter-1-finish.jpg',
  description: 'done.description',
}
