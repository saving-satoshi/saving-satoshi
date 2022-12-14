import clsx from "clsx";
import Link from "next/link"

export const ListItem = ({position, title, slug}) => {
    return (
        <Link className={clsx('flex justify-left w-full px-[15px] py-[11px] text-xl font-cbrush hover:bg-black/20 transition ease-in-out duration-150', {
                'border-t border-white/25': position!==1
            })}
            href={slug}
        >
            <span className="opacity-50 pr-1">{position+ '. '}</span>{title}
        </Link>
    );
}