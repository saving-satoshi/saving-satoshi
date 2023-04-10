'use client'

import { createContext, useContext, useState } from 'react'
import { ModalContextType } from 'types'

export const ModalContext = createContext<ModalContextType>({
  modals: {},
  show: () => {},
  close: () => {},
})

export const useModalContext = () => useContext(ModalContext)

export default function ModalProvider({
  children,
}: {
  children?: React.ReactNode
}) {
  const [modals, setModals] = useState({
    login: false,
    account: false,
  })

  const show = (name: string) => {
    const newModals = { ...modals }
    newModals[name] = true
    setModals(newModals)
  }

  const close = (name: string) => {
    const newModals = { ...modals }

    if (!newModals.hasOwnProperty(name)) {
      return
    }

    newModals[name] = false
    setModals(newModals)
  }

  return (
    <ModalContext.Provider value={{ modals, show, close }}>
      {children}
    </ModalContext.Provider>
  )
}
