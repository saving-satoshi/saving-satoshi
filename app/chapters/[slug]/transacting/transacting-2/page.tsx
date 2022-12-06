'use client';

import { allLessons, Lesson } from 'contentlayer/generated'
import { useState } from 'react';
import Terminal from 'components/Terminal';
import Link from 'next/link';
import clsx from 'clsx';

//Am i going to to this boilerplate for every view? 
// TODO make a factory (or other pattnern) to populate component data

function getTx2() {
    const slug = 'transacting-2'
    const data = allLessons.find((challenge: Lesson) => challenge.slugAsParams === slug)
    return data
}

export default function Genesispt2() {
    const genesis = getTx2()

    const [lines, setLines] = useState([]);
    const [success, setSuccess] = useState(false);
    const [answer, setAnswer] = useState('');

    function onInput(input) {
        setLines(lines => [...lines, input]);

        // echo scriptSigHex | xxd -r -p    
        if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
            const scriptSigHex = input.split(' ')[1]
            const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
            setLines(lines => [...lines, scriptSig]);

            if (scriptSigHex === "6a127461636f7320666f722065766572796f6e65") {    
                setTimeout(() => {
                    setSuccess(true)
                }, 1000);
                setAnswer(scriptSig)
            }
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-screen md:divide-x justify-center px-6 lg:px-0'>
            <div className='flex justify-center w-full text-white'>
                <div className='content-center justify-items-start sm:px-12 px-1 py-6'>
                <div
                    className='genesis-p2'
                    dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                ></div>
                </div>
            </div>
            <div className='flex justify-center w-full text-white'>
                <Terminal lines={lines} onInput={onInput} />
                <div className='flex grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div className='flex justify-center md:justify-start pt-4 md:pt-0'>
                    <h2 className='px-5 text-white/50 text-[21px] font-nunito'>{true ? 'Challenge completed!' : 'Complete the challenge above to continue'}</h2>
                    </div>
                    <div className='flex justify-center md:justify-end pt-4 px-6 md:px-0 md:pt-0 pb-[30px] md:pb-0'>
                    <Link
                        href='/chapters/chapter-1/transacting/transacting-2'
                        className={clsx('py-2.5 px-12 w-full md:w-auto justify-center text-center bg-white text-base-blue text-[21px] font-bold font-nunito', {
                            'pointer-events-none': !true,
                            'pointer-events-auto': false
                        })}>
                        Next
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}