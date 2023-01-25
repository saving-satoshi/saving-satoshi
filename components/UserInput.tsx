'use client'

import { useState, useRef, useEffect } from 'react';

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

    const handleTextAreaChange = (event: React.InputEvent<HTMLDivElement>) => {
      if(value.length <= inputAmount - 1) { 
        setTextAreaValue(value);
      }
      console.log(textAreaValue.length <= inputAmount, textAreaValue.length, inputAmount)
  }

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.innerHTML = "";
    for (let i = 0; i < textAreaValue.length; i++) {
        let span = document.createElement("span");
        if (textAreaValue.charAt(i) === 'example string'.charAt(i)) {
            span.className = "correct-char";
        } else {
            span.className = "incorrect-char";
        }
        let text = document.createTextNode(textAreaValue.charAt(i));
        span.appendChild(text);
        divRef.current.insertBefore(span, divRef.current.firstChild);
    }
}, [textAreaValue]);

    const hintColorer = () => {
      if((hints === true && ((value !== answer) && (value.length === inputAmount)))) {
        // TODO add hints
        console.log(answer);
      } else {
        return
      }
    }

    hintColorer();
    console.log(textAreaValue, textAreaValue.length)

    return (
        <form className='relative'>
            {/* <textarea 
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
                  `${matching ? 'text-green/100' : 'text-inherit'} w-full h-full overflow-hidden text-2xl tracking-code bg-transparent font-space-mono absolute top-0 left-0 outline-none resize-none`
                }
                /> */}
                <div
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={(e) => {handleTextAreaChange(e.currentTarget.textContent)
                      userInput(textAreaValue);
                      // setMatching(e.target.value.split('').every((val, i) => (val === answer[i]) && (value.length === inputAmount - 1)));
                      if(((e.currentTarget.textContent === answer) && (e.currentTarget.textContent.length === inputAmount))) {
                        setMatching(true)
                      } else {
                        setMatching(false)
                      }
                  }
                } 
                ref={divRef}
                spellCheck='false'
                className={
                  `${matching ? 'text-green/100' : 'text-inherit'} w-full h-full overflow-hidden text-[18px] md:text-[30px] tracking-[5px] bg-transparent font-space-mono absolute top-0 left-0 outline-none resize-none leading-[180%]`
                }
                style={{
                  lineBreak: 'anywhere',
                  // textAlignLast: 'center'
                }}>
                  {textAreaValue}
                </div>
              <p
              className='w-full h-full text-inherit text-[18px] md:text-[30px] tracking-[5px] pointer-events-none font-space-mono leading-[180%]'
              style={{
                lineBreak: 'anywhere',
                // textAlignLast: 'center'
              }}>
                {blankSpace()}
              </p>
            </form>
    )
}