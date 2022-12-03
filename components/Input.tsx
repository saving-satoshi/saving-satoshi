import { useMemo } from 'react';

export type Props = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
};

export default function OtpInput({ value, valueLength, onChange }: Props) {

    const valueItems = useMemo(() => {
        const charArray = value.split('');
        const items: Array<string> = [];

        for (let i = 0; i < valueLength; i++) {
            items.push(charArray[i])
        }
        return items;
    }, [value, valueLength]);


    const inputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) => {
        const target = e.target;
        const targetValue = target.value;


        const newValue =
            value.substring(0, idx) + targetValue + value.substring(idx + 1);
        
        const nextElementSibling =
            target.nextElementSibling as HTMLInputElement | null;
      
        if (nextElementSibling) {
            nextElementSibling.focus();
          }

        onChange(newValue);
    }

    return (
        <div className='flex'>
            {valueItems.map((letter, idx) => (
                <input
                    key={idx}
                    type='text'
                    inputMode='text'
                    maxLength={valueLength}
                    className='w-full text-lg md:text-3xl border-b border-black/50 text-center'
                    value={letter}
                    onChange={(e) => inputOnChange(e, idx)}
                />
            ))}
        </div>
    );
}