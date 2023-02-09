import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { sectionsConfig } from 'config/sections'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar items={sectionsConfig.mainNav} />
      <Hero />
      <Footer />
    </div>
  )
}
