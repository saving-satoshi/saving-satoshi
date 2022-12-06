'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import Link from 'next/link'
import RICIBs from 'react-individual-character-input-boxes'
import { useState } from "react";
import clsx from 'clsx';

// TODO use environment
const inputAmount = 154
const answer = '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'


//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattern) to populate component data
function getGenesis() {
    const slug = 'genesis'
    const data = allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default function Genesis() {
    const genesis = getGenesis()

    const [correctAnswer, setCorrectAnswer] = useState(false);

    function disableNext() {
        setCorrectAnswer(false);
    }
    
      function enableNext() {
        setCorrectAnswer(true);
    }


    // Todo create utils for repetitive validation
    const validateInput = (string) => {
        if (string == answer) {
            enableNext()
        }
        else {
            disableNext()
        }
    }

    return (
        <div className='flex flex-col grow items-center justify-items-center w-screen px-6 lg:px-0 justify-center'>
            <div className='flex grow items-center lg:w-1/2 w-screen text-white py-4'>
                <div className='content-center justify-items-center px-6 lg:px-0 font-nunito'>
                    <div
                        className='genesis'
                        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                    ></div>
                    <Link
                        href='https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'
                        target='_blank'
                        className='mt-8 py-2.5 px-12 inline-block w-full md:w-auto justify-center bg-white text-base-blue text-xl font-nunito font-bold hover:opacity-80 transition ease-in-out duration-150'>
                        View Block 0
                    </Link>
                </div>
            </div>
            <hr className='border-1 border-white/25 h-1 w-screen'></hr>
            <div className='flex grow items-center lg:w-1/2 text-white font-space-mono justify-center'>
                <div className='content-center justify-items-center '>
                    <h1 className='text-xl text-center'>Paste the ScriptSig HEX Representation</h1>
                    <div className='pt-8 w-full'>
                        <RICIBs
                            amount={inputAmount}
                            autoFocus
                            handleOutputString={validateInput}
                            inputProps={
                                {
                                    className: 'bg-transparent',
                                    placeholder: '_',
                                    style: {
                                        'font-size': '20px',
                                        'width': '20px',
                                        'height': '20px',
                                        'margin': '0px',
                                        'border-radius': '0px',
                                        'text-align': 'center',
                                        'justify-content': 'space-evenly'
                                    }
                                }}
                            inputRegExp={/^[a-zA-Z0-9_.-]*$/}
                        />
                    </div>
                </div>
            </div>
            <div className='w-screen sm:pb-[30px] md:pb-[0px] border-t border-white/25'>
                <div className='flex sm:flex-col md:flex-row justify-between items-center'>
                    <h2 className='px-5 text-white/50 text-[21px] font-nunito'>{correctAnswer ? 'Challenge completed!' : 'Complete the challenge above to continue'}</h2>
                    <Link
                        href='/chapters/chapter-1/genesis/genesis-pt2'
                        className={clsx('py-4 px-12 w-full md:w-auto justify-center bg-white text-base-blue text-[21px] font-bold font-nunito transition ease-in-out duration-150', {
                            'pointer-events-none': !correctAnswer,
                            'pointer-events-auto': correctAnswer
                        })}>
                        Next
                    </Link>
                </div>
            </div>
        </div>
    )
}