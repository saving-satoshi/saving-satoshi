import { NextRequest, NextResponse } from 'next/server'
import { isBossClueActive, verifyCompletion } from 'lib/bossClue'

const DIOGENES_ENDPOINT = process.env.DIOGENES_API_ENDPOINT
const DIOGENES_AUTH = process.env.DIOGENES_AUTH

// our helper methods in 'utils' don't have a cache option, so opt the whole
// route out of Next's fetch cache (progress must always be read fresh)
export const dynamic = 'force-dynamic'

// Sends a POST to the Diogenes API. Authenticated call.
export async function POST(req: NextRequest) {
  // When the BOSS clue is switched off, the route should behave like it doesn't exist
  if (!isBossClueActive()) {
    return NextResponse.json({ error: 'not found' }, { status: 404 })
  }

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

  // Check that the player finished the game
  try {
    if (!(await verifyCompletion(private_key))) {
      return NextResponse.json({ error: 'game not completed' }, { status: 403 })
    }
  } catch (e) {
    console.error('Error verifying game progress in the backend', e)
    return NextResponse.json({ error: 'upstream unavailable' }, { status: 502 })
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
