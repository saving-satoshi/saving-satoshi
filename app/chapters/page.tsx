import { Footer } from 'components/ui/Footer'
import { sectionsConfig } from 'config/sections'
import { Navbar } from '../../components/ui/NavBar'
import { Chapters } from './chapters'

export default async function ChaptersPage() {
  return (
    <>
      <div className="w-screen">
        <Navbar items={sectionsConfig.mainNav} />
        <div className="lg:px-0">
          <div className="flex flex-col justify-center text-white">
            <h1 className="px-2.5 pt-20 text-center text-6xl sm:text-7xl lg:text-8xl">
              Chapters
            </h1>
            <p className="pt-4 pr-10 pl-10 pb-3.5 lg:pb-20  text-center text-2xl sm:text-3xl lg:text-4xl">
              Explore the mysteries of Satoshi and learn about Bitcoin along the
              way.
            </p>
          </div>
          <section>
            {/* @ts-expect-error Server Component */}
            <Chapters />
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
