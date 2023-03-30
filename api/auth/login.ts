import { fetchContext, post } from 'utils'

export default async function login(privateKey) {
  try {
    const { token } = await post({
      url: '/v1/auth/login',
      body: {
        private_key: privateKey,
      },
    })

    fetchContext.token = token

    return true
  } catch (errors) {
    console.error(errors)
    return false
  }
}
