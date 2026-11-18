import { NextRequest, NextResponse } from 'next/server'

const DIOGENES_ENDPOINT = process.env.DIOGENES_API_ENDPOINT
const DIOGENES_AUTH = process.env.DIOGENES_AUTH

// Sends a POST to the Diogenes API. Authenticated call.
export async function POST(req: NextRequest) {
  if (!DIOGENES_ENDPOINT || !DIOGENES_AUTH) {
    return NextResponse.json({ error: 'server misconfigured' }, { status: 500 })
  }

  // Make sure private key is valid
  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid body' }, { status: 400 })
  }

  const private_key = body?.private_key
  if (
    typeof private_key != 'string' ||
    !/^[0-9a-fA-F]{64}$/.test(private_key)
  ) {
    return NextResponse.json({ error: 'invalid private_key' }, { status: 400 })
  }

  // Call the Diogenes API
  try {
    const res = await fetch(DIOGENES_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DIOGENES_AUTH}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ private_key }),
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('Diogenes returned', res.status)
      return NextResponse.json({ error: 'upstream error' }, { status: 502 })
    }

    return NextResponse.json(await res.json())
  } catch (e) {
    console.error('Error calling Diogenes', e)
    return NextResponse.json({ error: 'upstream unavailable' }, { status: 502 })
  }
}
