'use client'

import { getData } from 'api/data'
import { useTranslations } from 'hooks'
import {
  countLines,
  detectLanguage,
  Language,
  organizeImports,
} from 'lib/SavedCode'
import { useEffect, useState } from 'react'
import { Loader } from 'shared'
import { EditorConfig } from 'types'
import { LessonInfo, ScriptingChallenge, Table, Text } from 'ui'

export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  navigation_title: 'chapter_six.put_it_together_three.nav_title',
  key: 'CH6PUT3',
}

const lessonsToLoad = ['CH6PUT1', 'CH6PUT2', 'CH6INO5']

export const allLessonsAreLoaded = (data) => {
  return lessonsToLoad.every((lesson) => data[lesson])
}

export default function PutItTogether3({ lang }) {
  const t = useTranslations(lang)
  const [prevData, setPrevData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const [combinedCode, setCombinedCode] = useState('')

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
        organizeImports(
          (detectLanguage(prevData['CH6PUT2']) === Language.JavaScript
            ? `// UTXO from chapter 6 step 1 (mining pool payout)
const txid = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout = 1;
const value = 161000000;

// From chapter 4 (we will reuse address for change)
const priv = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503en;
const compressed_pub = Buffer.from('038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af', 'hex');
const pubkey_hash = 'b234aee5ee74d7615c075b4fe81fd8ace54137f2';
const addr = 'bc1qkg62ae0wwntkzhq8td87s87c4nj5zdlj2ga8j7';

// Explained in step 6
const scriptcode = '1976a914' + pubkey_hash + '88ac';

class Outpoint {
  constructor(txid, index) {
    assert(Buffer.isBuffer(txid));
    assert(txid.length === 32);
    assert(Number.isInteger(index));
    this.txid = txid;
    this.index = index;
  }

  serialize() {
    const buf = Buffer.alloc(36);
    this.txid.copy(buf, 0);
    buf.writeUInt32LE(this.index, 32);
    return buf;
  }
}

class Input {
  constructor() {
    this.outpoint = null;
    this.script = Buffer.alloc(0);
    this.sequence = 0xffffffff;
    this.value = 0;
    this.scriptcode = Buffer.alloc(0);
  }

  static from_output(txid, vout, value, scriptcode) {
    const self = new this();
    self.outpoint = new Outpoint(Buffer.from(txid.replace('0x', ''),  'hex').reverse(), vout);
    self.value = value;
    self.scriptcode = Buffer.from(scriptcode.replace('0x', ''), 'hex');
    return self;
  }

  serialize() {
    const buf = Buffer.alloc(32 + 4 + 1 + 4);
    this.outpoint.serialize().copy(buf, 0);
    buf.writeUInt8(this.script.length, 36);
    buf.writeUInt32LE(this.sequence, 37);
    return buf;
  }
}
`
            : `# UTXO from chapter 6 step 1 (mining pool payout)
txid = "8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e"
vout = 1
value = 161000000

# From chapter 4 (we will reuse address for change)
priv = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503e
compressed_pub = bytes.fromhex("038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af")
pubkey_hash = "b234aee5ee74d7615c075b4fe81fd8ace54137f2"
addr = "bc1qkg62ae0wwntkzhq8td87s87c4nj5zdlj2ga8j7"

# Explained in step 6
scriptcode = "1976a914" + pubkey_hash + "88ac"

class Outpoint:
    def __init__(self, txid: bytes, index: int):
        assert isinstance(txid, bytes)
        assert len(txid) == 32
        assert isinstance(index, int)
        self.txid = txid
        self.index = index

    def serialize(self):
        r = b""
        r += self.txid
        r += pack("<I", self.index)
        return r

class Input:
    def __init__(self):
        self.outpoint = None
        self.script = b""
        self.sequence = 0xffffffff
        self.value = 0
        self.scriptcode = b""

    @classmethod
    def from_output(cls, txid: str, vout: int, value: int, scriptcode: bytes):
        self = cls()
        self.outpoint = Outpoint(bytes.fromhex(txid)[::-1], vout)
        self.value = value
        self.scriptcode = bytes.fromhex(scriptcode)
        return self

    def serialize(self):
        r = b""
        r += self.outpoint.serialize()
        r += pack("<B", len(self.script))
        r += pack("<I", self.sequence)
        return r
`) +
            prevData['CH6INO5'] +
            '\n' +
            prevData['CH6PUT2'] +
            '\n'
        )
      )
    }
  }, [prevData])

  const javascript = {
    program: `
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    rangeToNotCollapse: [
      {
        start: countLines(combinedCode),
        end: countLines(combinedCode) + 3,
      },
    ],
    defaultCode: `${combinedCode.slice(0, -2)}
  serialize() {
    // YOUR CODE HERE
  }
}

const tx = new Transaction();
const in0 = Input.from_output(txid, vout, value, scriptcode);
const out0 = Output.from_options('bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj', 100000000);
// The output below is all the remaining change from this transaction, are you sure you want to send yourself all the change?
const out1 = Output.from_options(addr, 61000000);
tx.inputs.push(in0);
tx.outputs.push(out0);
tx.outputs.push(out1);
tx.sign_input(0, priv, compressed_pub);

