'use client'

import Navbar from 'components/Navbar'
import { lessons, chapters } from 'content'
import Chip from 'components/Chip'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId } = params
  const theme =
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden">
        <Navbar params={params} />
        <Chip
          position={1}
          coins={1.49}
          img={'/assets/images/chapter-1-holocat.jpg'}
        />
        {children}
      </div>
    </div>
  )
}
