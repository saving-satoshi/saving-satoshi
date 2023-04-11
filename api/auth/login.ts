import { SAVING_SATOSHI_TOKEN } from 'config/keys'
import { post } from 'utils'

export default async function login(privateKey) {
  try {
    const { token } = await post({
      url: '/v1/auth/login',
      body: {
        private_key: privateKey,
      },
    })

    window.localStorage.setItem(SAVING_SATOSHI_TOKEN, token)

    return true
  } catch (errors) {
    console.error(errors)
    return false
  }
}
