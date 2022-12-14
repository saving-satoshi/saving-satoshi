import '../styles/globals.css'
import Fonts from 'components/Fonts'
import { sectionsConfig } from 'config/sections'
import { Navbar } from 'components/ui/NavBar'
import { Footer } from 'components/ui/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col font-cbrush">
        <Fonts />
        <Navbar items={sectionsConfig.mainNav} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
