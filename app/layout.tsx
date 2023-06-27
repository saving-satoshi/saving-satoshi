import 'styles/globals.css'
import Fonts from 'components/Fonts'
import { AuthProvider, ProgressProvider } from 'providers'
import ModalProvider from 'providers/ModalProvider'
import Layout from 'components/Layout'

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schema()}
          key="product-jsonld"
        />
        <title>Saving Satoshi</title>
        <meta property="og:url" content="https://savingsatoshi.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Code your way through the mysteries of Bitcoin - Saving Satoshi"
        />
        <meta
          property="og:description"
          content="A fun learning resource for developers to learn about how to build on bitcoin."
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/6818cd1b-ea0d-49a4-ea14-d34c1bbae100/public"
        />
      </head>
      <body className="font-cbrush">
        <Fonts />
        <AuthProvider>
          <ProgressProvider>
            <ModalProvider>
              <Layout>{children}</Layout>
            </ModalProvider>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
