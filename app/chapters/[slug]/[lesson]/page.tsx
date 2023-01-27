import lessons from 'content/lessons'

export default function Page({ params }) {
  const lesson = lessons[params.lesson]

  const Lesson = lesson.default

  return <Lesson />
}
