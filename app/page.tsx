import { Footer } from 'components/ui/Footer'
import { Hero } from 'components/Hero'
import { Navbar } from 'components/ui/NavBar'
import { sectionsConfig } from 'config/sections'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar items={sectionsConfig.mainNav} />
      <Hero />
      <Footer />
    </div>
  )
}
