import 'styles/globals.css'
import Fonts from 'components/Fonts'
import Layout from 'components/Layout'
import dynamic from 'next/dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head id="head">
        <meta
          name="description"
          content="Explore the mysteries of Satoshi and learn about bitcoin along the way."
        />
        <meta name="apple-mobile-web-app-title" content="Saving Satoshi" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-cbrush">
        <Fonts />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
