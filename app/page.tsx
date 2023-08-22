import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { Metadata } from 'next'

/*export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    title: 'Code your way through the mysteries of Bitcoin - Saving Satoshi',
    description:
      'A fun learning resource for developers to learn about how to build on bitcoin.',
    url: 'https://savingsatoshi.com/',
    images: {
      url: '/assets/previews/main-image-preview.jpg',
      alt: 'Saving Satoshi',
    },
  },
}*/

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
