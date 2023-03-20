const crypto = require('crypto')
const Secp256k1 = require('@lionello/secp256k1-js')

function getUser() {
  if (!process.browser) {
    return
  }
  try {
    return JSON.parse(window.localStorage.getItem('SavingSatoshiUser'))
  } catch {
    return null
  }
}

export function setUserProgress(chapter, lesson) {
  const user = getUser()
  if (user) {
    user.progress.chapter = chapter
    user.progress.lesson = lesson
    saveUser(user)
  }
}

export function setUserAvatar(avatar) {
  const user = getUser()
  if (user) {
    user.avatar = avatar
    saveUser(user)
  }
}

export function setUserRegistered() {
  const user = getUser()
  if (user) {
    user.registered = true
    saveUser(user)
  }
}

export function createUser(avatar) {
  let publicKey = null
  let privateKey = null
  do {
    const privateKeyBuf = crypto.randomBytes(32)
    privateKey = Secp256k1.uint256(privateKeyBuf, 16)
    publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)
  } while (
    !publicKey ||
    privateKey.gte(
      Secp256k1.uint256(
        'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141',
        16
      )
    )
  )

  const user = {
    publicKey: publicKey,
    privateKey: privateKey,
    avatar: avatar || 1,
    registered: false,
    progress: {
      chapter: 'chapter-1',
      lesson: 'genesis-1',
    },
  }

  saveUser(user)
}

export function saveUser(user) {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('SavingSatoshiUser', JSON.stringify(user))
}

export function loginUser() {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('SavingSatoshiLoggedIn', 'true')
}

export function logoutUser() {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('SavingSatoshiLoggedIn', 'false')
}

export function clearUser() {
  if (!process.browser) {
    return
  }
  window.localStorage.removeItem('SavingSatoshiUser')
  window.localStorage.removeItem('SavingSatoshiLoggedIn')
}

export function setUserLocale(locale) {
  window.localStorage.setItem('SavingSatoshiCurrentLocale', locale)
}

export function getUserLocale() {
  if (!process.browser) {
    return
  }
  try {
    return window.localStorage.getItem('SavingSatoshiCurrentLocale')
  } catch {
    return 'English'
  }
}
