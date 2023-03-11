'use client'

import { redirect } from 'next/navigation'

import { chapters, lessons } from 'content'
import { IntroductionLayout } from 'ui'
import { usePathData } from 'hooks'

export default function Introduction({ children, lang }) {
  const { chapterId, lessonId } = usePathData()
  const chapter = chapters[chapterId]

  if (!chapter) {
    return redirect('/chapters')
  }

  const chapterLessons = lessons[chapterId]
  const intro = chapterLessons[lessonId]
  const introIndex = chapter.metadata.intros.indexOf(lessonId)
  const isLastIntro = introIndex >= chapter.metadata.intros.length - 1
  const nextLessonId = isLastIntro
    ? chapter.metadata.lessons[0]
    : chapter.metadata.intros[introIndex + 1]

  return (
    <IntroductionLayout
      lang={lang}
      image={intro.metadata.image}
      title={intro.metadata.title}
      next={`/chapters/${chapterId}/${nextLessonId}`}
      nextStatus={chapter.metadata.lessons.length > 0}
    >
      {children}
    </IntroductionLayout>
  )
}
