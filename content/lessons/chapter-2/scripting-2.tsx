'use client'

import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  key: 'CH2SCR2',
}

const javascript = {
  program: `
const maxTries = 30;
const difficulty = 5;
let found = false;
let n = 0;

async function run() {
  let hash = findHash(n)
  if (typeof hash !== 'string') {
    console.log('Error: findHash does not return a string')
    found = true
    return console.log('KILL')
  }

  if (hash.length !== 64) {
    console.log('Error: findHash should return a string of 64 characters')
    found = true
    return console.log('KILL')
  }

  while (!found) {
    hash = findHash(n);
    console.log(hash);

    if (hash.startsWith("0" * difficulty) || n === maxTries) {
      if (!hash.startsWith("0" * difficulty)) {
        hash = findHash(n + 1);
        hash =
          new Array(difficulty + 1).join("0") +
          hash.slice(0, hash.length - difficulty);
        console.log(hash);
      }
      found = true;
    }

    n++;
    await sleep(50);
  }

  console.log('KILL')
}

function sleep(t) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve();
      clearTimeout(timeout);
    }, t);
  });
}

run();
`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: `const crypto = require('crypto')

function findHash(nonce) {
  /* Enter a function that returns a sha256 hash based on
  the nonce argument provided */
  return hash
}
`,
  validate: async (answer) => {
    if (!answer.startsWith('00000')) {
      return [false, 'Hash must start with 5 zeroes.']
    }

    if (answer.length !== 64) {
      return [false, 'Hash must be 64 characters long']
    }

    return [true, undefined]
  },
}

const python = {
  program: `
import time

max_tries = 30
is_searching = True
n = 0
difficulty = 5

while is_searching is True:
  h = find_hash(n)

  if not isinstance(h, str):
    print('Error: find_hash does not return a string')
    is_searching = False
    print('KILL')
    continue

  if len(h) != 64:
    print('Error: find_hash should return a string of 64 characters')
    is_searching = False
    print('KILL')
    continue

  print(h)

  if h.startswith('0' * difficulty) or n == max_tries:
    if not h.startswith('0' * difficulty):
      h = find_hash(n + 1)
      h = '0' * difficulty + h[difficulty:]
      print(h)
    is_searching = False

  n += 1
  time.sleep(0.05)

print('KILL')
`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: `from hashlib import sha256

def find_hash(nonce):
  # Enter a function that returns a sha256 hash based on
  # the nonce argument provided
  return hash`,
  validate: async (answer) => {
    if (!answer.startsWith('00000')) {
      return [false, 'Hash must start with 5 zeroes.']
    }

    if (answer.length !== 64) {
      return [false, 'Hash must be 64 characters long']
    }

    return [true, undefined]
  },
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function Scripting2({ lang }) {
  const t = useTranslations(lang)

  const [language, setLanguage] = useState(config.defaultLanguage)

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-2', 'scripting-2')}
      successMessage={t('chapter_two.scripting_two.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_two.scripting_two.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_two.scripting_two.paragraph_two')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_two.scripting_two.${language}.paragraph_three`)}
        </Text>
        <ul className="list-disc pl-4">
          <li className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_two.scripting_two.${language}.list_one`)}
          </li>
          <li className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_two.scripting_two.${language}.list_two`)}
          </li>
        </ul>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
