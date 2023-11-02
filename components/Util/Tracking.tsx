'use client'

import Script from 'next/script'
import { ReactElement, useEffect, useState } from 'react'

/* 
This might seem crazy but it's the only way this works.  We only get access to the window
on the client but nextjs will always try and render each route on the server on initial page load
so the only way to ensure that the code runs in browser is to run it inside useEffect.
*/
export default function Umami() {
  const [umami, setUmami] = useState<ReactElement>(<></>)

  useEffect(() => {
    if (window.location.origin === 'https://savingsatoshi.com') {
      setUmami(
        <Script
          async
          defer
          data-website-id="7654dd5b-5486-4070-99b0-753bed3ac21e"
          src="https://visits.bitcoindevs.xyz/script.js"
        />
      )
    }
  }, [])
  return umami
}
