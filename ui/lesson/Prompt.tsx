import clsx from 'clsx'
import { LessonView } from 'types'
import { Input, useLessonContext } from 'ui'

export default function LessonPrompt({
  className,
  label,
  answer,
  onChange,
}: {
  className?: string
  label: string
  answer: string
  onChange: Function
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code

  return (
    <div
      className={clsx(
        'grow justify-center font-space-mono text-white lg:w-1/2',
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
          <Input onChange={onChange} answer={answer} hints={true} />
        </div>
      </div>
    </div>
  )
}
