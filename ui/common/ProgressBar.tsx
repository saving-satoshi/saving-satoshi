import clsx from 'clsx'

export default function ProgressBar({
  progress,
  variant = 'plain',
}: {
  progress: number
  variant?: string
}) {
  if (variant === 'bars') {
    const hashRateBar = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40,
    ]

    return (
      <div className="mt-5 flex items-center justify-between">
        {hashRateBar.map((i, index) => {
          return (
            <div
              key={index}
              className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
                'fade-in !bg-[#FBEBC6] shadow-3xl': progress >= 2.5 * i, //Mapping progress (1,100) with i (1,40)
              })}
            ></div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="relative h-[30px] w-full rounded-[5px]  bg-black/20">
      <div className="h-full w-full overflow-hidden rounded-[5px]">
        <div
          className={clsx(
            'left-0 top-0 h-full origin-left transform-gpu rounded-[5px] bg-[#FBEBC6] transition-transform',
            {
              '!bg-[#5DBC59]': progress === 100,
            }
          )}
          style={{
            transform: `translate3d(-${
              progress <= 0.5 && progress > 0 ? 100 - 0.5 : 100 - progress
            }%,0,0)`,
          }}
        />
      </div>
    </div>
  )
}
