'use client'

import { ScriptingChallenge, LessonInfo, Title } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getData } from 'api/data'
import {
  countLines,
  detectLanguage,
  Language,
  organizeImports,
  getLanguageString,
} from 'lib/SavedCode'
import { Loader } from 'shared'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_six.put_it_together_two.normal.title',
  navigation_title: 'chapter_six.put_it_together_two.normal.nav_title',
  key: 'CH6PUT2_NORMAL',
}

export default function PutItTogether2({ lang }) {
  const t = useTranslations(lang)
  const [prevData, setPrevData] = useState<any>({ lesson: '', data: '' })
  const [isLoading, setIsLoading] = useState(true)

  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [startLanguage, setStartLanguage] = useState(
    getLanguageString(currentLanguage)
  )

  useEffect(() => {
    const init = async () => {
      const data = await getData('CH6PUT1_NORMAL')
      let prevCode = ''

      if (data) {
        prevCode = data?.code?.getDecoded() || ''
        setPrevData({
          lesson_id: 'CH6PUT1_NORMAL',
          data: prevCode,
        })
      }

      const currentJs = localStorage.getItem(`${metadata.key}-javascript`)
      const currentPy = localStorage.getItem(`${metadata.key}-python`)

      if (currentJs && !currentPy) {
        setStartLanguage('javascript')
      } else if (currentPy && !currentJs) {
        setStartLanguage('python')
      } else if (currentJs && currentPy) {
        const detectedJs = detectLanguage(currentJs) === Language.JavaScript
        setStartLanguage(detectedJs ? 'javascript' : 'python')
      } else {
        if (prevCode && detectLanguage(prevCode) === Language.JavaScript) {
          setStartLanguage('javascript')
        } else if (prevCode && detectLanguage(prevCode) === Language.Python) {
          setStartLanguage('python')
        }
      }

      setIsLoading(false)
    }

    init()
  }, [])

  const jsWitness = `class Witness {
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
}`

  const pyWitness = `class Witness:
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
        return r`

  const getLanguageCode = (targetLang: Language) => {
    if (!prevData.data) {
      return targetLang === Language.JavaScript ? jsWitness : pyWitness
    }

    const detected = detectLanguage(prevData.data)

    if (detected === targetLang) {
      const witness = targetLang === Language.JavaScript ? jsWitness : pyWitness
      return organizeImports('\n' + witness + '\n' + prevData.data)
    }

    return targetLang === Language.JavaScript ? jsWitness : pyWitness
  }

  const jsCombined = getLanguageCode(Language.JavaScript)
  const pyCombined = getLanguageCode(Language.Python)

  const findClassEndIndex = (code: string, className: string) => {
    const classRegex = new RegExp(`class\\s+${className}[^{]*{`)
    const match = code.match(classRegex)

    if (!match || match.index === undefined) return -1

    const startIndex = match.index + match[0].length - 1
    let balance = 0

    for (let i = startIndex; i < code.length; i++) {
      if (code[i] === '{') balance++
      if (code[i] === '}') balance--

      if (balance === 0) return i
    }
    return -1
  }

  const injectMethodsIntoClass = (
    code: string,
    className: string,
    methods: string
  ) => {
    const insertIndex = findClassEndIndex(code, className)
    if (insertIndex === -1) return code + '\n' + methods

    const before = code.substring(0, insertIndex)
    const after = code.substring(insertIndex)
    return `${before}\n${methods}\n${after}`
  }

  const getInsertionLineNumber = (code: string, className: string) => {
    const insertIndex = findClassEndIndex(code, className)
    if (insertIndex === -1) return countLines(code)
    return countLines(code.substring(0, insertIndex)) + 3
  }

  const jsMethodsToInject = `
  // YOUR CODE HERE
  compute_input_signature(index, key) {
    assert(typeof key === 'bigint');
    assert(Number.isInteger(index));
    // Helper function:
    // Find modular multiplicative inverse using Extended Euclidean Algorithm
    function invert(value, modulus = secp256k1.ORDER) {
      let x0 = 0n;
      let x1 = 1n;
      let a = value;
      let m = modulus;

      while (a > 1n) {
        const q = a / m;
        let t = m;
        m = a % m;
        a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
      }

      if (x1 < 0n) {
        x1 += modulus;
      }
      return x1;
    }
    
    // Initialize return variables
    let r = 0n;
    let s = 0n;

    // The math:
    //   k = random integer in [1, n-1]
    //   R = G * k
    //   r = x(R) mod n
    //   s = (r * a + m) / k mod n
    //   Extra Bitcoin rule from BIP 146:
    //     if s > n / 2 then s = n - s mod n
    //   return (r, s)
    // Hints:
    //   n = the order of the curve secp256k1.ORDER
    //   a = the private key
    //   m = the message value returned by digest()
    //   x(R) = the x-coordinate of the point R
    //   Use the invert() function above to turn division into multiplication!
    
    // YOUR CODE HERE

    return [r, s];
  }

  // Now sign the input you just returned!
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
  }`

  // [FIX] Prepare default code carefully to avoid duplicate imports
  const prepareJsDefaultCode = () => {
    let code = jsCombined
    const imports = [
      "const secp256k1 = require('@savingsatoshi/secp256k1js');",
      "const {randomBytes} = require('crypto');",
      "const assert = require('assert');",
    ]

    const missingImports = imports.filter((imp) => {
      if (imp.includes('secp256k1js') && code.includes('secp256k1js'))
        return false
      if (imp.includes('crypto') && code.includes('crypto')) return false
      if (imp.includes('assert') && code.includes('assert')) return false
      return true
    })

    if (missingImports.length > 0) {
      code = missingImports.join('\n') + '\n' + code
    }

    return injectMethodsIntoClass(code, 'Transaction', jsMethodsToInject)
  }

  const jsDefaultCode = prepareJsDefaultCode()
  const insertionLineStart = getInsertionLineNumber(jsCombined, 'Transaction')
  const injectedLineCount = countLines(jsMethodsToInject)

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const assert = require('assert');
const bech32 = require('@savingsatoshi/bech32js');
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
const priv_dsljfohd = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503en
const compressed_pub_agfwuebb = Buffer.from('038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af', 'hex');
const txid_noiewnoa = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout_bucbsncc = 1;
const valueOne_aelfhasc = 650000000;
const scriptcode_iabsvalb = '1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac';
const input_bauoevbs = Input.from_output(txid_noiewnoa, vout_bucbsncc, valueOne_aelfhasc, scriptcode_iabsvalb);
const addr_pqvejvea = 'bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj';
const valueTwo_jhcermcr = 100000000;
const output_uhmhvgcw = Output.from_options(addr_pqvejvea, valueTwo_jhcermcr);
const tx_eagmcued = new Transaction();
tx_eagmcued.inputs.push(input_bauoevbs);
tx_eagmcued.outputs.push(output_uhmhvgcw);
const [r, s] = tx_eagmcued.compute_input_signature(0, priv_dsljfohd);
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const private_key_faxwmufa = ec.keyFromPrivate(priv_dsljfohd.toString(16), 'hex');
const hashed_message_bytes_ahuhfxmw = tx_eagmcued.digest(0);
const signature_weiucmwa = {r: r.toString(16), s: s.toString(16)};
console.log(private_key_faxwmufa.verify(hashed_message_bytes_ahuhfxmw, signature_weiucmwa) && 'true')
console.log("KILL")`,
    rangeToNotCollapse: [
      {
        start: insertionLineStart,
        end: insertionLineStart + injectedLineCount,
      },
    ],
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: jsDefaultCode,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === 'true') {
          return [true, t('chapter_six.put_it_together_two.normal.success')]
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

priv_dsljfohd = 0x93485bbe0f0b2810937fc90e8145b2352b233fbd3dd7167525401dd30738503e
compressed_pub_agfwuebb = bytes.fromhex("038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af")
txid_noiewnoa = "8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e"
valueOne_aelfhasc = 650000000
scriptcode_iabsvalb = "1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac"
vout_bucbsncc = 1
input_bauoevbs = Input.from_output(txid_noiewnoa, vout_bucbsncc, valueOne_aelfhasc, scriptcode_iabsvalb)
addr_pqvejvea = "bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj"
valueTwo_jhcermcr = 100000000
output_uhmhvgcw = Output.from_options(addr_pqvejvea, valueTwo_jhcermcr)
tx_eagmcued = Transaction()
tx_eagmcued.inputs.append(input_bauoevbs)
tx_eagmcued.outputs.append(output_uhmhvgcw)
(r, s) = tx_eagmcued.compute_input_signature(0, priv_dsljfohd)
import ecdsa
from ecdsa import VerifyingKey, SECP256k1
sig_string_oiadhald = f'{r:064x}{s:064x}'
sig_bytes_ayeqncas = bytes.fromhex(sig_string_oiadhald)
hashed_message_bytes_ywienvsd = tx_eagmcued.digest(0)
verifying_key_dojssdfo = VerifyingKey.from_string(compressed_pub_agfwuebb, curve=SECP256k1)
print(verifying_key_dojssdfo.verify_digest(sig_bytes_ayeqncas, hashed_message_bytes_ywienvsd) and 'true')
print("KILL")`,
    rangeToNotCollapse: [
      {
        start: countLines(pyCombined) + 3,
        end: countLines(pyCombined) + 28,
      },
    ],
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `from random import randrange
from secp256k1py import secp256k1
${pyCombined}
# YOUR CODE HERE
    def compute_input_signature(self, index: int, key: int):
        # The math:
        #   k = random integer in [1, n-1]
        #   R = G * k
        #   r = x(R) mod n
        #   s = (r * a + m) / k mod n
        #   Extra Bitcoin rule from BIP 146:
        #     if s > n / 2 then s = n - s mod n
        # return (r, s)
        # Hints:
        #   n = the order of the curve secp256k1.GE.ORDER
        #   a = the private key
        #   m = the message value returned by digest()
        #   x(R) = the x-coordinate of the point R
        #   Use the built-in pow() function to turn division into multiplication!

        assert isinstance(key, int)

        # YOUR CODE HERE

        return (r, s)

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
    validate: async (answer) => {
      if (answer) {
        if (answer === 'true') {
          return [true, t('chapter_six.put_it_together_two.normal.success')]
        } else {
          return [false, 'recheck your methods']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
      }
    },
  }

  const config: EditorConfig = {
    defaultLanguage: startLanguage,
    languages: {
      javascript,
      python,
    },
  }

  return (
    (!isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={metadata.key}
        loadingSavedCode={isLoading}
      >
        <LessonInfo>
          <Title>{t('chapter_six.put_it_together_two.normal.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_three')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_four')}
          </Text>

          {/* Step 1 */}
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_six.put_it_together_two.normal.heading_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_five')}
          </Text>

          {/* Step 2 */}
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_six.put_it_together_two.normal.heading_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_six')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_seven')}
          </Text>

          {/* Step 3 */}
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_six.put_it_together_two.normal.heading_three')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_eight')}
          </Text>

          {/* Step 4 */}
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_six.put_it_together_two.normal.heading_four')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_nine')}
          </Text>

          {/* Step 5 */}
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_six.put_it_together_two.normal.heading_five')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_ten')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_six.put_it_together_two.normal.paragraph_eleven')}
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
