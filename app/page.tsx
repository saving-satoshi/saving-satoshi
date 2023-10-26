import Topbar from 'components/Topbar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import defaultMetadata from 'config/metadata'
import Script from 'next/script'

export const metadata = {
  ...defaultMetadata,
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      {window.location.origin === 'https://savingsatoshi.com' && (
        <Script
          async
          defer
          data-website-id="7654dd5b-5486-4070-99b0-753bed3ac21e"
          src="https://visits.bitcoindevs.xyz/script.js"
        />
      )}
      <div className="bg-gradient-to-b from-[#00000060] via-[#00000020] to-transparent pb-28">
        <Topbar />
      </div>

      <Hero />

      <Footer className="bg-back" />
    </div>
  )
}
