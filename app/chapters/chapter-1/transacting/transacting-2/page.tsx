'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import { useState } from 'react'
import Terminal from 'components/Terminal'
import clsx from 'clsx'
import { SignUpModal } from 'components/chapters/SignUpModal'
import PlayIcon from 'public/assets/icons/play.svg'
import { FindChallengeBottomBar } from 'components/chapters/FindChallengeBottomBar'

export default function Genesispt2() {
  const [lines, setLines] = useState([{
    value: 'Enter your commands here and press Enter...',
    type: 'output'
  }])
  const [success, setSuccess] = useState(false);
  const [answer, setAnswer] = useState('')

  function onInput(input) {
    setLines((lines) => [...lines, {value: input, type: 'input'}])

    // echo scriptSigHex | xxd -r -p
    if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
      const scriptSigHex = input.split(' ')[1]
      const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
      setLines((lines) => [...lines, {value: scriptSig, type: 'output'}])

      console.log(scriptSigHex)

      if (scriptSigHex === '6a127461636f7320666f722065766572796f6e65') {
        setTimeout(() => {
          setSuccess(true)
        }, 1000)
        setAnswer(scriptSig)
      }
    }
  }

  return (
    <div className="grid w-screen grow grid-cols-1 justify-center px-6 md:grid-cols-2 md:divide-x lg:px-0">
      <div className="flex w-full justify-center text-white">
        <div className="content-center justify-items-start px-1 py-6 sm:px-12">
          <div className='genesis-p2'>
            <h1>Another secret message</h1>
            <p>
              Then, look for the hex representation of the ScriptPubKey field.
            </p>
            <p>
              Once you've found it, decode the hidden message, just like we did in the previous exercise.
            </p>
            <p>
              And remember, 'Bitcoin is for everyone.'
            </p>
            <pre><code>echo scriptSigHex | xxd -r -p</code></pre>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col items-center justify-center font-space-mono text-white">
        <div className="flex grow flex-col items-start items-stretch text-white">
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
            <div className="flex border-t border-white/25 pt-4 pl-6 pb-[30px] text-[18px] sm:flex-col md:flex-row md:pl-5 md:pt-0 md:pb-0">
              <button className="flex grow items-center gap-2 py-5 transition duration-150 ease-in-out hover:opacity-75">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white">
                  <PlayIcon className="text-black" />
                </span>
                Run the script
              </button>
            </div>
            )}
            {success && (
              <FindChallengeBottomBar next="/chapters/chapter-1/done" input={"true"} expected={"true"} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
