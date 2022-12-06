import clsx from "clsx";

export const ListItem = ({pos, title}) => {
    return <li className={clsx('flex justify-left w-full p-[15px] text-xl border border-white/25 font-cbrush')}>
        {pos+ '.'}{' '+ title}
    </li>;
}