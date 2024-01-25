'use client'

import { ScriptingChallenge, LessonInfo, Title, Text } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'

export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  key: 'CH6PUT5',
}

export default function DeriveMessage7({ lang }) {
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<any>({ lesson: '', data: '' })
  const [isLoading, setIsLoading] = useState(true)

  function countLines(text: string): number {
    return text.split(/\r\n|\r|\n/).length
  }

  const getPrevLessonData = async () => {
    const data = await getData('CH6PUT4')
    if (data) {
      setPrevData({
        lesson_id: 'CH6PUT4',
        data: data?.code?.getDecoded(),
      })
    }
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const assert = require('assert');
const bech32 = require('@savingsatoshi/bech32js');
class Outpoint {
    constructor(txid, index) {
      //assert(Buffer.isBuffer(txid));
      //assert(txid.length === 32);
      //assert(Number.isInteger(index));
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
      // Optional, since we know in SegWit it's always zero bytes.
      // Adding this back will offset all following byte length positions.
      // this.script.copy(buf, 37);
      buf.writeUInt32LE(this.sequence, 37);
      return buf;
    }
  }

  class Output {
    constructor() {
      this.value = 0;
      this.witness_version = 0;
      this.witness_data = Buffer.alloc(0);
    }

    static from_options(addr, value) {
      //assert(Number.isInteger(value));
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

  class Witness {
    constructor() {
      this.items = [];
    }

    push_item(data) {
      this.items.push(data);
    }

    serialize() {
      let buf = Buffer.from([this.items.length]);
      for (const item of this.items)
        buf = Buffer.concat([buf, Buffer.from([item.length]), item]);
      return buf;
    }
  }

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const priv = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503en
const compressed_pub = Buffer.from('038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af', 'hex');
const txid = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout = 1;
const value = 650000000;
const scriptcode = '1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac';
const input = Input.from_output(txid, vout, value, scriptcode);
const addr = 'bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj';
const valueTwo = 100000000;
const output = Output.from_options(addr, valueTwo);
const tx = new Transaction();
tx.inputs.push(input);
tx.outputs.push(output);
tx.sign_input(0, priv, compressed_pub);
const hashed_message_bytes = tx.digest(0);
const wit_sig = tx.witnesses[0].items[0].slice(0, -1);
const wit_key = tx.witnesses[0].items[1];
const public_key = ec.keyFromPublic(wit_key);
console.log(public_key.verify(hashed_message_bytes, wit_sig) && 'true');
console.log("KILL")
  `,
    defaultFunction: {
      name: 'signInput',
      args: [],
    },
    defaultCode: `${prevData.data.slice(0, -2)}
  sign_input(index, priv, pub, sighash=1) {
    // Represent in DER format. The byte representations of r and s have
    // length rounded up (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
    // See BIP 66
    // https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
    const der_int = (n) => {
      const bit_length = n.toString(2).length;
      const byte_length = parseInt((bit_length + 8) / 8);
      const padded_hex = n.toString(16).padStart(byte_length * 2, '0');
      return Buffer.from(padded_hex, 'hex');
    };
    const encode_der = (r, s) => {
      const rb = der_int(r);
      const sb = der_int(s);
      let buf = Buffer.from([0x30, 4 + rb.length + sb.length, 2, rb.length]);
      buf = Buffer.concat([buf, rb]);
      buf = Buffer.concat([buf, Buffer.from([2, sb.length])]);
      buf = Buffer.concat([buf, sb]);
      return buf;
    };
    // YOUR CODE HERE
  }
}`,
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
        range: [
          countLines(prevData.data.slice(0, -2)) + 21,
          1,
          countLines(prevData.data.slice(0, -2)) + 22,
          1,
        ],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
from struct import pack
from bech32py import bech32
class Outpoint:
    def __init__(self, txid, index):
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
    def from_output(cls, txid, vout, value, scriptcode):
        self = cls()
        self.outpoint = Outpoint(bytes.fromhex(txid)[::-1], vout)
        self.value = value
        self.scriptcode = bytes.fromhex(scriptcode)
        return self

    def serialize(self):
        r = b""
        r += self.outpoint.serialize()
        r += pack("<B", len(self.script))
        # Optional, since we know in SegWit it's always zero bytes
        # r += self.script
        r += pack("<I", self.sequence)
        return r

class Output:
    def __init__(self):
        self.value = 0
        self.witness_version = 0
        self.witness_data = b""

    @classmethod
    def from_options(cls, addr, value):
        assert isinstance(value, int)
        self = cls()
        (ver, data) = bech32.decode("bc", addr)
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

class Witness:
    def __init__(self):
        self.items = []

    def push_item(self, data):
        self.items.append(data)

    def serialize(self):
        r = b""
        r += pack("<B", len(self.items))
        for item in self.items:
            r += pack("<B", len(item))
            r += item
        return r
priv = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503e
compressed_pub = bytes.fromhex("038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af")
txid = "8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e"
vout = 1
valueOne = 650000000
scriptcode = "1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac"
input = Input.from_output(txid, vout, valueOne, scriptcode)
addr = "bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj"
valueTwo = 100000000
output = Output.from_options(addr, valueTwo)
tx = Transaction()
tx.inputs.append(input)
tx.outputs.append(output)
tx.sign_input(0, priv, compressed_pub)
import ecdsa
from ecdsa import VerifyingKey, SECP256k1
wit_sig = tx.witnesses[0].items[0]
wit_key = tx.witnesses[0].items[1]
hashed_message_bytes = tx.digest(0)
verifying_key = VerifyingKey.from_string(wit_key, curve=SECP256k1)
print(verifying_key.verify_digest(wit_sig[:-1], hashed_message_bytes, ecdsa.util.sigdecode_der) and 'true')
print("KILL")
`,
    defaultFunction: {
      name: 'create_tx_message',
      args: [],
    },
    defaultCode: `${prevData.data}

    def sign_input(self, index, priv, pub, sighash=1):
        def encode_der(r, s):
            # Represent in DER format. Thebyte representations of r and s have length rounded up
            # (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
            # See BIP66
            # https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
            rb = r.to_bytes((r.bit_length() + 8) // 8, 'big')
            sb = s.to_bytes((s.bit_length() + 8) // 8, 'big')
            return b'\\x30' + bytes([4 + len(rb) + len(sb), 2, len(rb)]) + rb + bytes([2, len(sb)]) + sb
        # YOUR CODE HERE
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
        range: [
          countLines(prevData.data.slice(0, -2)) + 10,
          1,
          countLines(prevData.data.slice(0, -2)) + 11,
          1,
        ],
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
    !isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        lessonKey={getLessonKey('chapter-6', 'put-it-together-5')}
        successMessage={t('chapter_six.put_it_together_five.success')}
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo>
          <Title>{t('chapter_six.put_it_together_four.heading')}</Title>

          <Text className="mt-2 text-lg md:text-[22px]">
            {t('chapter_six.put_it_together_five.paragraph_one')}
          </Text>
          <Text className="mt-2 text-lg md:text-[22px]">
            {t('chapter_six.put_it_together_five.paragraph_two')}
          </Text>

          <Text className="mt-2 text-lg md:text-[22px]">
            {t('chapter_six.put_it_together_five.paragraph_three')}
          </Text>

          <Text className="mt-2 text-lg md:text-[22px]">
            {t('chapter_six.put_it_together_five.paragraph_four')}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
