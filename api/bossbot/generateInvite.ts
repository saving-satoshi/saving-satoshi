const BASE_URL = process.env.NEXT_PUBLIC_BOSSBOT_API_ENDPOINT
const AUTH_TOKEN = process.env.NEXT_PUBLIC_BOSSBOT_AUTH

export default async function generateInvite(privateKey: string) {
  const body = {
    key: privateKey,
  }

  try {
    const res = await fetch(`${BASE_URL}/generate-invite`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    return res
  } catch (errors) {
    console.error('Error calling BOSS Bot API')
    console.error(errors)
    return undefined
  }
}
