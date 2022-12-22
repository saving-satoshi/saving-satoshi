'use client'

import { Space_Mono } from '@next/font/google'
import RICIBs from 'react-individual-character-input-boxes'

const smono = Space_Mono({
  weight: ['400', '700'],
  variable: '--inter-font',
  preload: true,
  display: 'swap',
})

export const Input = ({ amount }: { amount: number }) => {
  function handleOutput(string) {
    console.log(string)
  }

  return (
    <RICIBs
      amount={amount}
      autoFocus
      handleOutputString={handleOutput}
      inputProps={{
        className: 'bg-transparent',
        placeholder: '_',
        style: {
          fontSize: '20px',
          width: '20px',
          height: '20px',
          fontFamily: `${smono.style.fontFamily}`,
          margin: '0px',
          borderRadius: '0px',
          textAlign: 'center',
          justifyContent: 'space-evenly',
        },
      }}
      inputRegExp={/^[a-zA-Z0-9_.-]*$/}
    />
  )
}
