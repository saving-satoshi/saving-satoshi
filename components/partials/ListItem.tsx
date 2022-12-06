import clsx from "clsx";

export const ListItem = ({pos, title}) => {
    return (
        <li className={clsx('flex justify-left w-full px-[15px] py-[11px] text-xl font-cbrush hover:bg-black/20 transition ease-in-out duration-150', {
            'border-t border-white/25': pos!==1
        })}
    >
            <span className="opacity-50 pr-1">{pos+ '. '}</span>{title}
        </li>
    );
}