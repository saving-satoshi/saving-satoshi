'use client'

import chapters from 'content/chapters'
import lessons from 'content/lessons'
import { Button } from 'shared'
import { IntlProvider } from 'components'

export default function Page({ params }) {
  if (!(params.lesson in lessons) || !(params.slug in chapters)) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <span className="mb-10 text-4xl text-white">
          Sorry, we could not find the ’{params.lesson}’ lesson.
        </span>
        <Button href={`/chapters/${params.slug}`} size="small">
          &larr; Back to Chapter Overview
        </Button>
      </div>
    )
  }

  const Lesson = lessons[params.lesson].default

  return (
    <IntlProvider>
      <Lesson />
    </IntlProvider>
  )
}
