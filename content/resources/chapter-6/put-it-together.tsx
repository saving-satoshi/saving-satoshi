'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'

const javascriptChallengeOne = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `class Witness {
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
}`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeOne = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `class Witness:
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
        return r`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeTwo = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `  serialize() {
    let buf = Buffer.alloc(4);
    buf.writeUInt32LE(this.version, 0);

    buf = Buffer.concat([buf, this.flags]);
    buf = Buffer.concat([buf, Buffer.from([this.inputs.length])]);
    for (const input of this.inputs)
      buf = Buffer.concat([buf, input.serialize()]);
    buf = Buffer.concat([buf, Buffer.from([this.outputs.length])]);
    for (const output of this.outputs)
      buf = Buffer.concat([buf, output.serialize()]);
    for (const witness of this.witnesses)
      buf = Buffer.concat([buf, witness.serialize()]);

    const locktime = Buffer.alloc(4);
    locktime.writeUInt32LE(this.locktime);

    return Buffer.concat([buf, locktime]);
  }`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeTwo = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `    def serialize(self):
        r = b""
        r += pack("<I", self.version)
        r += self.flags
        r += pack("<B", len(self.inputs))
        for inp in self.inputs:
            r += inp.serialize()
        r += pack("<B", len(self.outputs))
        for out in self.outputs:
            r += out.serialize()
        for wit in self.witnesses:
            r += wit.serialize()
        r += pack("<I", self.locktime)
        return r`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}
