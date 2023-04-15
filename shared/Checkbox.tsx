import clsx from 'clsx'

export default function Checkbox({
  className,
  name,
  value,
  onChange,
  label,
}: {
  className?: string
  name: string
  value?: boolean
  onChange?: (val: boolean) => void
  label?: string
}) {
  const handleChange = (e) => {
    onChange(e.target.checked)
  }

  return (
    <div className={clsx('flex items-center justify-start gap-2', className)}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      {label && (
        <label className="cursor-pointer select-none" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  )
}
