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
  title: 'chapter_eight.building_blocks_seven.title',
  navigation_title: 'chapter_eight.building_blocks_seven.nav_title',
  key: 'CH8BBK7',
}

const lessonsToLoad = ['CH8BBK6', 'CH8BBK5']

export const allLessonsAreLoaded = (data) => {
  return lessonsToLoad.every((lesson) => data[lesson])
}

export default function BuildingBlocks7({ lang }) {
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

  console.log(countLines(cleanedCombinedCode))
  useEffect(() => {
    if (prevData && allLessonsAreLoaded(prevData)) {
      setCombinedCode(
        organizeImports(prevData['CH8BBK5'] + '\n' + prevData['CH8BBK6'] + '\n')
      )
    }
  }, [prevData])

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
let HEIGHT = 6929851
let candidates = Bitcoin.rpc("getblocksbyheight", HEIGHT)
for (const bhash of candidates){

 let block = Bitcoin.rpc("getblock", bhash)

  if(validateBlock(block)){
    console.log(bhash)
  }

}
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

${cleanedCombinedCode}

function validateBlock(block) {
  
}
`,
    validate: async (answer: string) => {
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

  const python = {
    program: `# BEGIN VALIDATION BLOCK
HEIGHT = 6929851
candidates = Bitcoin.rpc("getblocksbyheight", HEIGHT)

for bhash in candidates:
  block = Bitcoin.rpc("getblock", bhash)
  if validate_block(block):
      print(bhash)
print("KILL")`,
    defaultFunction: {
      name: 'validate_block',
      args: ['block'],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin

${cleanedCombinedCode}

def validate_block(block):
  # Code here

`,

    rangeToNotCollapse: [
      {
        start: countLines(cleanedCombinedCode) + 4,
        end: countLines(cleanedCombinedCode) + 4,
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
  const pyValidation = `HEIGHT = 6929851
  candidates = Bitcoin.rpc("getblocksbyheight", HEIGHT)
  for bhash in candidates:
      block = Bitcoin.rpc("getblock", bhash)
      if validate_block(block):
          print(bhash)
          break`
  const jsValidation = `const HEIGHT = 6929851
const candidates = Bitcoin.rpc("getblocksbyheight", HEIGHT)
for (const bhash of candidates) {
let block = Bitcoin.rpc("getblock", bhash)
if(validateBlock(block)){
  return bhash;
    }
  }
  `
  const codeValidation = language === 'javascript' ? jsValidation : pyValidation
  return (
    !isLoading &&
    combinedCode && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={getLessonKey('chapter-8', 'building-blocks-7')}
        successMessage={t('chapter_eight.building_blocks_seven.success')}
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
          <Title>4. {t('chapter_eight.building_blocks_six.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_seven.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_seven.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_seven.paragraph_three')}
          </Text>
          <CodeExample
            className="whitespace-pre-wrap"
            language={language}
            code={codeValidation}
          />
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
