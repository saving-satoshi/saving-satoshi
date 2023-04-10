'use client'
import Navbar from 'components/Navbar'
import { lessons } from 'content'
import { chapters } from 'content'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId, chapter: chapterId } = params

  const defaultTheme = 'bg-back'
  const { theme = defaultTheme } = lessons[slug][lessonId].metadata?.theme
    ? lessons[slug][lessonId].metadata
    : chapters[slug].metadata

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex min-h-screen flex-col overflow-hidden drop-shadow-3xl backdrop-blur-4xl">
        <Navbar params={params} />
        {children}
      </div>
    </div>
  )
}
