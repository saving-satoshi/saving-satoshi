import { ChapterEnd } from 'ui'

export default function Done() {
  return (
    <ChapterEnd
      {...metadata}
      checkpoint={{
        chapter: 'chapter-2',
        lesson: null,
        next: '/chapters/chapter-2',
      }}
    />
  )
}

export const metadata = {
  title: 'Done',
  image: '/assets/images/chapter-1-finish.jpg',
  description:
    'Amazing. You completed the first chapter and learned a lot about hashes and transactions. Are you ready for more?',
}
