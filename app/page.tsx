import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    title: 'Saving Satoshi',
    description:
      'Explore the mysteries of Satoshi and learn about bitcoin along the way.',
    url: 'https://savingsatoshi.com/',
    images: 'https://savingsatoshi.com/assets/previews/main-image-preview.jpg',
  },
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="bg-gradient-to-b from-[#00000060] via-[#00000020] to-transparent pb-28">
        <Topbar />
      </div>

      <Hero />

      <Footer className="bg-back" />
    </div>
  )
}
