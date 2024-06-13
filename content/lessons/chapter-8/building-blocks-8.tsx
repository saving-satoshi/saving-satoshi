'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import Image from 'next/image'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'
import { countLines } from '../chapter-6/put-it-together-3'
import { detectLanguage, Language, organizeImports } from 'lib/SavedCode'

export const metadata = {
  title: 'chapter_eight.building_blocks_eight.title',
  navigation_title: 'chapter_eight.building_blocks_eight.nav_title',
  key: 'CH8BBK8',
}

export default function BuildingBlocks8({ lang }) {
  const t = useTranslations(lang)
  const [prevData, setPrevData] = useState<any>({ lesson_id: '', data: '' })
  const [isLoading, setIsLoading] = useState(true)
  const [combinedCode, setCombinedCode] = useState('')
  const cleanedCombinedCode =
    detectLanguage(combinedCode) === Language.JavaScript
      ? combinedCode.substring(combinedCode.indexOf('const getTxFee'))
      : combinedCode.substring(combinedCode.indexOf('def get_tx_fee(tx):'))
  const getPrevLessonData = async () => {
    const data = await getData('CH8BBK7')

    if (data) {
      setPrevData({
        lesson_id: 'CH6PUT1',
        data: data?.code?.getDecoded(),
      })
    }
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (prevData.data) {
      setCombinedCode(organizeImports('\n' + prevData.data))
    }
  }, [prevData.data])

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const fs = require('fs');

const state = JSON.parse(fs.readFileSync('chainstate.json', 'utf8'));
const answer = showtime();

const isValid = JSON.stringify(state.valid) === JSON.stringify(answer.valid)
const isInvalid = state.valid.length === answer.valid.length && state.valid.slice().sort().every((value, index) => value === answer.valid.slice().sort()[index]);
console.log((isValid && isInvalid) && 'true')
console.log("KILL")`,
    rangeToNotCollapse: [
      {
        start: countLines(cleanedCombinedCode) + 5,
        end: countLines(cleanedCombinedCode) + 8,
      },
    ],
    defaultFunction: {
      name: 'showtime',
      args: [''],
    },
    defaultCode: `const Bitcoinrpc = require('@savingsatoshi/bitcoin_rpcjs')
const Bitcoin = new Bitcoinrpc()

${cleanedCombinedCode}

const showtime = () => {
  // YOUR CODE HERE
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
        return [false, 'No output']
      }
    },
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
from json import load
with open(f"{'chainstate.json'}", "r") as file:
  state = load(file)
answer = showtime()
print(state["valid"] == answer["valid"] and all(ihash in state["invalid"] for ihash in answer["invalid"]))
print("KILL")`,
    defaultFunction: {
      name: 'showtime',
      args: [],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin
Bitcoin = Bitcoin()

${cleanedCombinedCode}

def showtime():
    # YOUR CODE HERE

`,

    rangeToNotCollapse: [
      {
        start: countLines(cleanedCombinedCode) + 2,
        end: countLines(cleanedCombinedCode) + 2,
      },
    ],
    validate: async (answer) => {
      if (answer) {
        if (answer === 'True') {
          return [true, '']
        } else {
          return [false, 'Recheck your methods']
        }
      } else {
        return [false, 'No output']
      }
    },
  }

  const config: EditorConfig = {
    defaultLanguage:
      detectLanguage(combinedCode) === Language.JavaScript
        ? 'javascript'
        : 'python',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState('javascript')
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }
  const jsonObj = `{
  "valid": [...],
  "invalid": [...]
}
`
  return (
    !isLoading &&
    combinedCode && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={getLessonKey('chapter-8', 'building-blocks-8')}
        successMessage={t('chapter_eight.building_blocks_eight.success')}
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo>
          <Title>{t('chapter_eight.building_blocks_eight.heading_one')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_three')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_four')}
          </Text>
          <Image
            src="/assets/images/block-structure-diagram.png"
            alt="Block Structure"
            width={900}
            height={100}
            quality={100}
            loading="eager"
            priority
            className="mt-4"
          />
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_eight.building_blocks_eight.heading_two')}
          </Text>
          <Text className=" font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_five')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_eight.building_blocks_eight.heading_three')}
          </Text>
          <Text className="font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_six')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_eight.paragraph_seven')}
          </Text>
          <CodeExample
            className="whitespace-break-spaces"
            language={language}
            code={jsonObj}
          />
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
