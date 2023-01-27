import chapters from 'content/chapters'
import lessons from 'content/lessons'
import { Button } from 'shared'

export default function Layout({ children, params }) {
  const chapter = chapters[params.slug]
  const lesson = lessons[params.lesson]

  const isValidLesson =
    chapter && chapter.metadata.lessons.indexOf(params.lesson) !== -1 && lesson

  return (
    <div className="flex h-full flex-col md:grow">
      {isValidLesson && children}
      {!isValidLesson && (
        <div className="flex h-full w-full grow flex-col items-center justify-center">
          <span className="mb-10 text-4xl text-white">
            Sorry, we could not find the ’{params.lesson}’ lesson.
          </span>
          <Button href={`/chapters/${params.slug}`} size="small">
            &larr; Back to Chapter Overview
          </Button>
        </div>
      )}
    </div>
  )
}
