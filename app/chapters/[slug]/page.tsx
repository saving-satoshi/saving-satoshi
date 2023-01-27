import chapters from 'content/chapters'
import introductions from 'content/introductions'

export default async function Page({ params }) {
  const chapter = chapters[params.slug]
  const intro = introductions[chapter.metadata.intro]

  const Intro = intro.default

  return <Intro params={params} />
}
