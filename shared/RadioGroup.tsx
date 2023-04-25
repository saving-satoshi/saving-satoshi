'use client'

import React, { useState } from 'react'

export default function RadioGroup({
  children,
  value,
  onChange,
}: {
  children?: React.ReactNode
  value?: string
  onChange?: (val: string) => void
}) {
  const [currentValue, setCurrentValue] = useState(value || '')

  const handleChange = (val) => {
    setCurrentValue(val)

    if (typeof onChange === 'function') {
      onChange(val)
    }
  }

  return (
    <div className="flex h-10 w-full items-center justify-between">
      {React.Children.map(children, (Child: React.ReactElement) => {
        return React.cloneElement(Child, {
          currentValue,
          setCurrentValue: handleChange,
        })
      })}
    </div>
  )
}
