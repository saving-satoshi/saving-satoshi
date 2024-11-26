import clsx from 'clsx'

export default function NonceCounter({
  content,
  disabled,
}: {
  content: number
  disabled: boolean
}) {
  return (
    <div
      className={clsx('font-space-mono font-normal', {
        'text-black/25': disabled,
        'fade-in text-white': !disabled,
      })}
    >
      {(content / 10 ** (content.toString().length - 2)).toFixed(2)}
      {!disabled && (
        <span className="fade-in text-white/50">
          &times;10<sup>{content.toString().length + 11}</sup>
        </span>
      )}
    </div>
  )
}
