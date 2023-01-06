'use client';

export const Tips = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mt-auto font-nunito mb-5'>
            <h2 className="font-bold text-white text-xl">Tips</h2>
            <ul className="ml-3 mt-3 list-none list-inside text-white">
                {children}
            </ul>
        </div>
    );
};