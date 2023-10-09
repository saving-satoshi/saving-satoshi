'use client'

import { lessons, chapters } from 'content'

export default function Layout({ children, params }) {
  const { slug, lesson: lessonId } = params
  const theme =
    lessons[slug]?.[lessonId]?.metadata.theme ??
    chapters[slug]?.metadata.theme ??
    'bg-back'

  return (
    <div className={`${theme} flex flex-col`}>
      <div className="fix-grow-issue flex flex-col">{children}</div>
    </div>
  )
}
