import 'styles/globals.css'
import Fonts from 'components/Fonts'
import { AuthProvider, FeatureProvider, ProgressProvider } from 'providers'
import ModalProvider from 'providers/ModalProvider'
import Layout from 'components/Layout'
import Head from './head'

const schema = () => {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "CreativeWork",
      "abstract": "Saving Satoshi is a light-hearted first point of contact for developers who are curious about bitcoin development. Saving Satoshi has a mix of technical text and code-based challenges, but the challenges should be doable for anyone with basic coding skills. The project is free and open source and all the art has been generated using text-to-image (aka AI) tools like Midjourney.",
      "creativeWorkStatus": "Published",
      "dateCreated": "2022-10-06",
      "sameAs": [
          "https://twitter.com/savingsatoshi",
          "https://makers.bolt.fun/project/saving-satoshi",
          "https://github.com/saving-satoshi"
        ],
      "datePublished": "2023-03-24",
      "description": "A fun learning resource for developers to learn about how to build on bitcoin.",
      "educationalLevel": "beginner",
      "genre": "Education Platform",
      "headline": "Code your way through the mysteries of bitcoin!",
      "isAccessibleForFree": true,
      "isFamilyFriendly": true,
      "keywords": "bitcoin, bitcoin developer, bitcoin development, btc",
      "learningResourceType": "Coding game platform",
      "name": "Saving Satoshi",
      "teaches": "Bitcoin, coding",
      "thumbnailUrl": "https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/6818cd1b-ea0d-49a4-ea14-d34c1bbae100/public"
    }`,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head id="head">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <title>Saving Satoshi</title>
        <meta
          name="description"
          content="Explore the mysteries of Satoshi and learn about bitcoin along the way."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://saving-satoshi-git-fork-benalleng-opengraph-image-savingsatoshi.vercel.app/"
        />
        <meta property="og:title" content="Saving Satoshi" />
        <meta property="og:site_name" content="Saving Satoshi" />
        <meta
          property="og:image"
          content="https://saving-satoshi-git-fork-benalleng-opengraph-image-savingsatoshi.vercel.app/assets/previews/main-image-preview.jpg"
        />
        <meta
          property="og:description"
          content="Explore the mysteries of Satoshi and learn about bitcoin along the way."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saving Satoshi" />
        <meta
          name="twitter:description"
          content="Explore the mysteries of Satoshi and learn about bitcoin along the way."
        />
        <meta
          name="twitter:image"
          content="https://saving-satoshi-git-fork-benalleng-opengraph-image-savingsatoshi.vercel.app/assets/previews/main-image-preview.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schema()}
          key="product-jsonld"
        ></script>
      </head>
      {/*<Head id="head">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schema()}
          key="product-jsonld"
        ></script>
      </Head>*/}
      <body className="font-cbrush">
        <Fonts />
        <FeatureProvider>
          <AuthProvider>
            <ProgressProvider>
              <ModalProvider>
                <Layout>{children}</Layout>
              </ModalProvider>
            </ProgressProvider>
          </AuthProvider>
        </FeatureProvider>
      </body>
    </html>
  )
}
