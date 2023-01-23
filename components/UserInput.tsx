'use client'

import { useState } from 'react';

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
        <form className='relative'>
            <textarea 
                onChange={(e) => {setTextAreaValue(e.target.value)
                    userInput(e.target.value);
                    setMatching(e.target.value.split('').every((val, i) => (val === answer[i]) && (value.length === inputAmount - 1)));
                }}
                value={textAreaValue}  
                maxLength={inputAmount}
                spellCheck='false'
                className={
                  `${matching ? 'text-green/100' : 'text-inherit'} w-full h-40 text-left text-2xl tracking-code bg-transparent font-space-mono absolute top-0 left-0 outline-none resize-none`
                }
                />
              <p
              className='w-full h-40 text-inherit text-2xl tracking-code pointer-events-none font-space-mono'
              style={{
                lineBreak: 'anywhere',
                textAlignLast: 'center'
              }}>
                {blankSpace()}
              </p>
            </form>
    )
}