import clsx from 'clsx'
import React, { useState } from 'react'
import { AccordionIcon } from 'shared/icons'

const Accordion = ({
  title,
  defaultOpen,
  children,
  className,
}: {
  title: string
  defaultOpen: boolean
  children: React.ReactNode
  className?: string
}) => {
  const [open, setOpen] = useState(defaultOpen)
  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div
      onClick={handleClick}
      className={clsx('bg-[#00000033] px-5', className)}
    >
      <div className="flex w-full cursor-pointer items-center justify-between py-3">
        <p className="font-nunito text-xl">{title}</p>
        <AccordionIcon className={'rotate-180'} />
      </div>
      {open && <div className="py-4">{children}</div>}
    </div>
  )
}

export default Accordion
