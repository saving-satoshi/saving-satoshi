import { chapters, lessons } from 'content'
import { Button } from 'shared'

export default function Page({ params }) {
  const chapterId = params.slug
  const chapterLessons = lessons[chapterId]

  if (!(params.lesson in chapterLessons) || !(params.slug in chapters)) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <span className="mb-10 text-4xl text-white">
          Sorry, we could not find the ’{params.lesson}’ lesson.
        </span>
        <Button
          href={`/${params.lang}/chapters/${params.slug}/intro-1`}
          size="small"
        >
          &larr; Back to Chapter Overview
        </Button>
      </div>
    )
  }

  const Lesson = chapterLessons[params.lesson].default

  return <Lesson lang={params.lang} />
}
