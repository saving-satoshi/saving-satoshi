'use client'

import { ScriptingChallenge, LessonInfo, Title } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  key: 'CH6PUT4',
}

export default function InOut4({ lang }) {
  const t = useTranslations(lang)

  const javascript = {
    program: `
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `compute_input_signature(index, key) {
  assert(typeof key === 'bigint');
  assert(Number.isInteger(index));
  // Helper function:
  // Find modular multiplicative inverse using Extended Euclidean Algorithm
  function invert(value, modulus = secp256k1.ORDER) {
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
  // k = random integer in [1, n-1]
  // R = G * k
  // r = x(R) mod n
  // s = (r * a + m) / k mod n
  // Extra Bitcoin rule from BIP 146
  // https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#user-content-LOW_S
  //   s = -s mod n, if s > n / 2
  // return (r, s)
  // YOUR CODE HERE
  return [r, s];
  }   
     
`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === 'true') {
          return [true, '']
        } else {
          return [false, 'recheck your methods']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
      }
    },
    constraints: [
      {
        range: [14, 1, 23, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `def compute_input_signature(self, index: int, key: int):
  # k = random integer in [1, n-1]
  # R = G * k
  # r = x(R) mod n
  # s = (r * a + m) / k mod n
  # Extra Bitcoin rule from BIP 146
  # https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#user-content-LOW_S
  #   s = -s mod n, if s > n / 2
  # return (r, s)
  assert isinstance(key, int)
  # YOUR CODE HERE
  return (r, s) 

`,
    validate: async (answer) => {
      if (answer) {
        if (answer === 'true') {
          return [true, '']
        } else {
          return [false, 'recheck your methods']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
      }
    },
    constraints: [
      {
        range: [10, 1, 14, 1],
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

  const [language, setLanguage] = useState(config.defaultLanguage)
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-6', 'in-out-4')}
      successMessage={t('chapter_six.in_out_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>{t('chapter_six.put_it_together_four.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.put_it_together_four.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.put_it_together_four.paragraph_two')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.put_it_together_four.paragraph_three')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
