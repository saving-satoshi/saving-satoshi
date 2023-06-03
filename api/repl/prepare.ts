import { post } from 'utils'

interface PrepareResponse {
  id: string
}

export default async function prepare(
  code: string,
  language: string
): Promise<PrepareResponse | undefined> {
  try {
    const res = await post({
      url: '/repl/prepare',
      includeToken: true,
      body: {
        code,
        language,
      },
    })

    return res.id
  } catch (errors) {
    console.error(errors)
    return
  }
}
