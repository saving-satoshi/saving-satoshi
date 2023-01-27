import Navbar from 'components/Navbar'
import chapters from 'content/chapters'

export default async function Layout({ children, params }) {
  const chapter = chapters[params.slug]
  const isValidChapter = chapter && chapter.metadata.lessons.length > 0

  return (
    <div className="ch1-background flex flex-col">
      <div className="fix-grow-issue flex min-h-screen flex-col blur">
        {isValidChapter && (
          <>
            <Navbar params={params} />
            {children}
          </>
        )}

        {!isValidChapter && (
          <div className="mb-12 flex h-screen items-center justify-center">
            <h1 className="text-center text-6xl text-white sm:text-7xl lg:text-8xl">
              Coming Soon...
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
