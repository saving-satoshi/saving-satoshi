'use client'

import { getData } from 'api/data'
import { useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { useEffect, useState } from 'react'
import { Data, EditorConfig } from 'types'
import { CodeExample, LessonInfo, ScriptingChallenge, Text } from 'ui'

export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH6PUT6',
}

export default function PutItTogether6({ lang }) {
  const t = useTranslations(lang)
  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    const data = await getData('CH4ADR2')
    if (data?.answer) {
      setPrevData({
        lesson_id: 'CH4ADR2',
        data: data.answer,
      })
    }
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const javascript = {
    program: `
console.log(tx.serialize().toString('hex'));
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `// UTXO from chapter 6 step 1 (mining pool payout)
const txid = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout = 1;
const value = 650000000;

// From chapter 4 (we will reuse address for change)
const priv = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503en;
const compressed_pub = Buffer.from('038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af', 'hex');
const pubkey_hash = 'b234aee5ee74d7615c075b4fe81fd8ace54137f2';
const addr = 'bc1qkg62ae0wwntkzhq8td87s87c4nj5zdlj2ga8j7';

// Explained in step 6
const scriptcode = '1976a914' + pubkey_hash + '88ac';

const tx = new Transaction();
// YOUR CODE HERE
`,
    validate: async (answer: string) => {
      if (
        answer.slice(0, 248) !==
        '020000000001018e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff0200e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd19851c82000000000160014b234aee5ee74d7615c075b4fe81fd8ace54137f202'
      ) {
        return [false, 'Nope! Try again.']
      }
      if (answer.slice(250, 252) !== '30') {
        return [false, 'Nope! Try again.']
      }
      const size = (parseInt(answer.slice(248, 250), 16) - 1) * 2
      if (answer.slice(250 + size, 250 + size + 4) !== '0121') {
        return [false, 'Nope! Try again.']
      }
      if (answer.slice(-8) !== '00000000') {
        return [false, 'Nope! Try again.']
      }
      return [true, 'Nicely Done']
    },
    constraints: [
      {
        range: [12, 1, 12, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `print(tx.serialize().hex())
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `# UTXO from chapter 6 step 1 (mining pool payout)
txid = "8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e"
vout = 1
value = 650000000

# From chapter 4 (we will reuse address for change)
priv = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503e
compressed_pub = bytes.fromhex("038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af")
pubkey_hash = "b234aee5ee74d7615c075b4fe81fd8ace54137f2"
addr = "bc1qkg62ae0wwntkzhq8td87s87c4nj5zdlj2ga8j7"

# Explained in step 6
scriptcode = "1976a914" + pubkey_hash + "88ac"

tx = Transaction()
# YOUR CODE HERE
`,
    validate: async (answer: string) => {
      if (
        answer.slice(0, 248) !==
        '020000000001018e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff0200e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd19851c82000000000160014b234aee5ee74d7615c075b4fe81fd8ace54137f202'
      ) {
        return [false, 'Nope! Try again.']
      }
      if (answer.slice(250, 252) !== '30') {
        return [false, 'Nope! Try again.']
      }
      const size = (parseInt(answer.slice(248, 250), 16) - 1) * 2
      if (answer.slice(250 + size, 250 + size + 4) !== '0121') {
        return [false, 'Nope! Try again.']
      }
      if (answer.slice(-8) !== '00000000') {
        return [false, 'Nope! Try again.']
      }
      return [true, 'Nicely Done']
    },
    constraints: [
      {
        range: [11, 1, 11, 1],
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
      saveData
      lessonKey={getLessonKey('chapter-4', 'public-key-3')}
      successMessage={t('chapter_four.public_key_three.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_six.put_it_together_six.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_six.put_it_together_six.paragraph_two`)}
        </Text>
        <ul className="list-inside list-disc font-nunito text-white">
          <li className="text-lg md:text-xl" style={{ overflow: 'scroll' }}>
            {t('chapter_six.put_it_together_six.bullet_one')}
          </li>
          <li className="text-lg md:text-xl" style={{ overflow: 'scroll' }}>
            {t('chapter_six.put_it_together_six.bullet_two')}
          </li>
        </ul>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_six.put_it_together_six.paragraph_three`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_six.put_it_together_six.paragraph_four`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
