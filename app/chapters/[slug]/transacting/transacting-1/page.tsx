'use client'

import { Input } from 'components/Input'
import { allLessons, Lesson } from 'contentlayer/generated'
import { BoxButton } from 'components/ui/BoxButton'
import { useState } from 'react'
import clsx from 'clsx'
import RICIBs from 'react-individual-character-input-boxes'
import { FindChallengeBottomBar, Status } from 'components/chapters/FindChallengeBottomBar'

const inputAmount = 40
const answer = '6a127461636f7320666f722065766572796f6e65'

//Am i going to to this boilerplate for every view?
// TODO make a factory (or other pattnern) to populate component data

function getTx2() {
  const slug = 'transacting-1'
  const data = allLessons.find(
    (challenge: Lesson) => challenge.slugAsParams === slug
  )
  return data
}

export default function Genesispt2() {
  const genesis = getTx2()

  const [userInput, setUserInput] = useState('')

  return (
    <div className="flex w-screen grow flex-col items-center px-6 lg:px-0">
      <div className="flex w-screen grow py-4 text-white lg:w-1/2">
        <div className="flex flex-col justify-center px-6 font-nunito lg:px-0">
          <div
            className="genesis"
            dangerouslySetInnerHTML={{ __html: genesis.body.html }}
          ></div>
          <div className="mt-8 flex">
            <BoxButton
              href="https://blockstream.info/tx/75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8?expand"
              external={true}
            >View transaction</BoxButton>
          </div>
        </div>
      </div>
      <hr className="border-1 h-1 w-screen border-white/25"></hr>
      <div className="flex grow justify-center font-space-mono text-white lg:w-1/2">
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-xl">Enter the OP_RETURN type</h1>
          <div className="w-full pt-8">
            <RICIBs
              amount={inputAmount}
              autoFocus
              handleOutputString={str => setUserInput(str)}
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
      <FindChallengeBottomBar next="/chapters/chapter-1/transacting/transacting-2" full input={userInput} expected={answer} />
    </div>
  )
}
