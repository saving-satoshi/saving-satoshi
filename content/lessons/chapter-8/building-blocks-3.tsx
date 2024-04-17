'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_eight.building_blocks_three.title',
  key: 'CH8BBK3',
}

export default function BuildingBlocks3({ lang }) {
  const t = useTranslations(lang)

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const addr_pfajurn = 'bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj';
const value_uzglwbxj = 100000000;
const output_otcqjgpd = Output.from_options(addr_pfajurn, value_uzglwbxj);
const isCorrect_uflkrpot = output_otcqjgpd.serialize().toString('hex') === '00e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd1'
console.log(isCorrect_uflkrpot && 'true')
;
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const assert = require('assert');
const bech32 = require('@savingsatoshi/bech32js');
// Use the bech32 library to find the version and data components from the address
// See the library source code for the exact definition
// https://github.com/saving-satoshi/bech32js/blob/main/bech32.js

class Output {
  constructor() {
    this.value = 0;
    this.witness_version = 0;
    this.witness_data = Buffer.alloc(0);
  }

  static from_options(addr, value) {
    assert(Number.isInteger(value));
    const self = new this();
    // YOUR CODE HERE
    return self;
  }

  serialize() {
    // YOUR CODE HERE
  }
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
  }

  const python = {
    program: `
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin
# https://github.com/saving-satoshi/bitcoin_rpcpy/blob/main/bitcoin_rpcpy/bitcoin_rpc.py

print(Bitcoin.rpc())
`,
    validate: async (answer) => {
      if (answer) {
        if (answer === '3007592928481984.23') {
          return [true, '']
        } else {
          return [null, '']
        }
      } else {
        return [null, '']
      }
    },
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState('javascript')
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={getLessonKey('chapter-8', 'building_blocks-3')}
      successMessage={t('chapter_eight.building_blocks_three.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>{t('chapter_eight.building_blocks_three.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_three.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_three.paragraph_two')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
          code={`Bitcoin.rpc(method, params)`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_three.paragraph_three')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
