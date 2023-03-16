import clsx from 'clsx'
import { Button } from 'ui'
import CheckIcon from 'public/assets/icons/check.svg'
import { LessonView } from 'types'
import { useLessonContext } from 'ui'
import Lottie from 'lottie-react'
import successAnimation from '../../public/assets/icons/87795-loading-success.json'

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
  beginMessage,
  successMessage,
  inProgressMessage,
  errorMessage,
  full,
  hints,
}: {
  next: string
  input: string
  expected: string
  beginMessage?: string
  successMessage?: string
  inProgressMessage?: string
  errorMessage?: string
  full?: boolean
  hints?: boolean
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code

  const getStatus = () => {
    if (!input) {
      return Status.Begin
    }

    if (input === expected) {
      return Status.Success
    }

    if (hints && (!input || expected.startsWith(input))) {
      return Status.InProgress
    }

    return Status.Error
  }

  const statusMessage = () => {
    const status = getStatus()

    switch (status) {
      case Status.Success:
        return (
          successMessage || (
            <span className="flex space-x-3.5">
              <Lottie
                animationData={successAnimation}
                initialSegment={[0, 90]}
                className="-m-[1.5rem] flex h-[4.5rem] w-[4.5rem]"
                loop={false}
              />
              <span>Nicely done!</span>
            </span>
          )
        )
      case Status.Begin:
        return beginMessage || 'Complete the challenge above to continue...'
      case Status.Error:
        return errorMessage || 'Hm... that is not quite right yet...'
      case Status.InProgress:
        return inProgressMessage || 'Looking good so far...'
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
          <div
            className={clsx(
              'font-nunito text-[21px] text-white transition duration-150 ease-in-out',
              {
                'opacity-50': getStatus() === Status.Begin,
                'text-[#EF960B]': getStatus() === Status.Error,
              }
            )}
          >
            {statusMessage()}
          </div>
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
