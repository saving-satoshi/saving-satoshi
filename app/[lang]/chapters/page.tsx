import Topbar from 'components/Topbar'
import Footer from 'components/Footer'
import Disclaimer from 'components/Disclaimer'
import { chapters } from 'content'
import defaultMetadata from 'config/metadata'

export const metadata = {
  ...defaultMetadata,
  title: 'Chapters - Saving Satoshi',
}

export default async function ChaptersPage({ params }) {
  const sortedChapters = Object.values(chapters).sort(
    (a, b) => a.metadata.position - b.metadata.position
  )

  return (
    <div className="w-full bg-[#2A3B61]">
      <Topbar />

      <div className="lg:px-0">
        <Disclaimer />
        <section>
          {sortedChapters.map(({ default: Chapter }, i) => (
            <Chapter key={i} lang={params.lang} />
          ))}
        </section>
      </div>

      <Footer className="bg-black/25" />
    </div>
  )
}
