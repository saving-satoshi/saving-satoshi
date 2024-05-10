'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
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

const lessonsToLoad = ['CH8BBK6', 'CH8BBK5']

export const allLessonsAreLoaded = (data) => {
  return lessonsToLoad.every((lesson) => data[lesson])
}

export default function BuildingBlocks8({ lang }) {
  const t = useTranslations(lang)
  const [prevData, setPrevData] = useState<any>({ lesson: '', data: '' })
  const [isLoading, setIsLoading] = useState(true)
  const [combinedCode, setCombinedCode] = useState('')
  const cleanedCombinedCode =
    detectLanguage(combinedCode) === Language.JavaScript
      ? combinedCode.substring(combinedCode.indexOf('const getTxFee'))
      : combinedCode.substring(combinedCode.indexOf('def get_tx_fee(tx):'))
  const getPrevLessonData = async () => {
    const dataMap = {}
    const data = await Promise.all(
      lessonsToLoad.map(async (lesson) => {
        const dataFromServer = await getData(lesson)
        dataMap[lesson] = dataFromServer?.code?.getDecoded()
      })
    )
    if (data) {
      setPrevData(dataMap)
    }
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (prevData && allLessonsAreLoaded(prevData)) {
      setCombinedCode(
        organizeImports(prevData['CH8BBK5'] + '\n' + prevData['CH8BBK6'] + '\n')
      )
    }
  }, [prevData])

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK

console.log("KILL")`,
    rangeToNotCollapse: [
      {
        start: countLines(cleanedCombinedCode) + 3,
        end: countLines(cleanedCombinedCode) + 3,
      },
    ],
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const Bitcoin = require('@0tuedon/bitcoin_rpcjs')

function validateBlock(block) {
  // YOUR CODE HERE
}
`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === '88fd124d747cde1d8494c87') {
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
print("KILL")`,
    defaultFunction: {
      name: 'showtime',
      args: [],
    },
    defaultCode: `

def validate_block(block):
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
        if (
          answer ===
          '88fd124d747cde1d8494d589ec6b82ce11356dd869823dfec8e84b111a72bc87'
        ) {
          return [true, '']
        } else {
          return [false, 'recheck your methods']
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
        <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
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
