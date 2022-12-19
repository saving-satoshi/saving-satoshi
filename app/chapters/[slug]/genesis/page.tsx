'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'
import RICIBs from 'react-individual-character-input-boxes'
import { useState } from 'react'
import clsx from 'clsx'

// TODO use environment
const inputAmount = 154
const answer =
  '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'

//Am i going to to this boilerplate for every view?
// TODO make a factory (or other pattern) to populate component data
function getGenesis() {
  const slug = 'genesis'
  const data = allLessons.find(
    (challenge: Lesson) => challenge.slugAsParams === slug
  )
  return data
}

export default function Genesis() {
  const genesis = getGenesis()

  const [correctAnswer, setCorrectAnswer] = useState(false)

  function disableNext() {
    setCorrectAnswer(false)
  }

  function enableNext() {
    setCorrectAnswer(true)
  }

  // Todo create utils for repetitive validation
  const validateInput = (string) => {
    if (string == answer) {
      enableNext()
    } else {
      disableNext()
    }
  }

  return (
    <div className="flex w-screen grow flex-col items-center justify-center justify-items-center px-6 lg:px-0">
      <div className="flex w-screen grow items-center py-4 text-white lg:w-1/2">
        <div className="content-center justify-items-center px-6 font-nunito lg:px-0">
          <div
            className="genesis"
            dangerouslySetInnerHTML={{ __html: genesis.body.html }}
          ></div>
          <Link
            href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
            target="_blank"
            rel="noreferrer nofollow"
            className="mt-8 inline-block w-full justify-center bg-white py-2.5 px-12 font-nunito text-xl font-bold text-base-blue transition duration-150 ease-in-out hover:opacity-80 md:w-auto"
          >
            View Block 0
          </Link>
        </div>
      </div>
      <hr className="border-1 h-1 w-screen border-white/25"></hr>
      <div className="flex grow items-center justify-center font-space-mono text-white lg:w-1/2">
        <div className="content-center justify-items-center">
          <h1 className="text-center text-xl">
            Paste the ScriptSig HEX Representation
          </h1>
          <div className="w-full pt-8">
            <RICIBs
              amount={inputAmount}
              autoFocus
              handleOutputString={validateInput}
              inputProps={{
                className: 'bg-transparent',
                placeholder: '_',
                style: {
                  fontSize: '20px',
                  width: '20px',
                  height: '20px',
                  margin: '0px',
                  borderRadius: '0px',
                  textAlign: 'center',
                  justifyContent: 'space-evenly',
                  outline: 'none',
                  fontFamily: 'var(--space-mono-font)',
                },
              }}
              inputRegExp={/^[a-zA-Z0-9_.-]*$/}
            />
          </div>
        </div>
      </div>
      <div className="w-screen border-t border-white/25 sm:pb-[30px] md:pb-[0px]">
        <div className="flex items-stretch justify-between sm:flex-col md:flex-row">
          <div
            className={clsx(
              'flex w-full items-center px-5 align-middle transition duration-150 ease-in-out',
              {
                'bg-success/25': correctAnswer,
              }
            )}
          >
            <h2
              className={clsx(
                'font-nunito text-[21px] text-white opacity-50 transition duration-150 ease-in-out',
                {
                  'opacity-100': correctAnswer,
                }
              )}
            >
              {correctAnswer
                ? 'Challenge completed!'
                : 'Complete the challenge above to continue'}
            </h2>
          </div>
          <Link
            href="/chapters/chapter-1/genesis/genesis-pt2"
            className={clsx(
              'w-full justify-center bg-white py-4 px-12 font-nunito text-[21px] font-bold text-base-blue transition duration-150 ease-in-out md:w-auto',
              {
                'pointer-events-none opacity-50': !correctAnswer,
                'pointer-events-auto hover:opacity-75': correctAnswer,
              }
            )}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  )
}
