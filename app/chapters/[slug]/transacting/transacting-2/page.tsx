'use client';

import { allLessons, Lesson } from 'contentlayer/generated'
import { useState } from 'react';
import Terminal from 'components/Terminal';

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
            </div>
        </div>
    )

}