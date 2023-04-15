'use client'

import Navbar from 'components/Navbar'
import { lessons, chapters } from 'content'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId } = params
  const { theme = 'bg-back' } = lessons[slug][lessonId].metadata?.theme
    ? lessons[slug][lessonId].metadata
    : chapters[slug].metadata

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden">
        <Navbar params={params} />
        {children}
      </div>
    </div>
  )
}
