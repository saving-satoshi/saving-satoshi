export default function RadioButton({
  className,
  children,
  name,
  value,
  currentValue,
  setCurrentValue,
}: {
  className?: string
  children?: React.ReactNode
  name: string
  value: string
  currentValue?: string
  setCurrentValue?: (val: string) => void
}) {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        id={name}
        name={name}
        checked={value === currentValue}
        onChange={() => setCurrentValue(value)}
        className="cursor-pointer"
      />
      <label htmlFor={name} className="cursor-pointer">
        {children}
      </label>
    </div>
  )
}
