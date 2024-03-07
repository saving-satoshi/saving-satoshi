'use client'

import { useDataContext } from 'contexts/DataContext'
import { useMediaQuery, useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { getLanguageString } from 'lib/SavedCode'
import { useEffect, useState } from 'react'
import { EditorConfig } from 'types'
import { LessonInfo, ScriptingChallenge, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_five.title',
  key: 'CH5VFS5',
}

const javascript = {
  program: `console.log(verify(sig_r, sig_s, pubkey_x, pubkey_y, msg));
console.log("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `const secp256k1 = require('@savingsatoshi/secp256k1js')

const GE = secp256k1.GE
const FE = secp256k1.FE
const ORDER = secp256k1.ORDER
// Message digest from step 5:
const msg = 0x7a05c6145f10101e9d6325494245adf1297d80f8f38d4d576d57cdba220bcb19n;

// Signature values from step 6:
const sig_r = 0x4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41n;
const sig_s = 0x181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09n;

// Public key values from step 7:
const pubkey_x = 0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cn;
const pubkey_y = 0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3n;

function verify(sig_r, sig_s, pubkey_x, pubkey_y, msg) {
  // Verify an ECDSA signature given a public key and a message.
  // All input values will be 32-byte integers.

  // Start by creating a curve point representation of the public key
  const key = new GE(new FE(pubkey_x), new FE(pubkey_y));

  // Next, check the range limits of the signature values
  if (sig_r === 0n || sig_r >= ORDER) {
  	console.log("invalid r value");
  	return false;
  }
  if (sig_s === 0n || sig_s >= ORDER) {
  	console.log("invalid s value");
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

  // Implement ECDSA and return a boolean
  // u1 = m / s mod n
  // u2 = r / s mod n
  // R = G * u1 + A * u2
  // r == x(R) mod n
  // YOUR CODE HERE!

}
`,
  validate: async (answer) => {
    // for some reason the answer is coming through with a lot of ansi characters included
    // so we will need to strip them before doing the comparison.
    const cleanedAnswer = answer.replace(/\u001b\[[0-9;]*m/g, '')
    if (cleanedAnswer !== 'true') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 66, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(verify(sig_r, sig_s, pubkey_x, pubkey_y, msg));
print("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `import secp256k1py.secp256k1 as SECP256K1

GE = SECP256K1.GE
G = SECP256K1.G

# Message digest from step 5:
msg = 0x7a05c6145f10101e9d6325494245adf1297d80f8f38d4d576d57cdba220bcb19

# Signature values from step 6:
sig_r = 0x4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41
sig_s = 0x181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09

# Public key values from step 7:
pubkey_x = 0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c
pubkey_y = 0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3

def verify(sig_r, sig_s, pubkey_x, pubkey_y, msg):
    # Verify an ECDSA signature given a public key and a message.
    # All input values will be 32-byte integers.

    # Start by creating a curve point representation of the public key
    key = GE(pubkey_x, pubkey_y)

    # Next, check the range limits of the signature values
    if sig_r == 0 or sig_r >= GE.ORDER:
    	print("invalid r value")
    	return False
    if sig_s == 0 or sig_s >= GE.ORDER:
    	print("invalid s value")
    	return False

    # Implement ECDSA and return a boolean
    #   u1 = m / s mod n
    #   u2 = r / s mod n
    #   R = G * u1 + A * u2
    #   r == x(R) mod n
    # YOUR CODE HERE!
`,
  validate: async (answer) => {
    if (answer !== 'True') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 38, 1],
      allowMultiline: true,
    },
  ],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function VerifySignature5({ lang }) {
  const t = useTranslations(lang)
  const { currentLanguage } = useDataContext()
  const [objectPosition, setObjectPosition] = useState<string | undefined>()
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  const isMediumScreen = useMediaQuery({ width: 1024 })

  useEffect(() => {
    if (isMediumScreen) {
      setObjectPosition('object-left')
    } else {
      setObjectPosition('object-bottom')
    }
  }, [isMediumScreen])

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-5', 'verify-signature-5')}
      successMessage={t('chapter_five.verify_signature_five.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_five.verify_signature_five.heading')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_five.paragraph_one`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_five.paragraph_two`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_five.paragraph_three`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_five.paragraph_four`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(
            `chapter_five.verify_signature_five.${language}.paragraph_five_part_one`
          )}{' '}
          {t(
            `chapter_five.verify_signature_five.${language}.paragraph_five_part_two`
          )}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
