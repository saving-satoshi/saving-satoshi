import clsx from 'clsx'
import { ColorGroup, LessonView } from 'types'
import { Input, useLessonContext } from 'ui'
import { ReactElement } from 'react'

export default function LessonPrompt({
  className,
  label,
  answer,
  onChange,
  pattern,
  hints,
  precedingText,
  successElement,
  successColorGroups,
  inputClassNames = '',
}: {
  className?: string
  label: string
  answer: string
  onChange: Function
  pattern?: RegExp
  hints?: boolean
  precedingText?: string
  successElement?: ReactElement | null
  successColorGroups?: ColorGroup[]
  inputClassNames?: string
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const inputPattern = pattern ? pattern : /./g

  return (
    <div className="flex w-full grow justify-center md:bg-[#00000026]">
      <div
        className={clsx(
          'grow justify-center font-space-mono text-white',
          className,
          {
            'hidden md:flex': !isActive,
            flex: isActive,
          }
        )}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-left text-xl font-bold md:text-center">
            {label}
          </h2>

          <div className="w-full pt-8 short:pt-0">
            <Input
              onChange={onChange}
              answer={answer}
              pattern={inputPattern}
              hints={hints}
              precedingText={precedingText}
              successColorGroups={successColorGroups}
              classNames={inputClassNames}
            />
          </div>
          {Boolean(successElement) && (
            <hr className="border-1 h-1 w-full border-white/25" />
          )}
          {successElement}
        </div>
      </div>
    </div>
  )
}
