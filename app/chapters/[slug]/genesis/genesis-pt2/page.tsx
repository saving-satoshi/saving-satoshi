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
            }
        }
    }

    return (
        <div className='flex flex-row grow items-center justify-items-center w-screen px-6 lg:px-0 justify-center'>
            <div className='flex grow items-center lg:w-1/2 w-screen text-white py-4'>
                <div className='content-center justify-items-center px-6 lg:px-0 font-nunito'>
                    <div
                        className='genesis'
                        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                    ></div>
                </div>
            </div>
            <div className='flex grow items-center lg:w-1/2 text-white font-space-mono justify-center'>
            <div className='flex justify-center w-full h-screen text-white'>
                <Terminal lines={lines} onInput={onInput} />
            </div>
            </div>
        </div>
        
    )

}


            /*
            <div className='flex flex-row grow w-screen justify-center'>
            <div className='flex grow justify-center w-full text-white'>
                <div className='content-center justify-items-start sm:px-12 px-1 py-6'>
                <div
                    className='genesis-p2'
                    dangerouslySetInnerHTML={{ __html: genesis.body.html }}
                ></div>
                </div>
            </div>
            <div className='flex justify-center w-full h-screen text-white'>
                <Terminal lines={lines} onInput={onInput} />
            </div>
        </div>
            <div className='left-0 bottom-0 w-screen'>
                <div className='m-0 flex justify-between items-center text-white border-t border-white/25' aria-disabled>
                    <h2>Complete the challenge above to continue</h2>
                    {success && <SaveProgressButton open={success} />}
                </div>
            </div>
            */