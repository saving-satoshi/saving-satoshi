'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_eight.building_blocks_six.title',
  key: 'CH8BBK6',
}

export default function BuildingBlocks6({ lang }) {
  const t = useTranslations(lang)

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
if (get_subsidy(100000) === 5000000000 &&
get_subsidy(10000000) === 0 &&
get_subsidy(839999) === 625000000 &&
get_subsidy(840000) === 312500000) {
  console.log('true')
} else {
  console.log('false')
}
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `function get_subsidy(height) {
  let subsidy = 5000000000
  const halvings = Math.floor(height / 210000)
  if (halvings >= 33) {
      return 0
  }
  if (halvings === 0) {
    return subsidy
  }
  let postHalvingSubsidy = Math.floor(subsidy / 2) >>> (halvings - 1)
  return postHalvingSubsidy
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
    program: `# BEGIN VALIDATION BLOCK
print(get_subsidy(100000) == 5000000000 and get_subsidy(10000000) == 0 and get_subsidy(839999) == 625000000 and get_subsidy(840000) == 312500000 and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `def get_subsidy(height):
    halvings = height // 210000
    if halvings >= 64:
        return 0
    subsidy = 5000000000
    subsidy >>= halvings
    return subsidy
`,
    validate: async (answer) => {
      if (answer) {
        if (answer === 'true') {
          return [true, '']
        } else {
          return [false, 'recheck your methods']
        }
      } else {
        return [false, "can't find a return in the function"]
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
      lessonKey={getLessonKey('chapter-8', 'building-blocks-6')}
      successMessage={t('chapter_eight.building_blocks_six.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>4. {t('chapter_eight.building_blocks_six.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
          code={`BLOCK_SUBSIDY + TOTAL_TRASNACTION_FEES_IN_BLOCK = COINBASE_OUTPUT_VALUE`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_two')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_three')}
        </Text>
        <ul className="list-disc pl-5 font-nunito">
          <li className="text-lg md:text-xl">
            {t('chapter_eight.building_blocks_six.list_one')}
          </li>
          <li className="text-lg md:text-xl">
            {t('chapter_eight.building_blocks_six.list_two')}
          </li>
          <li className="text-lg md:text-xl">
            {t('chapter_eight.building_blocks_six.list_three')}
          </li>
        </ul>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_four')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_five')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_six')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
