import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'

export const metadata = {
  title: 'Saving Satoshi',
  description:
    'Explore the mysteries of Satoshi and learn about bitcoin along the way.',
  openGraph: {
    title: 'Saving Satoshi',
    description:
      'Explore the mysteries of Satoshi and learn about bitcoin along the way.',
    type: 'website',
    image: '/assets/previews/main-image-preview.jpg',
    url: 'https://savingsatoshi.com/',
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
