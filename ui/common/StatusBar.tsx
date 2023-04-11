import clsx from 'clsx'
import { Button } from 'shared'
import CheckIcon from 'public/assets/icons/check.svg'
import { LessonView } from 'types'
import { useLessonContext } from 'ui'
import { useLang, useSaveAndProceed, useTranslations } from 'hooks'

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
}: {
  input: string
  expected: string
  beginMessage?: string
  successMessage?: string
  inProgressMessage?: string
  errorMessage?: string
  full?: boolean
  hints?: boolean
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
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
              <CheckIcon className="mr-2 h-8 w-8" />{' '}
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
          classes="md:text-2xl md:py-4"
        >
          {t('status_bar.next')}
        </Button>
      </div>
    </div>
  )
}