const javascriptChallengeThree = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `  digest(input_index) {
    const sighash = 1;

    const dsha256 = (data) => {
      return Hash('sha256').update(Hash('sha256').update(data).digest()).digest();
    };

    let buf = Buffer.alloc(4);
    buf.writeUInt32LE(this.version, 0);

    let outpoints = Buffer.alloc(this.inputs.length * 36);
    for (let i = 0; i < this.inputs.length; i++)
      this.inputs[i].outpoint.serialize().copy(outpoints, i * 36);
    buf = Buffer.concat([buf, dsha256(outpoints)]);

    const sequences = Buffer.alloc(4 * this.inputs.length);
    for (let i = 0; i < this.inputs.length; i++)
      sequences.writeUInt32LE(this.inputs[i].sequence, i * 4);
    buf = Buffer.concat([buf, dsha256(sequences)]);

    buf = Buffer.concat([buf, this.inputs[input_index].outpoint.serialize()]);
    buf = Buffer.concat([buf, this.inputs[input_index].scriptcode]);

    const val_and_seq = Buffer.alloc(12);
    val_and_seq.writeBigInt64LE(BigInt(this.inputs[input_index].value), 0);
    val_and_seq.writeUInt32LE(this.inputs[input_index].sequence, 8);
    buf = Buffer.concat([buf, val_and_seq]);

    let outputs = Buffer.alloc(0);
    for (const output of this.outputs)
      outputs = Buffer.concat([outputs, output.serialize()]);
    buf = Buffer.concat([buf, dsha256(outputs)]);

    const locktime_and_sighash = Buffer.alloc(8);
    locktime_and_sighash.writeUInt32LE(this.locktime, 0);
    locktime_and_sighash.writeUInt32LE(sighash, 4);
    buf = Buffer.concat([buf, locktime_and_sighash]);

    return dsha256(buf);
  }`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeThree = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `    def digest(self, input_index):
        sighash = 1

        def dsha256(data):
            return hashlib.new('sha256', hashlib.new('sha256', data).digest()).digest()

        s = b""
        s += pack("<I", self.version)

        outpoints = b""
        for inp in self.inputs:
            outpoints += inp.outpoint.serialize()
        s += dsha256(outpoints)

        sequences = b""
        for inp in self.inputs:
            sequences += pack("<I", inp.sequence)
        s += dsha256(sequences)

        s += self.inputs[input_index].outpoint.serialize()
        s += self.inputs[input_index].scriptcode
        s += pack("<q", self.inputs[input_index].value)
        s += pack("<I", self.inputs[input_index].sequence)

        outputs = b""
        for out in self.outputs:
            outputs += out.serialize()
        s += dsha256(outputs)

        s += pack("<I", self.locktime)
        s += pack("<I", sighash)
        return dsha256(s)`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeFour = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `  compute_input_signature(index, key) {
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

      if (x1 < 0n)
        x1 += modulus;

      return x1;
    }
    // k = random integer in [1, n-1]
    // R = G * k
    // r = x(R) mod n
    // s = (r * a + m) / k mod n
    // Extra Bitcoin rule from BIP 146
    // https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#user-content-LOW_S
    //   s = -s mod n, if s > n / 2
    // return (r, s)
    const msg = this.digest(index);
    const k = BigInt(\`0x\${randomBytes(32).toString('hex')}\`);
    // Extremeley unlikely to fail, this is lazy but ok
    assert(k < secp256k1.ORDER);
    const k_inverted = invert(k);
    const R = secp256k1.G.mul(k);
    const r = R.x.val % secp256k1.ORDER;
    let s = ((r * key) + BigInt(\`0x\${msg.toString('hex')}\`)) * k_inverted % secp256k1.ORDER;

    if (s > (secp256k1.ORDER / 2n))
      s = secp256k1.ORDER - s;
    return [r, s];
  }`,
  validate: async (answer) => {
    if (answer !== 'True') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [156, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeFour = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `    def compute_input_signature(self, index, key):
        # k = random integer in [1, n-1]
        # R = G * k
        # r = x(R) mod n
        # s = (r * a + m) / k mod n
        # Extra Bitcoin rule from BIP 146
        # https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#user-content-LOW_S
        #   s = -s mod n, if s > n / 2
        # return (r, s)
        assert isinstance(key, int)
        msg = self.digest(index)
        k = randrange(1, secp256k1.GE.ORDER)
        k_inverted = pow(k, -1, secp256k1.GE.ORDER)
        R = k * secp256k1.G
        r = int(R.x) % secp256k1.GE.ORDER
        s = ((r * key) + int.from_bytes(msg)) * k_inverted % secp256k1.GE.ORDER
        if s > secp256k1.GE.ORDER // 2:
            s = secp256k1.GE.ORDER - s
        return (r, s)`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [154, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeFive = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `  sign_input(index, priv, pub, sighash=1) {
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
    const [r, s] = this.compute_input_signature(index, priv);
    const der_sig = encode_der(r, s);
    const wit = new Witness();
    wit.push_item(Buffer.concat([der_sig, Buffer.from([sighash])]));
    wit.push_item(pub);
    this.witnesses.push(wit);
  }`,
  validate: async (answer) => {
    if (answer !== 'True') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [156, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeFive = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `    def sign_input(self, index, priv, pub, sighash=1):
        def encode_der(r, s):
            # Represent in DER format. The byte representations of r and s have
            # length rounded up (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
            # See BIP 66
            # https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
            rb = r.to_bytes((r.bit_length() + 8) // 8, 'big')
            sb = s.to_bytes((s.bit_length() + 8) // 8, 'big')
            return b'\x30' + bytes([4 + len(rb) + len(sb), 2, len(rb)]) + rb + bytes([2, len(sb)]) + sb
        (r, s) = self.compute_input_signature(index, priv)
        der_sig = encode_der(r, s)
        wit = Witness()
        wit.push_item(der_sig + bytes([sighash]))
        wit.push_item(pub)
        self.witnesses.append(wit)`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [154, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeSix = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `// UTXO from chapter 6 step 1 (mining pool payout)
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

const tx = new Transaction();
const in0 = Input.from_output(txid, vout, value, scriptcode);
const out0 = Output.from_options('bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj', 100000000);
const out1 = Output.from_options(addr, 60999000);
tx.inputs.push(in0);
tx.outputs.push(out0);
tx.outputs.push(out1);
tx.sign_input(0, priv, compressed_pub);`,
  validate: async (answer) => {
    if (answer !== 'True') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [156, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeSix = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `# UTXO from chapter 6 step 1 (mining pool payout)
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

tx = Transaction()
in0 = Input.from_output(txid, vout, value, scriptcode)
out0 = Output.from_options("bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj", 100000000)
out1 = Output.from_options(addr, 60999000)
tx.inputs.append(in0)
tx.outputs.append(out0)
tx.outputs.append(out1)
tx.sign_input(0, priv, compressed_pub)`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [154, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const configOne: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeOne,
    python: pythonChallengeOne,
  },
}

const configTwo: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeTwo,
    python: pythonChallengeTwo,
  },
}

const configThree: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeThree,
    python: pythonChallengeThree,
  },
}

const configFour: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeFour,
    python: pythonChallengeFour,
  },
}

const configFive: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeFive,
    python: pythonChallengeFive,
  },
}

const configSix: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeSix,
    python: pythonChallengeSix,
  },
}

