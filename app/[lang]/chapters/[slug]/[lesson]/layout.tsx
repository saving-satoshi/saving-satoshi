'use client'

import Navbar from 'components/Navbar'
import { lessons, chapters } from 'content'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId } = params
  const { theme = chapters[slug].metadata } =
    lessons[slug][lessonId]?.metadata ?? 'bg-back'
  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden">
        <Navbar params={params} />
        {children}
      </div>
    </div>
  )
}
