'use client'

import { useMediaQuery, useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { useEffect, useState } from 'react'
import { EditorConfig } from 'types'
import { CodeExample, LessonInfo, ScriptingChallenge, Text, Title } from 'ui'
import { secp256k1 } from 'ui/lesson/ScriptingChallenge/library'

export const metadata = {
  title: 'chapter_five.validate_signature_four.title',
  key: 'CH5VLS4',
}

const javascript = {
  program: `console.log(verify(sig_r_fe, sig_s_fe, key_ge, msg_fe));
console.log("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  hiddenRange: [1, 0, 126, 0],
  defaultCode: `${secp256k1.secp256k1js}
// Message digest from step 9: 
const msg_fe = 0x73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242n

// Signature values from step 10: 
const sig_r_fe = 0x8bd06d50f4a4b2bba64ccfb68f011e8babcec06b1cc07741fe686159abef8d69n
const sig_s_fe = 0x3f0754da6e85699666c61e12707c45a037a5142f6a1b43e7014979a8c16d87c9n

// Public key values from step 7: 
const key_ge = new GE(new FE("0x9d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee0663063"),new FE("0x6b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6")) 

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
`,
  validate: async (answer) => {
    // NO VALIDATION REQUIRED - THIS ISN'T EDITABLE BY THE USER
    return [true, 'The signature is invalid']
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(verify(sig_r, sig_s, key_ge, msg));
print("KILL")
`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  hiddenRange: [1, 0, 126, 0],
  defaultCode: `${secp256k1.secp256k1py}
# Message digest from step 9: 
msg = 0x73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242 

# Signature values from step 10: 
sig_r = 0x8bd06d50f4a4b2bba64ccfb68f011e8babcec06b1cc07741fe686159abef8d69 
sig_s = 0x3f0754da6e85699666c61e12707c45a037a5142f6a1b43e7014979a8c16d87c9 

# Public key values from step 7: 
key_ge = GE(0x9d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee0663063, 0x6b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6) 

# The verify function from step 8: 
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
`,
  validate: async (answer) => {
    // NO VALIDATION REQUIRED - THIS ISN'T EDITABLE BY THE USER
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
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

export default function ValidateSignature4({ lang }) {
  const t = useTranslations(lang)
  const [objectPosition, setObjectPosition] = useState<string | undefined>()
  const isMediumScreen = useMediaQuery({ width: 1024 })
  const [language, setLanguage] = useState(config.defaultLanguage)
  const [isLoading, setIsLoading] = useState(true)

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

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
      lessonKey={getLessonKey('chapter-5', 'validate-signature-4')}
      successMessage={t('chapter_five.validate_signature_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Title>{t('chapter_five.validate_signature_four.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_four.paragraph_one`)}
        </Text>
        <CodeExample
          className="mt-4"
          code={`mvG1WcMQV4cFq1aEN6uijg8FSCfcxtMEqS`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_four.paragraph_two`)}
        </Text>
        <CodeExample
          className="mt-4"
          code={`049d57ded01d3a7652a957cf86fd4c3d2a76e76e83d3c965e1dca45f1ee06630636b8bcbc3df3fbc9669efa2ccd5d7fa5a89fe1c0045684189f01ea915b8a746a6`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.validate_signature_four.paragraph_three`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
