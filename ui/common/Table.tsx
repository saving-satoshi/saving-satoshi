export default function Table({
  headings,
  rows,
}: {
  headings: string[]
  rows: string[][]
}) {
  return (
    <table className="mt-2 flex flex-col items-start gap-[2px] font-nunito">
      <tr className="flex w-full items-start gap-[15px] rounded-t-[5px] bg-[#00000020] px-5 py-2.5 text-left">
        {headings.map((heading, index) => (
          <th
            key={index}
            className={
              index === 0
                ? 'w-full'
                : index === headings.length - 1
                ? 'w-1/6'
                : 'w-1/3'
            }
          >
            {heading}
          </th>
        ))}
      </tr>
      {rows.map((row, index) => (
        <tr className="flex w-full items-start gap-[15px] bg-[#00000010] px-5 py-2.5">
          {row.map((item, index) => (
            <td
              key={index}
              className={
                index === 0
                  ? 'w-full'
                  : index === headings.length - 1
                  ? 'w-1/6'
                  : 'w-1/3'
              }
            >
              {item}
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}
