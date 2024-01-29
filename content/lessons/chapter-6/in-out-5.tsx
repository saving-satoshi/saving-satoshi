'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'
import { detectLanguage, Language } from 'lib/SavedCode'

export const metadata = {
  title: 'chapter_six.in_out_five.title',
  key: 'CH6INO5',
}

export default function InOut5({ lang }) {
  const t = useTranslations(lang)
  const [prevData, setPrevData] = useState<any>({ lesson: '', data: '' })
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    const data = await getData('CH6INO4')
    if (data) {
      setPrevData({
        lesson_id: 'CH6INO4',
        data: data?.code?.getDecoded(),
      })
    }
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const tableHeading = [
    t('chapter_six.in_out_five.table.heading.one'),
    t('chapter_six.in_out_five.table.heading.two'),
    t('chapter_six.in_out_five.table.heading.three'),
    t('chapter_six.in_out_five.table.heading.four'),
  ]
  const outputRows = [
    [
      t('chapter_six.in_out_five.table.row_one.column.one'),
      t('chapter_six.in_out_five.table.row_one.column.two'),
      t('chapter_six.in_out_five.table.row_one.column.three'),
      t('chapter_six.in_out_five.table.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_five.table.row_two.column.one'),
      t('chapter_six.in_out_five.table.row_two.column.two'),
      t('chapter_six.in_out_five.table.row_two.column.three'),
      t('chapter_six.in_out_five.table.row_two.column.four'),
    ],
    [
      t('chapter_six.in_out_five.table.row_three.column.one'),
      t('chapter_six.in_out_five.table.row_three.column.two'),
      t('chapter_six.in_out_five.table.row_three.column.three'),
      t('chapter_six.in_out_five.table.row_three.column.four'),
    ],
    [
      t('chapter_six.in_out_five.table.row_four.column.one'),
      t('chapter_six.in_out_five.table.row_four.column.two'),
      t('chapter_six.in_out_five.table.row_four.column.three'),
      t('chapter_six.in_out_five.table.row_four.column.four'),
    ],
    [
      t('chapter_six.in_out_five.table.row_five.column.one'),
      t('chapter_six.in_out_five.table.row_five.column.two'),
      t('chapter_six.in_out_five.table.row_five.column.three'),
      t('chapter_six.in_out_five.table.row_five.column.four'),
    ],
  ]

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const addr = 'bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj';
const value = 100000000;
const output = Output.from_options(addr, value);
const isCorrect = output.serialize().toString('hex') === '00e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd1'
console.log(isCorrect && 'true')
;
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const assert = require('assert');
const bech32 = require('@savingsatoshi/bech32js');

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
    constraints: [
      {
        range: [14, 1, 23, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
addr = "bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj"
value = 100000000
output = Output.from_options(addr, value)
is_correct = output.serialize().hex() == "00e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd1"
print(is_correct and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `from struct import pack
from bech32py import bech32

class Output:
  def __init__(self):
    self.value = 0
    self.witness_version = 0
    self.witness_data = b""

  @classmethod
  def from_options(cls, addr: str, value: int):
    assert isinstance(value, int)
    self = cls()
    # YOUR CODE HERE
    return self

  def serialize(self):
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
        return [false, "can't find a return in both of the methods"]
      }
    },
    constraints: [
      {
        range: [14, 1, 21, 1],
        allowMultiline: true,
      },
    ],
  }

  const config: EditorConfig = {
    defaultLanguage:
      detectLanguage(prevData.data) === Language.JavaScript
        ? 'javascript'
        : 'python',
    languages: {
      javascript,
      python,
    },
  }

  return (
    !isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={getLessonKey('chapter-6', 'in-out-5')}
        successMessage={t('chapter_six.in_out_five.success')}
      >
        <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
          <Title>{t('chapter_six.in_out_four.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.in_out_four.paragraph_one')}
          </Text>
          <CodeExample
            className="mt-4"
            code={`from_options(addr: str, value: int)`}
            language="shell"
          />
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.in_out_four.paragraph_two')}
          </Text>

          <div className="mt-4">
            <Title>{t('chapter_six.in_out_four.heading_two')}</Title>
          </div>
          <div className="mt-4 flex-col gap-4">
            <Table headings={tableHeading} rows={outputRows} />
          </div>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
