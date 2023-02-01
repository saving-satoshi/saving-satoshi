import { sectionsConfig } from 'config/sections'
import Topbar from 'components/Topbar'
import Footer from 'components/Footer'
import chapters from 'content/chapters'

export default async function ChaptersPage() {
  const sortedChapters = Object.values(chapters).sort(
    (a, b) => a.metadata.position - b.metadata.position
  )

  return (
    <>
      <div className="w-full">
        <Topbar items={sectionsConfig.mainNav} />

        <div className="lg:px-0">
          <div className="flex flex-col justify-center text-white">
            <h1 className="px-2.5 pt-20 text-center text-6xl sm:text-7xl lg:text-8xl">
              Chapters
            </h1>

            <p className="pt-4 pr-10 pl-10 pb-3.5 text-center  text-2xl sm:text-3xl lg:pb-20 lg:text-4xl">
              Explore the mysteries of Satoshi and learn about Bitcoin along the
              way.
            </p>
          </div>

          <section>
            {sortedChapters.map(({ default: Chapter }, i) => (
              <Chapter key={i} />
            ))}
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}
