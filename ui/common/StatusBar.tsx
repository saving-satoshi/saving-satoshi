import clsx from 'clsx'
import { Button } from 'ui'
import CheckIcon from 'public/assets/icons/check.svg'
import { LessonView } from 'types'
import { useLessonContext } from 'ui'

export enum Status {
  Begin,
  InProgress,
  Error,
  Success,
}

export default function StatusBar({
  next,
  input,
  expected,
  beginMsg,
  successMsg,
  inProgressMsg,
  errorMsg,
  full,
  hints,
}: {
  next: string
  input: string
  expected: string
  beginMsg?: string
  successMsg?: string
  inProgressMsg?: string
  errorMsg?: string
  full?: boolean
  hints?: boolean
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code

  const getStatus = () => {
    if (!input) return Status.Begin
    if (input === expected) return Status.Success
    if (
      hints &&
      (!input || (expected.startsWith(input) && expected[0] === input[0]))
    )
      return Status.InProgress
    return Status.Error
  }

  const statusMessage = () => {
    const status = getStatus()

    switch (status) {
      case Status.Success:
        return (
          successMsg || (
            <span className="flex">
              <CheckIcon className="mr-2 h-8 w-8" /> Nicely done!
            </span>
          )
        )
      case Status.Begin:
        return beginMsg || 'Complete the challenge above to continue...'
      case Status.Error:
        return errorMsg || 'Hm... that is not quite right yet...'
      case Status.InProgress:
        return inProgressMsg || 'Looking good so far...'
      default:
        return ''
    }
  }

  return (
    <div
      className={clsx(
        'border-t border-white/25 max-md:bottom-0 max-md:px-4 max-md:py-8',
        {
          'w-screen': full,
          'w-full': !full,
          'bg-green/25': getStatus() === Status.Success,
          'bg-black/20': getStatus() !== Status.Success,
          block: getStatus() === Status.Success || isActive,
          'hidden md:block': getStatus() !== Status.Success && !isActive,
        }
      )}
    >
      <div className="flex flex-col items-stretch justify-between max-md:gap-4 md:flex-row">
        <div className="flex w-full items-center align-middle transition duration-150 ease-in-out md:px-5">
          <p
            className={clsx(
              'font-nunito text-[21px] text-white transition duration-150 ease-in-out',
              {
                'opacity-50': getStatus() === Status.Begin,
              },
              {
                'text-[#EF960B]': getStatus() === Status.Error,
              }
            )}
          >
            {statusMessage()}
          </p>
        </div>

        <Button
          href={next}
          disabled={getStatus() !== Status.Success}
          classes="md:text-2xl md:py-4"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
