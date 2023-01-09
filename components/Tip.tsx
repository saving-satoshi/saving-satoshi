'use client';
import CarretRight from 'public/assets/icons/carret-right.svg'
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group'

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0.5 },
  exited:  { opacity: 0 }
};
export const Tip = ({ title, children }: { title: string, children: React.ReactNode }) => {

    const [collapsed, setCollapsed] = useState(false);
    const nodeRef = useRef(null);

    return (
        <li className='mb-4'>
            <button onClick={() => setCollapsed(!collapsed)} className='flex items-center font-semibold'>
                {!collapsed ? <CarretRight className="mr-2" /> : <CarretRight className="mr-2 transform rotate-90" />} {title}
            </button>
            <CSSTransition in={collapsed} timeout={100} unmountOnExit nodeRef={nodeRef}>
                {state => (
                    <p className='mt-2 opacity-75 transition-all ease-in-out duration-250' style={transitionStyles[state]} ref={nodeRef}>
                        {children}
                    </p>
                )}
            </CSSTransition>
        </li>
    );
};