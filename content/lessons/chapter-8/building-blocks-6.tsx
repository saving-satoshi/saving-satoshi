'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_eight.building_blocks_six.title',
  navigation_title: 'chapter_eight.building_blocks_six.nav_title',
  key: 'CH8BBK6',
}

export default function BuildingBlocks6({ lang }) {
  const t = useTranslations(lang)

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
if (getSubsidy(100000) === 5000000000 &&
getSubsidy(10000000) === 0 &&
getSubsidy(839999) === 625000000 &&
getSubsidy(840000) === 312500000) {
  console.log('true')
} else if (typeof getSubsidy(839999) === 'bigint') {
  console.log('be sure the subsidy is of type number')
} else if (getSubsidy(10000000) < 1) {
  console.log('Remember there is a maximum of 63 halvings, and the subsidy will never be a fraction of a satoshi');
} else {
  console.log('false')
}
console.log("KILL")`,
    defaultFunction: {
      name: 'getSubsidy',
      args: ['height'],
    },
    defaultCode: `function getSubsidy(height) {
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
        return [false, "can't find a return in both of the methods"]
      }
    },
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
print(get_subsidy(100000) == 5000000000 and get_subsidy(10000000) == 0 and get_subsidy(839999) == 625000000 and get_subsidy(840000) == 312500000 and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'get_subsidy',
      args: ['height'],
    },
    defaultCode: `def get_subsidy(height):
    # YOUR CODE HERE
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
      <LessonInfo>
        <Title>{t('chapter_eight.building_blocks_six.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_six.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4 whitespace-break-spaces font-space-mono"
          code={`BLOCK_SUBSIDY + TOTAL_TRANSACTION_FEES_IN_BLOCK = COINBASE_OUTPUT_VALUE`}
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
