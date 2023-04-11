'use client'

import { createContext, useContext, useState } from 'react'
import { ModalContextType } from 'types'

export enum Modal {
  Account = 'account',
  SignIn = 'signin',
  SignUp = 'signup',
}

export const ModalContext = createContext<ModalContextType>({
  modals: {},
  open: () => {},
  close: () => {},
})

export const useModalContext = () => useContext(ModalContext)

export default function ModalProvider({
  children,
}: {
  children?: React.ReactNode
}) {
  const [modals, setModals] = useState({
    [Modal.Account]: false,
    [Modal.SignIn]: false,
    [Modal.SignUp]: false,
  })

  const open = (name: string) => {
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
    <ModalContext.Provider value={{ modals, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
