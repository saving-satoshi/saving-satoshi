'use client'

import { chapters } from 'content'
import { lessons } from 'content'
import { redirect } from 'next/navigation'
import { TextImage } from 'ui'
import { useLocalizedRoutes, usePathData } from 'hooks'

export default function Introduction({
  children,
  lang,
  imagePosition,
}: {
  children: any
  lang: any
  imagePosition: string
}) {
  const routes = useLocalizedRoutes()
  const { chapterId, lessonId } = usePathData()
  const chapter = chapters[chapterId]

  if (!chapter) {
    return redirect(routes.chaptersUrl)
  }

  const chapterLessons = lessons[chapterId]
  const intro = chapterLessons[lessonId]

  return (
    <TextImage
      lang={lang}
      imageSrc={intro.metadata.image}
      imageAlt={intro.metadata.title}
      btnEnabled={chapter.metadata.lessons.length > 0}
      objectPosition={imagePosition}
    >
      {children}
    </TextImage>
  )
}
