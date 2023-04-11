const crypto = require('crypto')
const Secp256k1 = require('@lionello/secp256k1-js')

import { KeyPair } from 'types'

export function generateKeypair(): KeyPair {
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

  return { pub: publicKey, sec: privateKey }
}

export function generateKeyPairFromString(val: string): KeyPair {
  const privateKey = Secp256k1.uint256(val, 16)
  const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)

  return { pub: publicKey, sec: privateKey }
}
