import clsx from 'clsx'

export default function Input({
  type,
  name,
  placeholder,
  value,
  className,
  onInput,
  disabled,
}: {
  type: string
  name: string
  placeholder?: string
  value?: string
  className?: string
  onInput?: (val: string) => void
  disabled?: boolean
}) {
  const handleInput = (e: any) => {
    if (typeof onInput === 'function') {
      onInput(e.target.value)
    }
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      id={name}
      placeholder={placeholder}
      onInput={handleInput}
      disabled={disabled}
      className={clsx(
        className,
        'h-12 w-full rounded-md border-2 border-dotted border-white/25 bg-transparent px-3 font-space-mono text-base text-white outline-none',
        'disabled:border-opacity-50 disabled:text-opacity-50'
      )}
    />
  )
}
