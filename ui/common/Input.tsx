'use client'

import RICIBs from 'react-individual-character-input-boxes'

export default function Input({
  amount,
  onChange,
}: {
  amount: number
  onChange: Function
}) {
  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <RICIBs
      amount={amount}
      autoFocus
      handleOutputString={handleChange}
      inputProps={{
        className: 'bg-transparent',
        placeholder: '_',
        style: {
          fontSize: '20px',
          width: '20px',
          height: '20px',
          margin: '0px',
          borderRadius: '0px',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          outline: 'none',
          fontFamily: 'var(--space-mono-font)',
        },
      }}
      inputRegExp={/^[a-zA-Z0-9_.-]*$/}
    />
  )
}
