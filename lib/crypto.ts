import * as secp from '@noble/secp256k1'

import { KeyPair } from 'types'

export function generateKeypair(): KeyPair {
  const sec = secp.utils.randomPrivateKey()
  const pub = secp.getPublicKey(sec)

  return {
    pub: secp.etc.bytesToHex(pub),
    sec: secp.etc.bytesToHex(sec),
  }
}

export function generateKeypairFromPrivateKey(sec: string): KeyPair {
  const pub = secp.getPublicKey(secp.etc.hexToBytes(sec))

  return { pub: secp.etc.bytesToHex(pub), sec: sec }
}
