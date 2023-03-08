import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { sectionsConfig } from 'config/sections'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="bg-gradient-to-b from-[#00000060] via-[#00000020] to-transparent pb-28">
        <Topbar items={sectionsConfig.mainNav} />
      </div>
      <Hero />
      <Footer />
    </div>
  )
}
