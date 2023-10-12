'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `const crypto = require('crypto')

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, log it to the terminal using console.log().

// Type your code here
`,
    `const crypto = require('crypto')wwooooo

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, log it to the terminal using console.log().

// Type your code here
`,
  ],
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: [
    `from hashlib import sha256

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, print it to the terminal using print().

# Type your code here
`,
    `from hashlib import sha256wooooo

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, print it to the terminal using print().

# Type your code here
`,
  ],
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const configOne: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

const configTwo: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function PublicKeyResources({ lang }) {
  const t = useTranslations(lang)

  const [codeOne, setCodeOne] = useState(
    configOne.languages[configOne.defaultLanguage].defaultCode?.[0]
  )
  const [codeTwo, setCodeTwo] = useState(
    configTwo.languages[configTwo.defaultLanguage].defaultCode?.[1]
  )
  const [languageOne, setLanguageOne] = useState(configOne.defaultLanguage)
  const [languageTwo, setLanguageTwo] = useState(configTwo.defaultLanguage)

  const handleSetLanguageOne = (value) => {
    setLanguageOne(value)
    setCodeOne(configOne.languages[value].defaultCode?.[0])
  }

  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configOne.languages[value].defaultCode?.[1])
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
    <>
      <div>
        <Text className="text-3xl font-bold">Learning Resources</Text>
        <Text>
          What helpful info and resources can we provide for further learning?
        </Text>
        <Text className="mt-[25px] text-xl font-bold">
          The reason for elliptic curve operations
        </Text>
        <Text>
          We use a very specific set of steps to derive the public key because
          there is mathematical proof that reversing this operation is
          essentially impossibly hard. That feature also applies to other
          algorithms ( like RSA), but those have much larger key sizes and are
          less efficient computations. The steps we follow were chosen because:
        </Text>
        <ul className="list-inside list-disc font-nunito text-white">
          <li>
            we want a system where anyone can join using minimal resources
          </li>
          <li>
            we want messages to be short (and therefore cheap to transmit)
          </li>
          <li>
            we need to prove we know a secret without giving away that secret
          </li>
          <li>
            we need it to be practically impossible for anyone else to compute
            our secret
          </li>
        </ul>
        <Text className="mt-[25px] text-xl font-bold">
          Witness Public Key Hash (wpkh) address
        </Text>
        <Text>
          A Bitcoin address is a string of characters that is designed for users
          to handle. It is short, easy to copy and paste, and has some kind of
          built-in checksum to ensure that it is always copied correctly. It
          safely encodes a Bitcoin output script that the recipient can spend
          from. There any several types of output script and several encoding
          mechanisms. In this challenge we encode a compressed public key with
          bech32 to create what is called a witness public key hash address.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">secp256k1</Text>
        <Text>
          Secp256k1 is the name of the elliptic curve used by Bitcoin to
          implement its public key cryptography. All points on this curve are
          valid Bitcoin public keys.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">Generator point</Text>
        <Text>
          A specific point on the secp256k1 curve. Its value is part of the
          secp256k1 standard and it’s always the same. This point is not
          different from other points on the curve, but it is agreed up on as
          the standard starting point for calculations. No one really knows why
          this particular point was chosen.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">
          Elliptic curve operations
        </Text>
        <Text>
          Elliptic curves have their own mathematical rules, so simple
          operations like addition and multiplication work differently. For
          simplicity and brevity, established symbols are re-used, like using a
          “*” for operations that are similar to multiplication.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">Discrete logarithm</Text>
        <Text>
          A mathematical system where you can, for example, multiply but cannot
          divide. A simple metaphor for this is looking at a clock. Three hours
          past 11 o'clock is 2 o'clock. So we could say “11+3=2”. However if
          wanted to perform “2-x=11” and solve for x, you would have infinite
          possible answers (3, 15, 27, 39...). More on wikipedia.
        </Text>
        <hr className="my-7 h-[1px] w-full opacity-25" />
        <Text className="text-3xl font-bold">Tips</Text>
        <Text>
          What specific tips can/do we want to give learners if they are stuck?
        </Text>
        <hr className="my-7 h-[1px] w-full opacity-25" />
        <Text className="text-3xl font-bold">Spoiler</Text>
        <div className="flex flex-col gap-[15px]">
          <Text>Solution to part one of this challenge</Text>
          <div className="border border-white/25">
            <LanguageTabs
              languages={configOne.languages}
              value={languageOne}
              onChange={handleSetLanguageOne}
              noHide={true}
            />
            <MonacoEditor
              loading={<Loader className="h-10 w-10 text-white" />}
              height={`calc(var(--dynamic-height) - 767px)`}
              value={codeOne}
              beforeMount={handleBeforeMount}
              onMount={handleMount}
              language={languageOne}
              theme={'satoshi'}
              options={readOnlyOptions}
            />
          </div>
          <Text>Solution to part two of this challenge</Text>
          <div className="border border-white/25">
            <LanguageTabs
              languages={configTwo.languages}
              value={languageTwo}
              onChange={handleSetLanguageTwo}
              noHide={true}
            />
            <MonacoEditor
              loading={<Loader className="h-10 w-10 text-white" />}
              height={`calc(var(--dynamic-height) - 767px)`}
              value={codeTwo}
              beforeMount={handleBeforeMount}
              onMount={handleMount}
              language={languageTwo}
              theme={'satoshi'}
              options={readOnlyOptions}
            />
          </div>
        </div>
      </div>
    </>
  )
}
