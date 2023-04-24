import clsx from 'clsx'
import { Button } from 'shared'
import { LessonView } from 'types'
import { useLessonContext } from 'ui'
import { useLang, useSaveAndProceed, useTranslations } from 'hooks'
import Icon from 'shared/Icon'

export enum Status {
  Begin,
  InProgress,
  Error,
  Success,
}

export default function StatusBar({
  input,
  expected,
  beginMessage,
  successMessage,
  inProgressMessage,
  errorMessage,
  full,
  hints,
  alwaysShow,
  className,
}: {
  input: string
  expected: string
  beginMessage?: string
  successMessage?: string
  inProgressMessage?: string
  errorMessage?: string
  full?: boolean
  hints?: boolean
  alwaysShow?: boolean
  className?: string
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { activeView } = useLessonContext()
  const isActive = activeView !== LessonView.Info
  const saveAndProceed = useSaveAndProceed()

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
            <span className="flex">
              <Icon icon="check" className="mr-2 h-8 w-8" />{' '}
              {t('status_bar.success_message')}
            </span>
          )
        )
      case Status.Begin:
        return beginMessage || t('status_bar.begin_message')
      case Status.Error:
        return errorMessage || t(`status_bar.error_message`)
      case Status.InProgress:
        return inProgressMessage || t('status_bar.in_progress_message')
      default:
        return ''
    }
  }

  return (
    <div
      className={clsx(
        className,
        'border-t border-white/25 max-md:bottom-0 max-md:px-4 max-md:py-8',
        {
          'w-screen': full,
          'w-full': !full,
          'bg-green/15': getStatus() === Status.Success,
          'bg-black/20': getStatus() !== Status.Success,
          block: getStatus() === Status.Success && isActive,
          'hidden md:block':
            getStatus() !== Status.Success && !isActive && !alwaysShow,
        }
      )}
    >
      <div className="flex h-full flex-col items-stretch justify-between max-md:gap-4 md:flex-row">
        <div className="flex w-full items-center align-middle transition duration-150 ease-in-out md:px-5">
          <p
            className={clsx(
              'font-nunito text-[21px] text-white transition duration-150 ease-in-out',
              {
                'opacity-50': getStatus() === Status.Begin,
                'text-[#EF960B]': getStatus() === Status.Error,
              }
            )}
          >
            {statusMessage()}
          </p>
        </div>

        <Button
          onClick={saveAndProceed}
          disabled={getStatus() !== Status.Success}
          classes="md:text-2xl h-full"
        >
          {t('status_bar.next')}
        </Button>
      </div>
    </div>
  )
}
