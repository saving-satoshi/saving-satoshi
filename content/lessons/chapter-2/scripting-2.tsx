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
const timeLimit = 3000;
const difficulty = 5;
let found = false;
let n = 0;
let prev_result = ''
let prev_hit_num = 0

async function _runScript() {
  let hash = findHash(n)
  if (typeof hash !== 'string') {
    console.log('Error: findHash does not return a string')
    return console.log('KILL')
  }

  if (hash.length !== 64) {
    console.log('Error: findHash should return a string of 64 characters')
    return console.log('KILL')
  }

  function forceSolution() {
    hash = findHash(n + 1);
    hash = new Array(difficulty + 1).join("0") + hash.slice(0, hash.length - difficulty);
    console.log(hash);
    found = true
  }

  setTimeout(() => {
    if (!found) {
      forceSolution()
    }
  }, timeLimit)

  while (!found) {
    hash = findHash(n);

    if (hash === prev_result) {
      prev_hit_num += 1
      if (prev_hit_num === 3) {
        console.log('Error: Your script keeps generating the same hash, make sure you use the nonce')
        break
      }
    }

    console.log(hash);
    prev_result = hash
    n++;
    await _sleep(50);
  }

  console.log('KILL')
}

function _sleep(t) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve();
      clearTimeout(timeout);
    }, t);
  });
}

_runScript();
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
import threading

def _run_script():
  is_searching = True
  n = 0
  difficulty = 5
  time_limit = 3
  prev_result = ''
  prev_hit_num = 0

  hash = find_hash(n)

  if not isinstance(hash, str):
    print('Error: find_hash does not return a string')
    return print('KILL')

  if len(hash) != 64:
    print('Error: find_hash should return a string of 64 characters')
    return print('KILL')

  def force_solution():
    nonlocal is_searching
    h = find_hash(n + 1)
    h = '0' * difficulty + h[difficulty:]
    print(h)
    is_searching = False

  def handle_time_limit():
    time.sleep(time_limit)
    if is_searching:
      force_solution()

  thread = threading.Thread(target=handle_time_limit)
  thread.start()

  while is_searching:
    hash = find_hash(n)

    if hash == prev_result:
      prev_hit_num += 1
      if prev_hit_num == 3:
        print('Error: Your script keeps generating the same hash, make sure you use the nonce')
        break

    print(hash)
    prev_result = hash
    n += 1
    time.sleep(0.05)

  print('KILL')

_run_script()
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
