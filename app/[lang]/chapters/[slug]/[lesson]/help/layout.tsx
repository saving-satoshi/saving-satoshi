'use client'

import { lessons, chapters } from 'content'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId } = params
  const theme =
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  return (
    <div className={`${theme} height-minus-nav flex flex-col`}>
      <div className="fix-grow-issue flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}
