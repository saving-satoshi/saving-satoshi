import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { sectionsConfig } from 'config/sections'

export default function Home({ params }) {
  const lang = params.lang

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="bg-gradient-to-b from-[#00000060] via-[#00000020] to-transparent pb-28">
        <Topbar lang={lang} items={sectionsConfig.mainNav} />
      </div>

      <Hero lang={lang} />

      <Footer lang={lang} />
    </div>
  )
}
