'use client'

import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { CodeExample, Text, Table } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'
import { detectLanguage, Language } from 'lib/SavedCode'

export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH6PUT1',
}

export default function PutItTogether1({ lang }) {
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
  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
  const witness_flkepofs = new Witness()
  witness_flkepofs.push_item(Buffer.from('304402202e343143d5fcb0e3ece2ef11983d69dcaeb7407efe2ec7e3c830ab66927823c0022000ac4c1b3bcc857684e6bc2a36c07757695ef72b7bac70d2c877895798c4d1ba01', 'hex'));
  witness_flkepofs.push_item(Buffer.from('038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af', 'hex'));
  console.log(witness_flkepofs.serialize().toString('hex') === '0247304402202e343143d5fcb0e3ece2ef11983d69dcaeb7407efe2ec7e3c830ab66927823c0022000ac4c1b3bcc857684e6bc2a36c07757695ef72b7bac70d2c877895798c4d1ba0121038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af' && 'true')
  console.log("KILL")`,
    defaultFunction: {
      name: 'encode_message',
      args: ['text'],
    },
    defaultCode: `class Witness {
  constructor() {
    this.items = [];
  }

  push_item(data) {
    // YOUR CODE HERE
  }

  serialize() {
    // YOUR CODE HERE
  }
}`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === 'true') {
          return [true, 'Nicely Done']
        }
        return [
          false,
          'Ensure you are correctly pushing and serializing the data',
        ]
      }
      return [false, 'Return a value']
    },
    constraints: [
      {
        range: [7, 1, 8, 1],
        allowMultiline: true,
      },
      {
        range: [11, 1, 12, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
witness_flkepofs = Witness()
witness_flkepofs.push_item(bytes.fromhex("304402202e343143d5fcb0e3ece2ef11983d69dcaeb7407efe2ec7e3c830ab66927823c0022000ac4c1b3bcc857684e6bc2a36c07757695ef72b7bac70d2c877895798c4d1ba01"))
witness_flkepofs.push_item(bytes.fromhex("038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af"))
print(witness_flkepofs.serialize().hex() == '0247304402202e343143d5fcb0e3ece2ef11983d69dcaeb7407efe2ec7e3c830ab66927823c0022000ac4c1b3bcc857684e6bc2a36c07757695ef72b7bac70d2c877895798c4d1ba0121038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af' and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'encode_message',
      args: ['text'],
    },
    defaultCode: `from struct import pack

class Witness:
    def __init__(self):
        self.items = []

    def push_item(self, data):
        # YOUR CODE HERE

    def serialize(self):
        # YOUR CODE HERE
`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === 'true') {
          return [true, 'Nicely Done ']
        }
        return [false, 'Not a valid hex value']
      }
      return [false, 'Return a value']
    },
    constraints: [
      {
        range: [8, 1, 10, 1],
        allowMultiline: true,
      },
      {
        range: [11, 1, 12, 1],
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
        lessonKey={getLessonKey('chapter-6', 'put-it-together-1')}
        successMessage={t('chapter_six.put_it_together_one.success')}
      >
        <LessonInfo>
          <Text className="font-nunito text-2xl font-bold text-white">
            {t('chapter_six.put_it_together_one.heading')}
          </Text>
          <Text className="mt-2 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_one.paragraph_one')}
          </Text>
          <CodeExample
            className="mt-4 font-space-mono"
            code={`push_item(data: bytes)`}
            language="shell"
          />
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_one.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-2xl font-bold text-white">
            {t('chapter_six.put_it_together_one.subheading_one')}
          </Text>
          <Table
            headings={[
              t('chapter_six.put_it_together_one.headings.item_one'),
              t('chapter_six.put_it_together_one.headings.item_two'),
              t('chapter_six.put_it_together_one.headings.item_three'),
              t('chapter_six.put_it_together_one.headings.item_four'),
            ]}
            rows={[
              [
                t('chapter_six.put_it_together_one.table_one.row_one.item_one'),
                t('chapter_six.put_it_together_one.table_one.row_one.item_two'),
                t(
                  'chapter_six.put_it_together_one.table_one.row_one.item_three'
                ),
                t(
                  'chapter_six.put_it_together_one.table_one.row_one.item_four'
                ),
              ],
              [
                t('chapter_six.put_it_together_one.table_one.row_two.item_one'),
                t('chapter_six.put_it_together_one.table_one.row_two.item_two'),
                t(
                  'chapter_six.put_it_together_one.table_one.row_two.item_three'
                ),
                t(
                  'chapter_six.put_it_together_one.table_one.row_two.item_four'
                ),
              ],
            ]}
          />
          <Text className="mt-4 font-nunito text-2xl font-bold text-white">
            {t('chapter_six.put_it_together_one.subheading_two')}
          </Text>
          <Table
            headings={[
              t('chapter_six.put_it_together_one.headings.item_one'),
              t('chapter_six.put_it_together_one.headings.item_two'),
              t('chapter_six.put_it_together_one.headings.item_three'),
              t('chapter_six.put_it_together_one.headings.item_four'),
            ]}
            rows={[
              [
                t('chapter_six.put_it_together_one.table_two.row_one.item_one'),
                t('chapter_six.put_it_together_one.table_two.row_one.item_two'),
                t(
                  'chapter_six.put_it_together_one.table_two.row_one.item_three'
                ),
                t(
                  'chapter_six.put_it_together_one.table_two.row_one.item_four'
                ),
              ],
              [
                t('chapter_six.put_it_together_one.table_two.row_two.item_one'),
                t('chapter_six.put_it_together_one.table_two.row_two.item_two'),
                t(
                  'chapter_six.put_it_together_one.table_two.row_two.item_three'
                ),
                t(
                  'chapter_six.put_it_together_one.table_two.row_two.item_four'
                ),
              ],
            ]}
          />
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