export default function PutItTogetherResources({ lang }) {
  const t = useTranslations(lang)
  const { currentLanguage } = useDataContext()
  const initialStateCodeOne =
    configOne.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeOne, setCodeOne] = useState<string>(initialStateCodeOne as string)
  const initialStateCodeTwo =
    configTwo.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeTwo, setCodeTwo] = useState<string>(initialStateCodeTwo as string)
  const initialStateCodeThree =
    configThree.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeThree, setCodeThree] = useState<string>(
    initialStateCodeThree as string
  )
  const initialStateCodeFour =
    configFour.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeFour, setCodeFour] = useState<string>(
    initialStateCodeFour as string
  )
  const initialStateCodeFive =
    configFive.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeFive, setCodeFive] = useState<string>(
    initialStateCodeFive as string
  )
  const initialStateCodeSix =
    configSix.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeSix, setCodeSix] = useState<string>(initialStateCodeSix as string)
  const [languageOne, setLanguageOne] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageTwo, setLanguageTwo] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageThree, setLanguageThree] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageFive, setLanguageFive] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageSix, setLanguageSix] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageFour, setLanguageFour] = useState(
    getLanguageString(currentLanguage)
  )
  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)
  const [challengeThreeIsToggled, setChallengeThreeIsToggled] = useState(false)
  const [challengeFourIsToggled, setChallengeFourIsToggled] = useState(false)
  const [challengeFiveIsToggled, setChallengeFiveIsToggled] = useState(false)
  const [challengeSixIsToggled, setChallengeSixIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const challengeThreeToggleSwitch = () => {
    setChallengeThreeIsToggled(!challengeThreeIsToggled)
  }

  const challengeFourToggleSwitch = () => {
    setChallengeFourIsToggled(!challengeFourIsToggled)
  }

  const challengeFiveToggleSwitch = () => {
    setChallengeFiveIsToggled(!challengeFiveIsToggled)
  }

  const challengeSixToggleSwitch = () => {
    setChallengeSixIsToggled(!challengeSixIsToggled)
  }

  const handleSetLanguageOne = (value) => {
    setLanguageOne(value)
    setCodeOne(configOne.languages[value].defaultCode as string)
  }
  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configTwo.languages[value].defaultCode as string)
  }
  const handleSetLanguageThree = (value) => {
    setLanguageThree(value)
    setCodeThree(configThree.languages[value].defaultCode as string)
  }
  const handleSetLanguageFour = (value) => {
    setLanguageFour(value)
    setCodeFour(configFour.languages[value].defaultCode as string)
  }
  const handleSetLanguageFive = (value) => {
    setLanguageFive(value)
    setCodeFive(configFive.languages[value].defaultCode as string)
  }
  const handleSetLanguageSix = (value) => {
    setLanguageSix(value)
    setCodeSix(configSix.languages[value].defaultCode as string)
  }

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: readOnlyOptions.theme,
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBorder': '#00000000', // 4th channel is for transparency
      },
    })
  }

  const handleMount = (_editor, monaco) => {
    monaco.editor.setTheme('satoshi')
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={<></>}
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeOneIsToggled}
              onChange={challengeOneToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeOneIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configOne.languages}
                value={languageOne}
                onChange={handleSetLanguageOne}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`317px`}
                  value={codeOne}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageOne}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_two')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeTwoIsToggled}
              onChange={challengeTwoToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeTwoIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configTwo.languages}
                value={languageTwo}
                onChange={handleSetLanguageTwo}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`370px`}
                  value={codeTwo}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageTwo}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_three')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeThreeIsToggled}
              onChange={challengeThreeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeThreeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configThree.languages}
                value={languageThree}
                onChange={handleSetLanguageThree}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`765px`}
                  value={codeThree}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageThree}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_four')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeFourIsToggled}
              onChange={challengeFourToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeFourIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configFour.languages}
                value={languageFour}
                onChange={handleSetLanguageFour}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`900px`}
                  value={codeFour}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageFour}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_five')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeFiveIsToggled}
              onChange={challengeFiveToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeFiveIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configFive.languages}
                value={languageFive}
                onChange={handleSetLanguageFive}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`520px`}
                  value={codeFive}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageFive}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_six')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeSixIsToggled}
              onChange={challengeSixToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeSixIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configSix.languages}
                value={languageSix}
                onChange={handleSetLanguageSix}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`465px`}
                  value={codeSix}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageSix}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
        </>
      }
    />
  )
}
