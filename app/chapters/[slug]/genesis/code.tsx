import { BoxButton } from 'components/ui/BoxButton'
import { useState } from 'react'
import RICIBs from 'react-individual-character-input-boxes'
import clsx from 'clsx'

// TODO use environment
const inputAmount = 154
const answer =
  '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'

export const Code = ({
  isSmallScreen
}: {
  isSmallScreen: boolean
}) => {
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
                }
              }}
              inputRegExp={/^[a-zA-Z0-9_.-]*$/}
            />
          </div>
        </div>
      </div>
      <div className="
          w-screen
          border-t
          border-white/25
          max-md:px-4
          max-md:py-8
        ">
        <div className="
            flex
            flex-col
            md:flex-row
            items-stretch
            justify-between
            max-md:gap-4
          ">
          <div
            className={clsx(
              'flex w-full items-center align-middle transition duration-150 ease-in-out md:px-5',
              {
                'bg-success/25': correctAnswer,
              }
            )}
          >
            <p
              className={clsx(
                'font-nunito text-[21px] text-white transition duration-150 ease-in-out',
                {
                  'opacity-50': !correctAnswer,
                }
              )}
            >
              {correctAnswer
                ? 'Challenge completed!'
                : 'Complete the challenge above to continue'}
            </p>
          </div>
          <BoxButton
            href="/chapters/chapter-1/genesis/genesis-pt2"
            disabled={!correctAnswer}
            size={!isSmallScreen ? 'big' : null}
          >Next</BoxButton>
        </div>
      </div>
    </div>
  )
}
