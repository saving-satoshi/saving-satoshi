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
    [Modal.Account]: { open: false, meta: undefined },
    [Modal.SignIn]: { open: false, meta: undefined },
    [Modal.SignUp]: { open: false, meta: undefined },
  })

  const open = (name: string, meta = {}) => {
    const newModals = { ...modals }
    Object.keys(newModals).forEach((modal) => {
      newModals[modal].open = false
    })
    newModals[name] = { open: true, meta }
    setModals(newModals)
    document.body.classList.add('overflow-y-hidden')
  }

  const close = (name: string) => {
    const newModals = { ...modals }

    if (!newModals.hasOwnProperty(name)) {
      return
    }
    document.body.classList.remove('overflow-y-hidden')

    newModals[name].open = false
    setModals(newModals)
  }

  return (
    <ModalContext.Provider value={{ modals, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
