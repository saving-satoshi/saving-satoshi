'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { EditorConfig } from 'types'
import { LessonInfo, ScriptingChallenge, Text, Title } from 'ui'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_five.validate_signature_four.title',
  navigation_title: 'chapter_five.validate_signature_four.nav_title',
  key: 'CH5VLS4',
}

const javascript = {
  program: `console.log(verify_keys(keys).toString());
console.log("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  rangeToNotCollapse: [
    {
      start: 70,
      end: 72,
    },
  ],
  defaultCode: `const secp256k1 = require('@savingsatoshi/secp256k1js')
// View the library source code
// https://github.com/saving-satoshi/challenges/blob/master/chapter4/javascript/lib/secp256k1.js

const GE = secp256k1.GE
const FE = secp256k1.FE
const ORDER = secp256k1.ORDER
// Message digest from step 9:
const msg_fe = 0x73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242n

// Signature values from step 10:
const sig_r_fe = 0x8bd06d50f4a4b2bba64ccfb68f011e8babcec06b1cc07741fe686159abef8d69n
const sig_s_fe = 0x3f0754da6e85699666c61e12707c45a037a5142f6a1b43e7014979a8c16d87c9n

// Public key values
// Remember they need to be of the format new GE(new FE(x.hex()), new FE(y.hex())) to be read by verify()
const keys = [
  "04bbb554daf8811b95c8af5272fa8b4e2d6335bf19fff24d3187b8781497299aa4d27c900c367e4e506d671a4ea3aa50843f182a090d701f3bc8e6578d2455d81e",
  "04cc679cd88b28444049aa9db8f88864ace38f79ba6310d0d3f027c9462a9f420befaaf888ce372cbf6f0ece99e5ada86436c960c1c0840a588ea7dbd78187445d",
  "049d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee06630636b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6",
  "0461bfb73040740c12f57146b3a7f2ccfd75b6cd2a0d5df7a789cfaeb77bda4dcd222df570946cb6de62d6b1a939f55da85859f575e84ba86c67c4aa97d85ba516",
  "042a87d97397b2c43dff63670e38e78db159daa0e1070ec42181d0ed44a7d1aa508d42bd9759659c4a3194dea56da71325fb25acda6ee931cd8b93172b5d0f3c8f",
  "04d1cdabaea3be5d8161b93b7e20b0375cefee0a36259d654185555deff881406a421384e927328e2dcb5ed87103365ef3007bd31e12591e5d1c56c83516db26ec"
]

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

function verify_keys(keys) {
  // YOUR CODE HERE
}
`,
  validate: async (answer) => {
    if (
      answer ===
      '049d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee06630636b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6'
    ) {
      return [
        true,
        'The signature is valid for this public key Vanderpoole used this public key, this was not Satoshi!',
      ]
    }
    if (answer === 'true') {
      return [
        false,
        'Make sure you are returning the public key Vanderpoole used and not a boolean value',
      ]
    }
    return [false, 'That is not quite right, try again.']
  },
}

const python = {
  program: `
print(verify_keys(keys));
print("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  rangeToNotCollapse: [
    {
      start: 49,
      end: 51,
    },
  ],
  defaultCode: `import secp256k1py.secp256k1 as SECP256K1
# View the library source code
# https://github.com/saving-satoshi/challenges/blob/master/chapter4/python/lib/secp256k1.py

GE = SECP256K1.GE
G = SECP256K1.G
# Message digest from step 9:
msg = 0x73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242

# Signature values from step 10:
sig_r = 0x8bd06d50f4a4b2bba64ccfb68f011e8babcec06b1cc07741fe686159abef8d69
sig_s = 0x3f0754da6e85699666c61e12707c45a037a5142f6a1b43e7014979a8c16d87c9

# Public key values
# Remember they need to be of the format new GE(new FE(x.hex()), new FE(y.hex())) to be read by verify()
keys = [
    "04bbb554daf8811b95c8af5272fa8b4e2d6335bf19fff24d3187b8781497299aa4d27c900c367e4e506d671a4ea3aa50843f182a090d701f3bc8e6578d2455d81e",
    "04cc679cd88b28444049aa9db8f88864ace38f79ba6310d0d3f027c9462a9f420befaaf888ce372cbf6f0ece99e5ada86436c960c1c0840a588ea7dbd78187445d",
    "049d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee06630636b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6",
    "0461bfb73040740c12f57146b3a7f2ccfd75b6cd2a0d5df7a789cfaeb77bda4dcd222df570946cb6de62d6b1a939f55da85859f575e84ba86c67c4aa97d85ba516",
    "042a87d97397b2c43dff63670e38e78db159daa0e1070ec42181d0ed44a7d1aa508d42bd9759659c4a3194dea56da71325fb25acda6ee931cd8b93172b5d0f3c8f",
    "04d1cdabaea3be5d8161b93b7e20b0375cefee0a36259d654185555deff881406a421384e927328e2dcb5ed87103365ef3007bd31e12591e5d1c56c83516db26ec"
]

def verify(r, s, key, msg):
    if r == 0 or r >= GE.ORDER:
        print("FALSE - invalid r value")
        return false

    if s == 0 or s >= GE.ORDER:
        print("FALSE - invalid s value")
        return false
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

def verify_keys(keys):
    # YOUR CODE HERE
`,
  validate: async (answer) => {
    if (
      answer ===
      '049d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee06630636b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6'
    ) {
      return [
        true,
        'The signature is valid for this public key Vanderpoole used this public key, this was not Satoshi!',
      ]
    }
    if (answer === 'True') {
      return [
        false,
        'Make sure you are returning the public key Vanderpoole used and not a boolean value',
      ]
    }
    return [false, 'That is not quite right, try again.']
  },
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function ValidateSignature4({ lang }) {
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
      successMessage={t('chapter_five.validate_signature_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Title>{t('chapter_five.validate_signature_four.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_four.paragraph_one`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_four.paragraph_two`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_four.paragraph_three`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
