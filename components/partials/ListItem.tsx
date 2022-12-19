import clsx from 'clsx'

export const ListItem = ({ pos, title }) => {
  return (
    <li
      className={clsx(
        'justify-left flex w-full px-[15px] py-[11px] font-cbrush text-xl transition duration-150 ease-in-out hover:bg-black/20',
        {
          'border-t border-white/25': pos !== 1,
        }
      )}
    >
      <span className="pr-1 opacity-50">{pos + '. '}</span>
      {title}
    </li>
  )
}
