import clsx from 'clsx'
import NavbarDrawer from './NavbarDrawer'
import { useState } from 'react'
import Icon from 'shared/Icon'

export default function TabGroup({ params, theme }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={clsx('flex-l flex h-full items-stretch', theme)}>
        <span
          onClick={onClick}
          className="flex h-full w-[70px] cursor-pointer items-center justify-center hover:bg-black/25"
        >
          <Icon icon="menu" className="w-[32px]" />
        </span>
      </div>

      <NavbarDrawer theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
