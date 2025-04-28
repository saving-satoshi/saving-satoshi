import { useSetAtom } from 'jotai'
import { modalsAtom } from './state'

export const useModalFunctions = () => {
  const setModals = useSetAtom(modalsAtom)

  const open = (name: string, meta = {}) => {
    setModals((prevModals) => {
      const newModals = { ...prevModals }
      Object.keys(newModals).forEach((modal) => {
        newModals[modal].open = false // Close all other modals
      })
      newModals[name] = { open: true, meta }
      window.document.body.classList.add('overflow-y-hidden')
      return newModals
    })
  }

  const close = (name: string) => {
    setModals((prevModals) => {
      const newModals = { ...prevModals }
      if (!newModals.hasOwnProperty(name)) {
        return prevModals
      }
      newModals[name].open = false
      window.document.body.classList.remove('overflow-y-hidden')
      return newModals
    })
  }

  return { open, close }
}
