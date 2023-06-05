import { useEffect, useState, Dispatch, SetStateAction } from 'react'

export default function NumericInput({
  label,
  name,
  max,
  min,
  step,
  defaultValue,
  value,
  onChange,
  onKeyDown,
}: {
  label: string
  name?: string
  max?: number
  min?: number
  step?: number
  defaultValue?: number
  value?: number
  onChange?: (evt: any) => void
  onKeyDown?: (evt: any) => void
}) {
  // The logical operation here simulates XOR operation
  // Only either of them should be TRUE at one time.
  // This operation ensures that
  if (value && defaultValue) {
    throw new Error('Provide only either of value or defaultValue.')
  }

  const isControlled = value !== undefined

  const [internalValue, setInternalValue] = useState(
    isControlled ? value : defaultValue
  )

  function handleChange(evt) {
    if (onChange) {
      onChange(evt)
    }
    if (!isControlled) {
      const newValue = evt.target.valueAsNumber
      setInternalValue(newValue)
    }
  }

  function handleKeyDown(evt) {
    if (onKeyDown) {
      onKeyDown(evt)
    }
    if (!isControlled) {
      // Dummy Keydown Handler
      if (evt.key === 'Enter') {
        console.log(internalValue)
      }
    }
  }

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value)
    }
  }, [isControlled, value])

  return (
    <input
      type="number"
      name={name}
      max={max}
      min={min}
      step={step}
      value={isControlled ? internalValue : undefined}
      defaultValue={isControlled ? undefined : internalValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}
