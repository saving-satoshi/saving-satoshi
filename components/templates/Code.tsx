import Terminal from 'components/Terminal'
import clsx from 'clsx'
import PlayIcon from 'public/assets/icons/play.svg'
import { useState } from 'react'
import { FindChallengeBottomBar } from 'components/chapters/FindChallengeBottomBar'

export const Code = ({
    solutionScriptSigHex, 
    next,
    isSmallScreen
  }: {
    solutionScriptSigHex : string,
    next : string,
    isSmallScreen: boolean
  }) => {
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
                scriptSigHex === solutionScriptSigHex
            ) {
                setTimeout(() => {
                setSuccess(true)
                }, 1000)
                setAnswer(scriptSig)
            }
        }
    }
    
    return (
        <div className={"flex grow flex-col border-white/25 font-space-mono text-white md:border-l " + (isSmallScreen ? "w-screen" : "")}>
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
                            : 'Waiting for you to write and run the script....'}
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
                    <FindChallengeBottomBar input={"true"} expected={"true"} next={next} />
                    )}
                </div>
            </div>
        </div>
    )
}
  