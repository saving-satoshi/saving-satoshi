import { chapters } from 'content'
import { introductions } from 'content'

function ComingSoon() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="items-center text-center text-6xl text-white sm:text-7xl lg:text-8xl">
        Coming Soon...
      </h1>
    </div>
  )
}
export default async function Page({ params }) {
  const chapter = chapters[params.slug]
  const Intro = introductions[chapter?.metadata?.intro]

  return Intro ? <Intro.default lang={params.lang} /> : <ComingSoon />
}
