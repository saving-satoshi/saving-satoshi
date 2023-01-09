import { BoxButton } from 'components/ui/BoxButton'
import { useState } from 'react'
import RICIBs from 'react-individual-character-input-boxes'
import clsx from 'clsx'
import { FindChallengeBottomBar, Status } from 'components/chapters/FindChallengeBottomBar'

// TODO use environment
const inputAmount = 154
const answer =
  '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'

export const Code = ({
  isSmallScreen
}: {
  isSmallScreen: boolean
}) => {
  const [userInput, setUserInput] = useState('');

  return (
    <div className="
      flex
      flex-col
      grow
      md:justify-center
      md:items-center"
    >
      <div className="
        flex
        grow
        md:items-center
        max-w-[840px]
        px-4
        py-8"
      >
        <div className="
          content-center
          justify-items-center
          font-space-mono
          text-white"
        >
          <h2 className="
            text-center
            text-xl
          ">
            Paste the ScriptSig HEX Representation
          </h2>
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
                }
              }}
              inputRegExp={/^[a-zA-Z0-9_.-]*$/}
            />
          </div>
        </div>
      </div>
      <FindChallengeBottomBar full next="/chapters/chapter-1/genesis/genesis-pt2" input={userInput} expected={answer} />
    </div>
  )
}
