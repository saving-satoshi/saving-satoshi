import clsx from 'clsx'
import { LessonView } from 'types'
import { Hasher } from 'ui'

export default function LessonHasher({
  className,
  label,
  answer,
  onChange,
  auto,
  input,
}: {
  className?: string
  label: string
  answer: string
  onChange: Function
  auto: boolean
  input: string
}) {
  const isActive = LessonView.Code

  return (
    <div
      className={clsx(
        'flex grow justify-center font-space-mono text-white md:w-9/12 lg:w-9/12',
        className
      )}
    >
      <div className="flex flex-col justify-center">
        <div className="w-full pt-8">
          <Hasher
            onChange={onChange}
            answer={answer}
            label={label}
            auto={auto}
            input={input}
          />
        </div>
      </div>
    </div>
  )
}
