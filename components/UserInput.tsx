'use client'

import { useState } from 'react';

interface UserInputProps {
    inputAmount: number;
    value: string;
    userInput: (value: string) => void;
    answer: string;
    hints?: boolean;
}

export const UserInput: React.FC<UserInputProps> = ({ inputAmount, value, userInput, answer, hints }) => {
    const [textAreaValue, setTextAreaValue] = useState(value);
    const [matching, setMatching] = useState(false);

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

    const hintColorer = () => {
      if((hints === true && ((value !== answer) && (value.length === inputAmount)))) {
        // TODO add hints
        console.log(answer);
      } else {
        return
      }
    }

    hintColorer();

    return (
        <form className='relative'>
            <textarea 
                onChange={(e) => {setTextAreaValue(e.target.value)
                    userInput(e.target.value);
                    // setMatching(e.target.value.split('').every((val, i) => (val === answer[i]) && (value.length === inputAmount - 1)));
                    if(((e.target.value === answer) && (e.target.value.length === inputAmount))) {
                      setMatching(true)
                    } else {
                      setMatching(false)
                    }
                }}
                value={textAreaValue}  
                maxLength={inputAmount}
                spellCheck='false'
                className={
                  `${matching ? 'text-green/100' : 'text-inherit'} w-full h-full overflow-hidden text-[18px] md:text-[30px] tracking-[5px] bg-transparent font-space-mono absolute top-0 left-0 outline-none resize-none leading-[180%]`
                }
                />
              <p
              className='w-full h-full text-inherit text-[18px] md:text-[30px] tracking-[5px] pointer-events-none font-space-mono leading-[180%]'
              style={{
                lineBreak: 'anywhere',
              }}>
                {blankSpace()}
              </p>
            </form>
    )
}