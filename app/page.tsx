import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import defaultMetadata from 'config/metadata'
import Umami from 'components/Util/Tracking'

export const metadata = {
  ...defaultMetadata,
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Umami />{' '}
      <div className="bg-gradient-to-b from-[#00000040] to-transparent pb-28">
        <Topbar />
      </div>
      <Hero />
      <Footer className="fixed bottom-0 w-full bg-back" />
    </div>
  )
}
