'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import Terminal from 'components/Terminal'
import { BoxButton } from 'components/ui/BoxButton'
import { useState } from 'react'
import clsx from 'clsx'
import { TerminalOutput } from 'react-terminal-ui'
import PlayIcon from 'public/assets/icons/play.svg'
import { Tips } from 'components/Tips'
import { Tip } from 'components/Tip'
import { FindChallengeBottomBar } from 'components/chapters/FindChallengeBottomBar'
import { CopyButton } from 'components/ui/CopyButton'
import { setUserProgress } from 'lib/user'
import { getUserLessonStatus } from 'lib/content'
import { CopyableCode } from 'components/ui/CopyableCode'

//Am i going to to this boilerplate for every view?
// TODO make a factory (or other pattnern) to populate component data

function getGenesis() {
  const slug = 'genesis-pt2'
  const data = allLessons.find(
    (challenge: Lesson) => challenge.slugAsParams === slug
  )
  return data
}

function saveProgress() {
  const status = getUserLessonStatus('chapter-1', 'transacting')
  if(!status.completed) {
    setUserProgress('chapter-1', 'transacting')
  }
}

export default function Genesispt2() {
  const genesis = getGenesis()

  const [lines, setLines] = useState([{
    value: 'Enter your commands here and press Enter...',
    type: 'output'
  }])
  const [success, setSuccess] = useState(false)
  const [answer, setAnswer] = useState('')

  function onInput(input) {
    setLines((lines) => [...lines, {value: input, type: 'input'}])

    // echo scriptSigHex | xxd -r -p
    if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
      const scriptSigHex = input.split(' ')[1]
      const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
      setLines((lines) => [...lines, {value: scriptSig, type: 'output'}])

      if (
        scriptSigHex ===
        '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
      ) {
        setTimeout(() => {
          saveProgress()
          setSuccess(true)
        }, 1000)
        setAnswer(scriptSig)
      }
    }
  }

  return (
    <div className="justify-stretch grid w-screen grow grid-cols-1 px-6 md:grid-cols-2 lg:px-0">
      <div className="flex w-full justify-center text-white">
        <div className="ccontent-center justify-items-start px-1 py-6 sm:px-12 flex flex-col">
          <div
            className="genesis"
            dangerouslySetInnerHTML={{ __html: genesis.body.html }}
          >
          </div>
          <CopyableCode code={'echo scriptSigHex | xxd -r -p'} language='shell'/>
          <Tips>
            <Tip title='What was the scriptSigHex value again?'>
              This is the scriptSigHex value you found in the previous challenge. Press the button below to copy it to your clipboard.
              <br/>
              <CopyButton classes='mt-2' content={
                '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
              }>Copy ScriptSigHex value</CopyButton>
            </Tip>
          </Tips>
        </div>
      </div>
      <div className="flex grow flex-col border-white/25 font-space-mono text-white md:border-l">
        <div className="flex grow flex-col items-stretch text-white">
          <Terminal lines={lines} onInput={onInput} />
          <div className="flex flex-col">
            <div className="flex justify-center border-t border-white/25 bg-black/[.15] p-[20px] md:justify-start">
              <h2
                className={clsx('font-space-mono text-[18px] text-white/50', {
                  'bg-green/25': success,
                  'opacity-50': !success,
                })}
              >
                {success
                  ? answer
                  : 'Waiting for you to write and run the script...'}
              </h2>
            </div>
            {!success && (
            <div className="flex border-t h-16 border-white/25 pt-4 pl-6 pb-[30px] text-[18px] sm:flex-col md:flex-row md:pl-5 md:pt-0 md:pb-0">
              <button className="flex grow items-center gap-2 transition duration-150 ease-in-out hover:opacity-75">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white">
                  <PlayIcon className="text-black" />
                </span>
                Run the script
              </button>
            </div>
            )}
            {success && (
              <FindChallengeBottomBar input={"true"} expected={"true"} next="/chapters/chapter-1/transacting/" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
