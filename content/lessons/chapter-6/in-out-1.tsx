'use client'

import { useDataContext } from 'contexts/DataContext'
import { useProceed, useTranslations } from 'hooks'
import { getLanguageString } from 'lib/SavedCode'
import { useState } from 'react'
import { Button } from 'shared'
import { PlainEditorConfig } from 'types'
import { LessonInfo, Text } from 'ui'
import PlainEditorWrapper from 'ui/lesson/ScriptingChallenge/PlainEditorWrapper'

export const metadata = {
  title: 'chapter_six.in_out_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH6INO1',
}

export default function InOut1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)
  const { currentLanguage } = useDataContext()

  const javascript = {
    defaultCode: `const secp256k1 = require('@savingsatoshi/secp256k1js')
// Multiply the private key by the ECDSA generator point G to
// produce a new curve point which is the public key.
// Return that curve point (also known as a group element)
// which will be an instance of secp256k1.GE
// See the library source code for the exact definition
// https://github.com/saving-satoshi/challenges/blob/master/chapter4/javascript/lib/secp256k1.js
const G = secp256k1.G

function privateKeyToPublicKey(privateKey) {

}
`,
  }

  const python = {
    defaultCode: `import secp256k1py.secp256k1 as SECP256K1
# Multiply the private key by the ECDSA generator point G to
# produce a new curve point which is the public key.
# Return that curve point (also known as a group element)
# which will be an instance of secp256k1.GE
# See the library source code for the exact definition
# https://github.com/saving-satoshi/challenges/blob/master/chapter4/python/lib/secp256k1.py
G = SECP256K1.FAST_G

def privatekey_to_publickey(private_key):
`,
  }

  const config: PlainEditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <PlainEditorWrapper
      fixedCode={`$ bitcoin-cli listunspent

[
  {
    "txid": "74149a689ce95562309cf4c404ef6ca91e76b6a19ef25e9625e9c13d93fac4e1",
    "vout": 0,
    "address": "bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs",
    "label": "",
    "scriptPubKey": "0014da9a3a9443424aec7ab7a628777f7130e7c92789",
    "amount": 1.61000000,
    "confirmations": 341,
    "spendable": true,
    "solvable": true,
    "desc": "wpkh([a73804d3/0'/0'/0']02ab3d3cb82c1eb89168824b20f667224d868250dedec69177012e5a26c5221ae8)#5mf00k95",
    "parent_descs": [
    ],
    "safe": true
  }
]
    `}
    >
      <LessonInfo>
        <Text className="text-lg md:text-xl">
          {t('chapter_six.in_out_one.paragraph_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_six.in_out_one.paragraph_two')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_six.in_out_one.paragraph_three')}
        </Text>
        <div className="flex justify-start">
          <Button onClick={proceed} classes="mt-10 md:w-fit w-full">
            {t('shared.next')}
          </Button>
        </div>
      </LessonInfo>
    </PlainEditorWrapper>
  )
}
