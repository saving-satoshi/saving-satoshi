'use client'

import { Space_Mono } from '@next/font/google'
import { useState } from 'react';

const smono = Space_Mono({
    weight: ['400', '700'],
    variable: '--inter-font',
    preload: true,
    display: 'swap',
  })

interface UserInputProps {
    inputAmount: number;
    value: string;
    userInput: (value: string) => void
}

export const UserInput: React.FC<UserInputProps> = ({ inputAmount, value, userInput }) => {
    const [textAreaValue, setTextAreaValue] = useState(value);

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
          position:'relative',
          textAlign: 'center'
          }} >
            <div style={{display: 'inline-block'}}>
              <textarea 
                onChange={(e) => {setTextAreaValue(e.target.value)
                    userInput(e.target.value);
                }}
                value={textAreaValue}  
                maxLength={inputAmount}
                spellCheck="false"
                style={{
                  width: '804px',
                  height: '150px',
                  fontSize: '20px',
                  textAlign: 'left',
                  color:'white',
                  letterSpacing: '10px',
                  background: 'transparent',
                  fontFamily: `${smono.style.fontFamily}`,
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  outline: 'none',
                  resize: 'none'
                }}
                />
              <p style={{
                display: 'block',
                maxWidth: '804px',
                height: '150px',
                lineBreak: 'anywhere',
                fontSize: '20px',
                color:'white',
                letterSpacing: '10px',
                pointerEvents: 'none',
              }}>
                {blankSpace()}
              </p>
              </div>
            </form>
    )
}