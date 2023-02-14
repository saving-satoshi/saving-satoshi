import clsx from 'clsx'
import { LessonView } from 'types'
import { Input, useLessonContext } from 'ui'

export default function LessonPrompt({
  className,
  label,
  answer,
  onChange,
  pattern,
  hints
}: {
  className?: string
  label: string
  answer: string
  onChange: Function
  pattern?: RegExp
  hints?: boolean
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const inputPattern = pattern ? pattern : (/./g)

  return (
    <div
      className={clsx(
        'grow justify-center font-space-mono text-white lg:w-9/12 md:w-9/12',
        className,
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-xl">{label}</h2>

        <div className="w-full pt-8">
          <Input onChange={onChange} answer={answer} pattern={inputPattern} hints={hints} />
        </div>
      </div>
    </div>
  )
}
