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
  onChange?: Dispatch<SetStateAction<number>>
  onKeyDown?: (value: number | undefined) => void
}) {
  // The logical operation here simulates XOR operation
  // Only either of them should be TRUE at one time.
  // This operation ensures that
  if ((value && onChange) === defaultValue) {
    throw new Error('Provide only either of value or defaultValue.')
  }

  const isControlled = value !== undefined && onChange !== undefined

  const [internalValue, setInternelValue] = useState(
    isControlled ? value : defaultValue
  )

  function handleChange(evt) {
    const newValue = evt.target.valueAsNumber

    if (isControlled) {
      onChange(newValue)
    } else {
      setInternelValue(newValue)
    }
  }

  function handleKeyDown(evt) {
    if (evt.key == 'Enter') {
      if (isControlled && onKeyDown) {
        onKeyDown(internalValue)
      } else {
        console.log(internalValue)
      }
    }
  }

  useEffect(() => {
    if (isControlled) {
      setInternelValue(value)
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
