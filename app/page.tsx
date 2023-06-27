import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import Head from 'next/head'

export const metadata = {
  title: 'Code your way through the mysteries of Bitcoin - Saving Satoshi',
  description:
    'A fun learning resource for developers to learn about how to build on bitcoin.',
  openGraph: {
    title: 'Code your way through the mysteries of Bitcoin - Saving Satoshi',
    description:
      'A fun learning resource for developers to learn about how to build on bitcoin.',
    type: 'website',
    image:
      'https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/6818cd1b-ea0d-49a4-ea14-d34c1bbae100/public',
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
