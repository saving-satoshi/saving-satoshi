import clsx from 'clsx'

export default function Table({
  headings,
  rows,
  footer,
}: {
  headings: string[] | React.ReactNode[]
  rows: string[][] | React.ReactNode[][]
  footer?: React.ReactNode
}) {
  return (
    <table className="mt-2 flex flex-col items-start font-nunito">
      <thead className="w-full">
        <tr className="flex w-full items-start gap-[15px] rounded-t-[5px] bg-[#00000066] px-5 py-2.5 text-left">
          {headings.map((heading, index) => (
            <th
              key={index}
              className={clsx({
                'w-full': index === 0,
                'w-1/3': index > 0 && index < headings.length - 1,
                'w-1/6': index === headings.length - 1,
              })}
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {rows.map((row, index) => (
          <tr
            key={index}
            className={clsx(
              'mt-[2px] flex w-full items-start gap-[15px] bg-[#00000033] px-5 py-2.5',
              { 'rounded-b-[5px]': index === rows.length - 1 && !footer }
            )}
          >
            {row.map((item, index) => (
              <td
                key={index}
                className={clsx({
                  'w-full': index === 0,
                  'w-1/3': index > 0 && index < headings.length - 1,
                  'w-1/6': index === headings.length - 1,
                })}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot className="w-full">
        <tr className="mt-[2px] flex w-full items-start gap-[15px] rounded-b-[5px] bg-[#00000033] px-5 py-2.5">
          <td className="flex w-full justify-center">{footer}</td>
        </tr>
      </tfoot>
    </table>
  )
}
