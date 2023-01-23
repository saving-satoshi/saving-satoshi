'use client'

import { Space_Mono } from '@next/font/google'
import { useState, useRef, useEffect } from 'react';

const smono = Space_Mono({
    weight: ['400', '700'],
    variable: '--inter-font',
    preload: true,
    display: 'swap',
  })

interface UserInputProps {
    inputAmount: number;
    value: string;
    userInput: (value: string) => void;
    answer: string;
}

export const UserInput: React.FC<UserInputProps> = ({ inputAmount, value, userInput, answer }) => {
    const [textAreaValue, setTextAreaValue] = useState(value);
    const [matching, setMatching] = useState(true);

    const blankSpace = () => {
      let underscores = '_'.repeat(inputAmount);
      underscores = underscores.substring(0, inputAmount - value.length);
      return (
        <>
          {Array.from({length: inputAmount}, (_, i) => {
            if(i >= inputAmount - underscores.length) return <span key={i}>_</span>
            return <span key={i}>&nbsp;</span>
          })}
        </>
      );
    }
    
    return (
        <form style={{
          position:'relative'
          }}>
            <textarea 
                onChange={(e) => {setTextAreaValue(e.target.value)
                    userInput(e.target.value);
                    setMatching(e.target.value.split('').every((val, i) => val === answer[i]));
                }}
                value={textAreaValue}  
                maxLength={inputAmount}
                spellCheck="false"
                className='w-full h-40 text-inherit text-left text-xl tracking-code bg-transparent font-space-mono absolute top-0 left-0 outline-none resize-none'
                />
              <p
              className='w-full h-40 text-inherit text-xl tracking-code pointer-events-none'
              style={{
                lineBreak: 'anywhere',
                textAlignLast: 'center'
              }}>
                {blankSpace()}
              </p>
            </form>
    )
}