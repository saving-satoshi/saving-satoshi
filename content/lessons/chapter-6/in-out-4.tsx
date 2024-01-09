'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_six.in_out_four.title',
  key: 'CH6INO4',
}

export default function InOut4({ lang }) {
  const t = useTranslations(lang)
  const tableHeading = [
    t('chapter_six.in_out_four.table.heading.one'),
    t('chapter_six.in_out_four.table.heading.two'),
    t('chapter_six.in_out_four.table.heading.three'),
    t('chapter_six.in_out_four.table.heading.four'),
  ]
  const outputRows = [
    [
      t('chapter_six.in_out_four.table.row_one.column.one'),
      t('chapter_six.in_out_four.table.row_one.column.two'),
      t('chapter_six.in_out_four.table.row_one.column.three'),
      t('chapter_six.in_out_four.table.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_two.column.one'),
      t('chapter_six.in_out_four.table.row_two.column.two'),
      t('chapter_six.in_out_four.table.row_two.column.three'),
      t('chapter_six.in_out_four.table.row_two.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_three.column.one'),
      t('chapter_six.in_out_four.table.row_three.column.two'),
      t('chapter_six.in_out_four.table.row_three.column.three'),
      t('chapter_six.in_out_four.table.row_three.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_four.column.one'),
      t('chapter_six.in_out_four.table.row_four.column.two'),
      t('chapter_six.in_out_four.table.row_four.column.three'),
      t('chapter_six.in_out_four.table.row_four.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_five.column.one'),
      t('chapter_six.in_out_four.table.row_five.column.two'),
      t('chapter_six.in_out_four.table.row_five.column.three'),
      t('chapter_six.in_out_four.table.row_five.column.four'),
    ],
  ]

  const { account } = useAuthContext()

  const javascript = {
    program: `
const testAddress = 'bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297'
const outputInstance = Output.from_options(testAddress, 1000000);
console.log(outputInstance.serialize().toString('hex')==='40420f0000000000220120a37c3903c8d0db6512e2b40b0dffa05e5a3ab73603ce8c9c4b7771e5412328f9' && 'true')
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const assert = require("assert")
const bech32 = require('@savingsatoshi/bech32js')
class Output {
  constructor() {
    this.value = 0;
    this.witness_version = 0;
    this.witness_data = Buffer.alloc(0);
  }

  static from_options(addr, value) {
    assert(Number.isInteger(value));
    const self = new this();
    const {version, program} = bech32.decode('bc', addr);
    self.witness_version = version;
    self.witness_data = Buffer.from(program);
    self.value = value;
    return self;
  }

  serialize() {
    const buf = Buffer.alloc(11);
    buf.writeBigInt64LE(BigInt(this.value), 0);
    buf.writeUInt8(this.witness_data.length + 2, 8);
    buf.writeUInt8(this.witness_version, 9);
    buf.writeUInt8(this.witness_data.length, 10);
    return Buffer.concat([buf, this.witness_data]);
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
        range: [10, 1, 30, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
test_address = 'bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297'
output_instance = Output.from_options(test_address, 1000000)
print(output_instance.witness_data.hex())
serialized_output = output_instance.serialize()
print(serialized_output.hex() == '40420f0000000000220120a37c3903c8d0db6512e2b40b0dffa05e5a3ab73603ce8c9c4b7771e5412328f9' and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `from struct import pack
from bech32py.bech32 import encode
class Output:
    def __init__(self):
        self.value = 0
        self.witness_version = 0
        self.witness_data = b""

    @classmethod
    def from_options(cls, addr, value):
        assert isinstance(value, int)
        self = cls()
        (ver, data, spec) = bech32_decode(addr)
        self.witness_version = ver
        self.witness_data = bytes(data)
        self.value = value
        return self

    def serialize(self):
        r = b""
        r += pack("<q", self.value)
        r += pack("<B", len(self.witness_data) + 2)
        r += pack("<B", self.witness_version)
        r += pack("<B", len(self.witness_data))
        r += self.witness_data
        return r
   
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
        range: [11, 1, 28, 1],
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
      lessonKey={getLessonKey('chapter-6', 'in-out-4')}
      successMessage={t('chapter_six.in_out_four.success')}
      onSelectLanguage={handleSelectLanguage}
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
}
