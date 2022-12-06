'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import Terminal from 'components/Terminal';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { TerminalOutput } from 'react-terminal-ui';

//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattnern) to populate component data

function getGenesis() {
    const slug = 'genesis-pt2'
    const data = allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default function Genesispt2() {
    const genesis = getGenesis()

    const [lines, setLines] = useState([]);
    const [success, setSuccess] = useState(false);
    const [answer, setAnswer] = useState('')

    function onInput(input) {
        setLines(lines => [...lines, input]);

        // echo scriptSigHex | xxd -r -p    
        if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
            const scriptSigHex = input.split(' ')[1]
            const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
            setLines(lines => [...lines, scriptSig]);

            if (scriptSigHex === "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73") {
                setTimeout(() => {
                    setSuccess(true)
                }, 1000);
                setAnswer(scriptSig)
            }
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-screen justify-stretch grow px-6 lg:px-0'>
            <div className='flex justify-center w-full text-white'>
                <div className='ccontent-center justify-items-start sm:px-12 px-1 py-6'>
                    <div
                        className='genesis'
                        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                    ></div>
                </div>
            </div>
            <div className='flex grow flex-col text-white font-space-mono md:border-l border-white/25'>
                <div className='flex flex-col grow items-stretch text-white'>
                    <Terminal lines={lines} onInput={onInput} />
                    <div className='flex flex-col'>
                        <div className='flex justify-center md:justify-start bg-black/[.15] p-[20px] border-t border-white/25'>
                            <h2 className={clsx('text-white/50 text-[18px] font-space-mono', {
                                'bg-success/25': success,
                                'opacity-50': !success
                            })}>{success ? answer : 'Waiting for you to write and run the script...'}</h2>
                        </div>
                        <div className='flex sm:flex-col md:flex-row pt-4 pl-6 md:pl-5 md:pt-0 pb-[30px] md:pb-0 text-[18px] border-t border-white/25'>
                            <button className="flex grow gap-2 items-center hover:opacity-75 transition ease-in-out duration-150">
                                <span className="flex bg-white w-7 h-7 justify-center items-center rounded">
                                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 13.4194V1.58062C0.5 0.742119 1.46993 0.275946 2.1247 0.799757L9.52391 6.71913C10.0243 7.11946 10.0243 7.88054 9.52391 8.28087L2.1247 14.2002C1.46993 14.7241 0.5 14.2579 0.5 13.4194Z" className="fill-black" />
                                    </svg>
                                </span>
                                Run the script
                            </button>
                            <Link
                                href='/chapters/chapter-1/transacting/'
                                className={clsx('py-5 px-12 w-full md:w-auto justify-center text-center bg-white text-base-blue text-[21px] font-bold font-nunito transition ease-in-out duration-150', {
                                    'pointer-events-none opacity-50': !success,
                                    'pointer-events-auto hover:opacity-75': success
                                })}>
                                Next
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
