import url from 'lib/url'
import { ChapterEnd } from 'ui'

export default function Done({ lang }) {
  return (
    <ChapterEnd
      {...metadata}
      lang={lang}
      checkpoint={{
        chapter: 'chapter-2',
        lesson: null,
        next: url('chapters/chapter-2', lang),
      }}
    />
  )
}

export const metadata = {
  title: 'done.title',
  image: '/assets/images/chapter-1-finish.jpg',
  description: 'done.description',
}
