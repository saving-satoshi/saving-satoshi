import clsx from 'clsx'
import { Button } from 'shared'
import { LessonView } from 'types'
import { useLessonContext } from 'ui'
import { useLang, useProceed, useTranslations } from 'hooks'
import Icon from 'shared/Icon'

export enum Status {
  Begin,
  InProgress,
  Error,
  Poor,
  Good,
  Success,
  NextStep, // Step on Advance Challenge in OpRunner
}

export type SuccessNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6

export default function StatusBar({
  success,
  beginMessage,
  successMessage,
  inProgressMessage,
  nextStepMessage,
  nextStepButton,
  errorMessage,
  full,
  hints,
  alwaysShow,
  handleTryAgain,
  className,
  textClass,
}: {
  success: boolean | SuccessNumbers | null
  beginMessage?: string
  successMessage?: string
  inProgressMessage?: string
  errorMessage?: string
  nextStepMessage?: string
  nextStepButton?: string
  full?: boolean
  hints?: boolean | null
  alwaysShow?: boolean
  handleTryAgain?: (pressed: boolean) => void
  className?: string
  textClass?: string
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { activeView } = useLessonContext()
  const isActive = activeView !== LessonView.Info
  const proceed = useProceed()

  const getStatus = () => {
    if (success === null || success === 0) {
      return Status.Begin
    }

    if (hints && success === 1) {
      return Status.InProgress
    }

    if (success === 2) {
      return Status.Error
    }

    if (success === 3) {
      return Status.Poor
    }

    if (success === 4) {
      return Status.Good
    }

    if (success === 5) {
      return Status.Success
    }
    if (success === 6) {
      return Status.NextStep
    }

    if (success === true) {
      return Status.Success
    }

    if (hints && success === false) {
      return Status.InProgress
    }

    return Status.Error
  }

  const handleSubmit = () => {
    handleTryAgain && handleTryAgain(true)
  }

  const statusMessage = () => {
    const status = getStatus()

    switch (status) {
      case Status.Success:
        return (
          (!!successMessage && (
            <span className="flex">
              <Icon
                icon="check"
                className="mr-2 h-7 w-7 rounded-full bg-green"
              />{' '}
              {successMessage}
            </span>
          )) || (
            <span className="flex">
              <Icon
                icon="check"
                className="mr-2 h-7 w-7 rounded-full bg-green"
              />{' '}
              {t('status_bar.success_message')}
            </span>
          )
        )
      case Status.Poor:
        return <span className="flex">Not quite there yet.</span>
      case Status.Good:
        return (
          <span className="flex">
            <Icon icon="check" className="mr-2 h-7 w-7 rounded-full bg-green" />{' '}
            Well done
          </span>
        )
      case Status.Begin:
        return beginMessage || t('status_bar.begin_message')
      case Status.Error:
        return errorMessage || t(`status_bar.error_message`)
      case Status.InProgress:
        return inProgressMessage || t('status_bar.in_progress_message')
      case Status.NextStep:
        return nextStepMessage || t('status_bar.next_step_message')
      default:
        return ''
    }
  }

  return (
    <div
      className={clsx(
        className,
        'border-t border-white/25 transition-all max-md:bottom-0 max-md:px-4 max-md:py-8',
        {
          'w-screen': full,
          'w-full': !full,
          'bg-green/15':
            getStatus() === Status.Success || getStatus() === Status.Good,
          'bg-black/20':
            getStatus() !== Status.Success || getStatus() !== Status.Good,
          block: getStatus() === Status.Success || (Status.Good && isActive),
          'hidden md:block':
            getStatus() !== Status.Success ||
            (Status.Good && !isActive && !alwaysShow),
        }
      )}
    >
      <div className="flex flex-col items-stretch justify-between max-md:gap-4 md:h-14 md:flex-row">
        <div
          className={clsx(
            'flex items-center align-middle transition duration-150 ease-in-out md:px-5',
            textClass
          )}
        >
          <div
            className={clsx(
              'font-nunito text-[21px] transition duration-150 ease-in-out',
              textClass,
              {
                'text-white opacity-50': getStatus() === Status.Begin,
                'text-white': getStatus() !== Status.Error,
                'text-[#EF960B]': getStatus() === Status.Error,
              }
            )}
          >
            {statusMessage()}
          </div>
        </div>
        <div className="flex gap-[5px]">
          <Button
            onClick={handleSubmit}
            classes={clsx('md:text-2xl', {
              hidden: !(
                getStatus() === Status.Poor ||
                getStatus() === Status.Good ||
                getStatus() == Status.NextStep
              ),
            })}
          >
            {nextStepButton || t('status_bar.try_again')}
          </Button>

          <Button
            onClick={proceed}
            disabled={
              !(getStatus() === Status.Success || getStatus() === Status.Good)
            }
            classes={clsx('md:text-2xl', {
              hidden: !(
                getStatus() === Status.Success || getStatus() === Status.Good
              ),
            })}
          >
            {t('status_bar.next')}
          </Button>
        </div>
      </div>
    </div>
  )
}