console.log(tx.serialize().toString('hex'));`,
    validate: async (answer: string) => {
      if (
        answer.slice(0, 248) !==
        '020000000001018e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff0200e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd158c5a20300000000160014b234aee5ee74d7615c075b4fe81fd8ace54137f202'
      ) {
        if (
          answer.slice(0, 248) ===
          '020000000001018e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff0200e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd140c9a20300000000160014b234aee5ee74d7615c075b4fe81fd8ace54137f202'
        ) {
          return [
            false,
            "Close! Don't forget to reduce our change from 61,000,000 to 60,999,000 in order to pay the miners.",
          ]
        }
        return [false, 'Nope! Try again.']
      }
      if (answer.slice(250, 252) !== '30') {
        return [false, 'Nope! Try again..']
      }
      const size = (parseInt(answer.slice(248, 250), 16) - 1) * 2
      if (answer.slice(250 + size, 250 + size + 4) !== '0121') {
        return [false, 'Nope! Try again...']
      }
      if (answer.slice(-8) !== '00000000') {
        return [false, 'Nope! Try again....']
      }
      return [true, 'Nicely Done']
    },
  }

  const python = {
    program: `
print("KILL")`,
    rangeToNotCollapse: [
      {
        start: countLines(combinedCode) + 2,
        end: countLines(combinedCode) + 4,
      },
    ],
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `from struct import pack
${combinedCode}
    def serialize(self):
        # YOUR CODE HERE

tx = Transaction()
in0 = Input.from_output(txid, vout, value, scriptcode)
out0 = Output.from_options("bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj", 100000000)
# The output below is all the remaining change from this transaction, are you sure you want to send yourself all the change?
out1 = Output.from_options(addr, 61000000)
tx.inputs.append(in0)
tx.outputs.append(out0)
tx.outputs.append(out1)
tx.sign_input(0, priv, compressed_pub)

print(tx.serialize().hex())`,
    validate: async (answer: string) => {
      if (
        answer.slice(0, 248) !==
        '020000000001018e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff0200e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd158c5a20300000000160014b234aee5ee74d7615c075b4fe81fd8ace54137f202'
      ) {
        if (
          answer.slice(0, 248) ===
          '020000000001018e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff0200e1f50500000000220020422e079e04cdec4dd15ccf0b3fd0c742eea8b067bf06c2b489c6efd05abf1fd140c9a20300000000160014b234aee5ee74d7615c075b4fe81fd8ace54137f202'
        ) {
          return [
            false,
            "Close! Don't forget to reduce our change from 61,000,000 to 60,999,000 in order to pay the miners.",
          ]
        }
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

  return (
    (!isLoading && combinedCode && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={metadata.key}
        successMessage={t('chapter_six.put_it_together_three.success')}
        loadingSavedCode={isLoading}
      >
        <LessonInfo>
          <Text className="font-nunito text-2xl font-bold text-white">
            {t('chapter_six.put_it_together_three.heading')}
          </Text>
          <Text className="mt-2 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_three.paragraph_one')}
          </Text>
          <Text className="mt-2 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_three.paragraph_two')}
          </Text>
          <ul className="list-disc pl-5 font-nunito">
            <li className="break-words text-lg md:text-xl">
              {t('chapter_six.put_it_together_three.bullet_one')}
            </li>
            <li className="break-words text-lg md:text-xl">
              {t('chapter_six.put_it_together_three.bullet_two')}
            </li>
          </ul>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_six.put_it_together_three.paragraph_three')}
          </Text>
          <Table
            headings={[
              t('chapter_six.put_it_together_three.headings.item_one'),
              t('chapter_six.put_it_together_three.headings.item_two'),
              t('chapter_six.put_it_together_three.headings.item_three'),
              t('chapter_six.put_it_together_three.headings.item_four'),
            ]}
            rows={[
              [
                t('chapter_six.put_it_together_three.table.row_one.item_one'),
                t('chapter_six.put_it_together_three.table.row_one.item_two'),
                t('chapter_six.put_it_together_three.table.row_one.item_three'),
                t('chapter_six.put_it_together_three.table.row_one.item_four'),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_two.item_one'),
                t('chapter_six.put_it_together_three.table.row_two.item_two'),
                t('chapter_six.put_it_together_three.table.row_two.item_three'),
                t('chapter_six.put_it_together_three.table.row_two.item_four'),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_three.item_one'),
                t('chapter_six.put_it_together_three.table.row_three.item_two'),
                t(
                  'chapter_six.put_it_together_three.table.row_three.item_three'
                ),
                t(
                  'chapter_six.put_it_together_three.table.row_three.item_four'
                ),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_four.item_one'),
                t('chapter_six.put_it_together_three.table.row_four.item_two'),
                t(
                  'chapter_six.put_it_together_three.table.row_four.item_three'
                ),
                t('chapter_six.put_it_together_three.table.row_four.item_four'),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_five.item_one'),
                t('chapter_six.put_it_together_three.table.row_five.item_two'),
                t(
                  'chapter_six.put_it_together_three.table.row_five.item_three'
                ),
                t('chapter_six.put_it_together_three.table.row_five.item_four'),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_six.item_one'),
                t('chapter_six.put_it_together_three.table.row_six.item_two'),
                t('chapter_six.put_it_together_three.table.row_six.item_three'),
                t('chapter_six.put_it_together_three.table.row_six.item_four'),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_seven.item_one'),
                t('chapter_six.put_it_together_three.table.row_seven.item_two'),
                t(
                  'chapter_six.put_it_together_three.table.row_seven.item_three'
                ),
                t(
                  'chapter_six.put_it_together_three.table.row_seven.item_four'
                ),
              ],
              [
                t('chapter_six.put_it_together_three.table.row_eight.item_one'),
                t('chapter_six.put_it_together_three.table.row_eight.item_two'),
                t(
                  'chapter_six.put_it_together_three.table.row_eight.item_three'
                ),
                t(
                  'chapter_six.put_it_together_three.table.row_eight.item_four'
                ),
              ],
            ]}
          />
          <Text className="mt-2 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_three.paragraph_four')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_six.put_it_together_three.paragraph_five`)}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_six.put_it_together_three.paragraph_six`)}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )) || (
      <div className="flex flex-auto items-center">
        <Loader className="h-12 w-12 text-white" />
      </div>
    )
  )
}
