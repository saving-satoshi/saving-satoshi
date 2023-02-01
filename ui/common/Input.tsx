'use client'

import { useState } from 'react';

interface UserInputProps {
    onChange: (value: string) => void;
    answer: string;
    hints?: boolean;
}

export default function Input({ onChange, answer, hints }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [correctAns, setCorrectAns] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === ' ') {
        event.preventDefault();
      }
    };

    const blankSpace = () => {
      let underscores = '_'.repeat(answer.length);
      underscores = underscores.substring(0, answer.length - textAreaValue.length);
      return (
        <>
          {Array.from({length: answer.length}, (_, i) => {
            if(i >= answer.length - underscores.length) return <span className='underscore' key={i}>_</span>
            if(textAreaValue[i] === answer[i]) {
              return <span className='overlay correct' key={i}>{textAreaValue[i]}</span>
            } else if((textAreaValue[i] !== answer[i]) && !!hints) {
              return <span className='overlay incorrect' key={i}>{textAreaValue[i]}</span>
            } else {
              return <span className='overlay' key={i}>{textAreaValue[i]}</span>
            }
          })}
        </>
      );
    }

    return (
        <form className='relative'>
            <textarea 
              onKeyDown={handleKeyDown}
                onChange={(e) => {setTextAreaValue(e.target.value.toLowerCase())
                    onChange(e.target.value.toLowerCase());
                    // setMatching(e.target.value.split('').every((val, i) => (val === answer[i]) && (value.length === inputAmount - 1)));
                    if(((e.target.value === answer) && (e.target.value.length === answer.length))) {
                      setCorrectAns(true)
                    } else {
                      setCorrectAns(false)
                    }
                }}
                value={textAreaValue}  
                maxLength={answer.length}
                spellCheck='false'
                className={
                  `text-transparent w-full h-full overflow-hidden text-[18px] md:text-[30px] tracking-[5px] bg-transparent font-space-mono absolute top-0 left-0 outline-none resize-none leading-[180%]`
                }
                style={{
                  caretColor: '#6e7d92'
                }}
                />
              <p
              className={`${correctAns ? 'overlay-complete' : 'overlay-incomplete'} w-full h-full text-inherit text-[18px] md:text-[30px] tracking-[5px] pointer-events-none font-space-mono leading-[180%]`}
              style={{
                lineBreak: 'anywhere',
              }}>
                {blankSpace()}
              </p>
            </form>
    )
}