'use client'

import { Space_Mono } from '@next/font/google'
import { useState } from 'react';

const smono = Space_Mono({
    weight: ['400', '700'],
    variable: '--inter-font',
    preload: true,
    display: 'swap',
  })

interface TextAreaProps {
    inputAmount: number;
    value: string;
    userInput: (value: string) => void
}

export const TransactionInput: React.FC<TextAreaProps> = ({ inputAmount, value, userInput }) => {
    const [textAreaValue, setTextAreaValue] = useState(value);
    
    return (
        <form style={{position:'relative'}} >
              <br/>
              <textarea 
                onChange={(e) => {setTextAreaValue(e.target.value)
                    userInput(e.target.value);
                }}
                value={textAreaValue}  
                id="text" name="text"
                rows={4} cols={40}
                maxLength={inputAmount}
                spellCheck="false"
                style={{
                    width: '900px',
                    height: '120px',
                    fontSize: '20px',
                    color:'white',
                    letterSpacing: '10px',
                    background: 'transparent',
                    fontFamily: `${smono.style.fontFamily}`,
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '1',
                    outline: 'none',
                    resize: 'none'
                }}
                />
              <p style={{
                    display: 'block',
                    width: '900px',
                    height: '120px',
                    lineBreak: 'anywhere',
                    fontSize: '20px',
                    color:'white',
                    letterSpacing: '10px',
                    position: 'relative',
                    top: '-20px',
                    zIndex: '0'
              }}>
                {`_`.repeat(inputAmount)}
              </p>
              <br/>
            </form>
    )
}