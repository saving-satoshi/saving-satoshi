'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

const javascriptChallengeOne = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `  digest(input_index) {
    const dsha256 = (data) => {
      return Hash('sha256').update(Hash('sha256').update(data).digest()).digest();
    };

    // Start with an empty 4-byte Buffer
    let buf = Buffer.alloc(4);
    // Write the transaction version in little endian
    buf.writeUInt32LE(this.version, 0);

    // Create a temporary Buffer and write the serialized outpoints of every input
    let outpoints = Buffer.alloc(this.inputs.length * 36);
    for (let i = 0; i < this.inputs.length; i++)
      this.inputs[i].outpoint.serialize().copy(outpoints, i * 36);
    // double-SHA256 the serialized outpoints and append that to the main Buffer
    buf = Buffer.concat([buf, dsha256(outpoints)]);

    // Create a temporary Buffer and write the sequences of every input in little endian
    const sequences = Buffer.alloc(4 * this.inputs.length);
    for (let i = 0; i < this.inputs.length; i++)
      sequences.writeUInt32LE(this.inputs[i].sequence, i * 4);
    // double-SHA256 the serialized sequences and append that to the main Buffer
    buf = Buffer.concat([buf, dsha256(sequences)]);

    // Serialize the outpoint of the one input we are going to sign and append it to the main Buffer
    buf = Buffer.concat([buf, this.inputs[input_index].outpoint.serialize()]);
    // Serialize the scriptcode of the one input we are going to sign and append it to the main Buffer
    buf = Buffer.concat([buf, this.inputs[input_index].scriptcode]);

    // Append the value of the input we are going to spend in little endian to the main Buffer
    const val_and_seq = Buffer.alloc(12);
    val_and_seq.writeBigInt64LE(BigInt(this.inputs[input_index].value), 0);
    // Append the sequence of the input we are going to spend in little endian to the main Buffer
    val_and_seq.writeUInt32LE(this.inputs[input_index].sequence, 8);
    buf = Buffer.concat([buf, val_and_seq]);

    // Create a temporary Buffer and write all the serialized outputs of this transaction
    let outputs = Buffer.alloc(0);
    for (const output of this.outputs)
      outputs = Buffer.concat([outputs, output.serialize()]);
    // double-SHA256 the serialized outputs and append that to the main Buffer
    buf = Buffer.concat([buf, dsha256(outputs)]);

    // Append the transaction locktime in little endian to the main Buffer
    const locktime_and_sighash = Buffer.alloc(8);
    locktime_and_sighash.writeUInt32LE(this.locktime, 0);
    // Append the sighash flags in little endian to the main Buffer
    locktime_and_sighash.writeUInt32LE(1, 4);
    buf = Buffer.concat([buf, locktime_and_sighash]);

    // Finally, return the double-SHA256 of the entire main Buffer
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

const pythonChallengeOne = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `    def digest(self, input_index):
        def dsha256(data):
            return hashlib.new('sha256', hashlib.new('sha256', data).digest()).digest()

        # Start with an empty bytes object
        s = b""
        # Append the transaction version in little endian
        s += pack("<I", self.version)

        # Create a temporary bytes object and write the serialized outpoints of every input
        outpoints = b""
        for inp in self.inputs:
            outpoints += inp.outpoint.serialize()
        # double-SHA256 the serialized outpoints and append that to the main buffer
        s += dsha256(outpoints)

        # Create a temporary bytes object and write the sequences of every input in little endian
        sequences = b""
        for inp in self.inputs:
            sequences += pack("<I", inp.sequence)
        # double-SHA256 the serialized sequences and append that to the main buffer
        s += dsha256(sequences)

        # Serialize the outpoint of the one input we are going to sign and add it to the main buffer
        s += self.inputs[input_index].outpoint.serialize()
        # Serialize the scriptcode of the one input we are going to sign and add it to the main buffer 
        s += self.inputs[input_index].scriptcode

        # Append the value of the input we are going to spend in little endian to the main buffer 
        s += pack("<q", self.inputs[input_index].value)
        # Append the sequence of the input we are going to spend in little endian to the main buffer
        s += pack("<I", self.inputs[input_index].sequence)

        # Create a temporary bytes object and write all the serialized outputs of this transaction
        outputs = b""
        for out in self.outputs:
            outputs += out.serialize()
        # double-SHA256 the serialized outputs and append that to the main buffer
        s += dsha256(outputs)

        # Append the transaction locktime in little endian to the main buffer
        s += pack("<I", self.locktime)
        # Append the sighash flags in little endian to the main buffer
        s += pack("<I", 1)

        # Finally, return the double-SHA256 of the entire main buffer
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

const javascriptChallengeTwo = {
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

    if (s > (secp256k1.ORDER / BigInt(2)))
      s = secp256k1.ORDER - s;
    return [r, s];
  }

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

const pythonChallengeTwo = {
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
        return (r, s)

    def sign_input(self, index, priv, pub, sighash=1):
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

const javascriptChallengeThree = {
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
  }
  
  // Update the change amount to account for miner fees
  const out1 = Output.from_options(addr, 60999000);`,
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
        return r

    # Update the change amount to account for miner fees
    out1 = Output.from_options(addr, 60999000)`,
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

export default function PutItTogetherResources({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
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
  const [languageOne, setLanguageOne] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageTwo, setLanguageTwo] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageThree, setLanguageThree] = useState(
    getLanguageString(currentLanguage)
  )
  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)
  const [challengeThreeIsToggled, setChallengeThreeIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const challengeThreeToggleSwitch = () => {
    setChallengeThreeIsToggled(!challengeThreeIsToggled)
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
                  height={`765px`}
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
                  height={`1435px`}
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
                  height={`425px`}
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
        </>
      }
    />
  )
}
