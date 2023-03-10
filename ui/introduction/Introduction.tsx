'use client'

import { chapters } from 'content'
import { introductions } from 'content'
import { redirect, usePathname } from 'next/navigation'
import { IntroductionLayout } from 'ui'

export default function Introduction({ children, lang }) {
  const chapterId = usePathname().split('/').pop()
  const chapter = chapters[chapterId]

  if (!chapter) {
    return redirect('/chapters')
  }

  const intro = introductions[chapter.metadata.intro]

  return (
    <IntroductionLayout
      lang={lang}
      image={intro.metadata.image}
      title={intro.metadata.title}
      next={`/chapters/${chapterId}/${chapter.metadata.lessons[0]}`}
      nextStatus={chapter.metadata.lessons.length > 0}
    >
      {children}
    </IntroductionLayout>
  )
}
