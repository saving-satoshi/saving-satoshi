export default function Head({ id, children }: { id: string; children: any }) {
  return (
    <head id={id}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
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
      <link rel="icon" sizes="16x16" href="/favicon.ico" type="image/x-icon" />
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
      {children}
    </head>
  )
}
