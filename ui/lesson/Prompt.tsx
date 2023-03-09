import clsx from 'clsx'
import { ReactElement } from 'react'
import { LessonView } from 'types'
import { Input, useLessonContext } from 'ui'

export default function LessonPrompt({
  className,
  label,
  answer,
  onChange,
  pattern,
  hints,
  opcode,
}: {
  className?: string
  label: string
  answer: string
  onChange: Function
  pattern?: RegExp
  hints?: boolean
  opcode?: string
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const inputPattern = pattern ? pattern : /./g

  return (
    <div
      className={clsx(
        'grow justify-center font-space-mono text-white md:w-9/12 lg:w-9/12',
        className,
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-left text-xl font-bold md:text-center">{label}</h2>

        <div className="w-full pt-8">
          <Input
            onChange={onChange}
            answer={answer}
            pattern={inputPattern}
            hints={hints}
            opcode={opcode}
          />
        </div>
      </div>
    </div>
  )
}
