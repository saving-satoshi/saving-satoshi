'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import { useState } from 'react'
import Terminal from 'components/Terminal'
import clsx from 'clsx'
import { SignUpModal } from 'components/chapters/SignUpModal'
import PlayIcon from 'public/assets/icons/play.svg'

//Am i going to to this boilerplate for every view?
// TODO make a factory (or other pattnern) to populate component data

function getTx2() {
  const slug = 'transacting-2'
  const data = allLessons.find(
    (challenge: Lesson) => challenge.slugAsParams === slug
  )
  return data
}

export default function Genesispt2() {
  const genesis = getTx2()

  const [lines, setLines] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [success, setSuccess] = useState(false);
  const [answer, setAnswer] = useState('')

  function onInput(input) {
    setLines((lines) => [...lines, input])

    // echo scriptSigHex | xxd -r -p
    if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
      const scriptSigHex = input.split(' ')[1]
      const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
      setLines((lines) => [...lines, scriptSig])

      if (scriptSigHex === '6a127461636f7320666f722065766572796f6e65') {
        setTimeout(() => {
          setOpenModal(true)
          setSuccess(true)
        }, 1000)
        setAnswer(scriptSig)
      }
    }
  }

  function onSignUp(data) {
    localStorage.setItem('user', JSON.stringify({
      publicKey: data.keyPair.publicKey,
      avatar: data.avatar,
      progress: {
        chapter: 'transacting',
        lesson: 'transacting-2',
      }
    }))

    setOpenModal(false)
  }

  return (
    <div className="grid w-screen grow grid-cols-1 justify-center px-6 md:grid-cols-2 md:divide-x lg:px-0">
      <div className="flex w-full justify-center text-white">
        <div className="content-center justify-items-start px-1 py-6 sm:px-12">
          <div
            className="genesis-p2"
            dangerouslySetInnerHTML={{ __html: genesis.body.html }}
          ></div>
        </div>
      </div>
      <div className="flex grow flex-col items-center justify-center font-space-mono text-white">
        <div className="flex grow flex-col items-start items-stretch text-white">
          <Terminal lines={lines} onInput={onInput} />
          <div className="flex flex-col">
            <div className="flex justify-center border-t border-white/25 bg-black/[.15] p-[20px] md:justify-start">
              <h2
                className={clsx('font-space-mono text-[18px] text-white/50', {
                  'bg-success/25': success,
                  'opacity-50': !success,
                })}
              >
                {success
                  ? answer
                  : 'Waiting for you to write and run the script...'}
              </h2>
            </div>
            <div className="flex border-t border-white/25 pt-4 pl-6 pb-[30px] text-[18px] sm:flex-col md:flex-row md:pl-5 md:pt-0 md:pb-0">
              <button className="flex grow items-center gap-2 py-5 transition duration-150 ease-in-out hover:opacity-75">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white">
                  <PlayIcon className="text-black" />
                </span>
                Run the script
              </button>
              <SignUpModal onConfirm={onSignUp} onClose={() => setOpenModal(false)} open={openModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
