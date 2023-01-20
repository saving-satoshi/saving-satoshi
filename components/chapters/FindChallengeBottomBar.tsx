import clsx from "clsx";
import { BoxButton } from "components/ui/BoxButton";
import { useMediaQuery } from "react-responsive";
import CheckIcon from 'public/assets/icons/check.svg';

export enum Status {
    InProgress,
    Error,
    Success
}
export function FindChallengeBottomBar({ next, input, expected, successMsg, inProgressMsg, errorMsg, full }: { next: string, input: string, expected: string, successMsg?: string, inProgressMsg?: string, errorMsg?: string, full?: boolean }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })

    function getStatus() {
        if (!input) return Status.InProgress;
        if (input === expected) return Status.Success;
        return Status.Error;
    }

    return (
      <div className={`
          ${full ? 'w-screen' : 'w-full'}
          ${getStatus() === Status.Success ? 'bg-success/25' : 'bg-black/20'}
          border-t
          border-white/25
          max-md:px-4
          max-md:py-8
        `}>
        <div className="
            flex
            flex-col
            md:flex-row
            items-stretch
            justify-between
            max-md:gap-4
          ">
          <div
            className='flex w-full items-center align-middle transition duration-150 ease-in-out md:px-5'
          >
            <p
              className={clsx(
                'font-nunito text-[21px] text-white transition duration-150 ease-in-out',
                {
                  'opacity-50': getStatus() === Status.InProgress,
                }
              )}
            >
              {getStatus() === Status.Success
                ? successMsg || <span className="flex"><CheckIcon className='mr-2 w-8 h-8'/> Nicely done!</span>
                : getStatus() === Status.InProgress ? inProgressMsg || 'Complete the challenge above to continue...'
                : getStatus() === Status.Error ? errorMsg || 'Hm... that is not quite right yet...' : ''}
            </p>
          </div>
          <BoxButton
            href={next}
            disabled={getStatus() !== Status.Success}
            size={!isSmallScreen ? 'big' : null}
          >Next</BoxButton>
        </div>
      </div>
    );
}
