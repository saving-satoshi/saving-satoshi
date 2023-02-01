import chapters from 'content/chapters'
import introductions from 'content/introductions'

function ComingSoon() {
  return (
    <div className="mb-12 flex h-screen items-center justify-center">
      <h1 className="text-center text-6xl text-white sm:text-7xl lg:text-8xl">
        Coming Soon...
      </h1>
    </div>
  )
}

export default async function Page({ params }) {
  const chapter = chapters[params.slug]
  const Intro = introductions[chapter?.metadata?.intro]

  return Intro ? <Intro.default /> : <ComingSoon />
}
