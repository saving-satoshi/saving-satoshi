import Link from 'next/link'

// Think we need to come with a better name
export const Navigate = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="w-full justify-center border py-2.5 px-12 text-center font-nunito text-2xl font-bold transition duration-150 ease-in-out hover:bg-black/25 md:w-auto"
    >
      {text}
    </Link>
  )
}
