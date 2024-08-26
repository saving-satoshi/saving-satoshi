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

const javascriptChallenge = {
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

const pythonChallenge = {
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

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallenge,
    python: pythonChallenge,
  },
}

export default function PutItTogetherResourcesOneNormal({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const initialStateCode =
    config.languages[getLanguageString(currentLanguage)].defaultCode
  const [code, setCode] = useState<string>(initialStateCode as string)
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode as string)
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
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={config.languages}
                value={language}
                onChange={handleSetLanguage}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`1135px`}
                  value={code}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={language}
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
