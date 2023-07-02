'use client'

import Navbar from 'components/Navbar'
import { lessons, chapters } from 'content'
import ProfileChip from 'components/ProfileChip'

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
        <ProfileChip
          ranking={1}
          balance={1.49}
          image={'/assets/images/chapter-1-holocat.jpg'}
        />
        {children}
      </div>
    </div>
  )
}
