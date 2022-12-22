import clsx from 'clsx'
import Link from "next/link"

export const ChallengeItem = ({ position, title, slug, path }) => {
  const href = path + '/' + slug
  return (
    <Link
      href={href}
      className={clsx(
        'justify-left flex w-full px-[15px] py-[11px] font-cbrush text-xl transition duration-150 ease-in-out hover:bg-black/20',
        {
          'border-t border-white/25': position !== 1,
        }
      )}
    >
      <span className="pr-1 opacity-50">{position + '. '}</span>
      {title}
    </Link>
  )
}
