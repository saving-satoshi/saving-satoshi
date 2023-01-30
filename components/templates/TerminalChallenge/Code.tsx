import { FindChallengeBottomBar } from 'components/chapters/FindChallengeBottomBar'
import { getUserLessonStatus } from 'lib/content'
import { setUserProgress } from 'lib/user'
import { useState } from 'react'
import PlayIcon from 'public/assets/icons/play.svg'
import Terminal from 'components/Terminal'
import clsx from 'clsx'

export const Code = ({
  expectedInput,
  next,
  isSmallScreen,
  chapterInfo,
  challengeInfo,
  instruction,
  successMessage,
}: {
  expectedInput: string
  next: string
  isSmallScreen: boolean
  chapterInfo: string
  challengeInfo: string
  instruction: string
  successMessage: string
}) => {
  const [lines, setLines] = useState([
    {
      value: 'Enter your commands here and press Enter...',
      type: 'output',
    },
  ])
  const [success, setSuccess] = useState(false)
  const [answer, setAnswer] = useState('')

  function saveProgress() {
    const status = getUserLessonStatus(chapterInfo, challengeInfo)
    if (!status.completed) {
      setUserProgress(chapterInfo, challengeInfo)
    }
  }

  function onInput(input) {
    setLines((lines) => [...lines, { value: input, type: 'input' }])

    if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
      const givenInput = input.split(' ')[1]
      const answerValue = Buffer.from(givenInput, 'hex').toString('utf8')
      setLines((lines) => [...lines, { value: answerValue, type: 'output' }])

      if (givenInput === expectedInput) {
        setTimeout(() => {
          saveProgress()
          setSuccess(true)
        }, 1000)
        setAnswer(answerValue)
      }
    }
  }

  return (
    <div
      className={
        'flex grow flex-col border-white/25 font-space-mono text-white md:border-l ' +
        (isSmallScreen ? 'w-screen' : '')
      }
    >
      <div className="flex grow flex-col items-stretch text-white">
        <Terminal lines={lines} onInput={onInput} />
        <div className="flex flex-col">
          <div
            className={clsx(
              'flex justify-center border-t border-white/25 bg-black/[.15]   md:justify-start',
              {
                'bg-green/25': success,
              }
            )}
          >
            <h2
              className={clsx(
                'p-[20px] font-space-mono text-[18px] text-white/50',
                {
                  'opacity-50': !success,
                }
              )}
            >
              {success ? successMessage : instruction}
            </h2>
          </div>
          {!success && (
            // take out this button as a seprate component
            <div className="flex h-16 border-t border-white/25 pt-4 pl-6 pb-[30px] text-[18px] sm:flex-col md:flex-row md:pl-5 md:pt-0 md:pb-0">
              <button className="flex grow items-center gap-2 transition duration-150 ease-in-out hover:opacity-75">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white">
                  <PlayIcon className="text-black" />
                </span>
                Run the script
              </button>
            </div>
          )}
          {success && (
            <FindChallengeBottomBar
              input={'true'}
              expected={'true'}
              next={next}
            />
          )}
        </div>
      </div>
    </div>
  )
}
