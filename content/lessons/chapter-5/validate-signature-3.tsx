'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { EditorConfig } from 'types'
import { LessonInfo, ScriptingChallenge, Text, Title } from 'ui'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_five.validate_signature_three.title',
  navigation_title: 'chapter_five.validate_signature_three.nav_title',
  key: 'CH5VLS3',
}

const javascript = {
  program: `console.log(verify(r, s, keyGE, msg).toString());
console.log("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  rangesToCollapse: [
    {
      start: 90,
      end: 95,
    },
  ],
  defaultCode: `const { Hash } = require('crypto')
const secp256k1 = require('@savingsatoshi/secp256k1js')
// View the library source code
// https://github.com/saving-satoshi/secp256k1js/blob/main/secp256k1.js

const GE = secp256k1.GE
const FE = secp256k1.FE
const ORDER = secp256k1.ORDER

const publicKeyX = "0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c"
const publicKeyY = "0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3"

// Defined by Bitcoin message signing protocol
const prefix = "Bitcoin Signed Message:\\n"

// Provided by Vanderpoole
let text =  "I am Vanderpoole and I have control of the private key Satoshi\\n"
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n"
text += "This message is signed with the same private key."

// Encoded Signature
vpSig = "H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k="

function encode_message(text) {
  const prefix = Buffer.from('Bitcoin Signed Message:\\n', 'ascii');
  const textBytes = Buffer.from(text, 'ascii');
  const vector = Buffer.concat([
    Buffer.from([prefix.length]),
    prefix,
    Buffer.from([textBytes.length]),
    textBytes
  ])
  const singleHash = Hash('sha256').update(vector).digest();
  const doubleHash = Hash('sha256').update(singleHash).digest();
  const msgHex = doubleHash.toString('hex');
  return BigInt('0x' + msgHex)
}

function decode_sig(vpSig) {
  const vpSigBytes = Buffer.from(vpSig, 'base64');
  const vpSigR = BigInt('0x' + vpSigBytes.slice(1, 33).toString('hex'));
  const vpSigS = BigInt('0x' + vpSigBytes.slice(33).toString('hex'));
  return [vpSigR, vpSigS]
}

function verify(sig_r, sig_s, key, msg) {
  // Verify an ECDSA signature given a public key and a message.
  // All input values will be 32-byte BigInt()'s.
  // Start by creating a curve point representation of the public key
  // Next, check the range limits of the signature values
  if (sig_r == 0n || sig_r >= ORDER) {
    console.log('invalid r value');
    return false;
  }
  if (sig_s == 0n || sig_s >= ORDER) {
    console.log('invalid s value');
    return false;
  }
  // Helper function:
  // Find modular multiplicative inverse using Extended Euclidean Algorithm
  function invert(value, modulus = ORDER) {
    let x0 = 0n;
    let x1 = 1n;
    let a = value;
    let m = modulus;

    while (a > 1n) {
      const q = a / m;
      let t = m;
      m = a % m;
      a = t;
      t = x0;
      x0 = x1 - q * x0;
      x1 = t;
    }

    if (x1 < 0n)
      x1 += modulus;

    return x1;
  }

  const sig_s_inverted = invert(sig_s);
  const u1 = (msg * sig_s_inverted) % ORDER;
  const u2 = (sig_r * sig_s_inverted) % ORDER;
  const R = (secp256k1.G.mul(u1)).add(key.mul(u2));
  return R.x.equals(new FE(sig_r));
}

// Define the necessary params for the verify() function
// YOUR CODE HERE
const [r, s] =
const msg =
const keyGE =
`,
  validate: async (answer) => {
    if (answer === 'false') {
      return [true, 'The signature is invalid']
    }
    return [false, 'Check your methods']
  },
}

const python = {
  program: `print(verify(r, s, key_ge, msg))
print("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  rangesToCollapse: [
    {
      start: 68,
      end: 73,
    },
  ],
  defaultCode: `import base64
import hashlib
import secp256k1py.secp256k1 as SECP256K1
# View the library source code
# https://github.com/saving-satoshi/secp256k1py/blob/main/secp256k1py/secp256k1.py

GE = SECP256K1.GE
G = SECP256K1.G

public_key_x = 0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c
public_key_y = 0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3

# Defined by Bitcoin message signing protocol
prefix = "Bitcoin Signed Message:\\n"

# Provided by Vanderpoole
text =  "I am Vanderpoole and I have control of the private key Satoshi\\n"
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n"
text += "This message is signed with the same private key."

# Encoded Signature
vp_sig = "H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k="

def encode_message(text):
    # Given an ascii-encoded text message, serialize a byte array
    # with the Bitcoin protocol prefix string followed by the text
    # and both components preceded by a length byte.
    # Returns a 32-byte hex value.
    prefix = "Bitcoin Signed Message:\\n"
    vector = bytes([len(prefix)]) + bytes(prefix, 'ascii') + bytes([len(text)]) + bytes(text, 'ascii')
    single_hash = hashlib.new('sha256', vector).digest()
    double_hash = hashlib.new('sha256', single_hash).digest()
    return int.from_bytes(double_hash, "big")

def decode_sig(base64_sig):
    # Decode a base64-encoded signature string into its ECDSA
    # signature elements r and s, returned as a tuple of integers.
    # Remember to throw away the first byte of metadata from the signature string!
    vp_sig_bytes = base64.b64decode(base64_sig)
    vp_sig_r = int.from_bytes(vp_sig_bytes[1:33])
    vp_sig_s = int.from_bytes(vp_sig_bytes[33:])
    return (vp_sig_r, vp_sig_s)

def verify(sig_r, sig_s, key, msg):
  if r == 0 or r >= GE.ORDER:
    print("FALSE - invalid r value")
    return False

  if s == 0 or s >= GE.ORDER:
    print("FALSE - invalid s value")
    return False
  # Calculate the inverse of sig_s modulo ORDER
  sig_s_inverted = pow(sig_s, -1, GE.ORDER)

  # Calculate u1 and u2
  u1 = (msg * sig_s_inverted) % GE.ORDER
  u2 = (sig_r * sig_s_inverted) % GE.ORDER

  # Calculate R = u1 * G + u2 * public key
  # We need to use the appropriate methods for point multiplication and addition
  R1 = GE.mul((u1, G))
  R2 = GE.mul((u2, key))
  R = R1 + R2

  # Verify if the x-coordinate of R modulo ORDER is equal to sig_r
  return sig_r == int(R.x) % GE.ORDER

# Define the necessary params for the verify() function
# YOUR CODE HERE
r, s =
msg =
key_ge =
`,
  validate: async (answer) => {
    if (answer === 'False') {
      return [true, 'The signature is invalid']
    }
    return [false, 'Check your methods']
  },
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function ValidateSignature3({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={metadata.key}
      successMessage={t('chapter_five.validate_signature_three.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Title>{t('chapter_five.validate_signature_three.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_three.paragraph_one`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_three.paragraph_two`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
