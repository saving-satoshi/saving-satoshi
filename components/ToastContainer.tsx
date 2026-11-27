'use client'

import { useAtom } from 'jotai'
import { AnimatePresence } from 'framer-motion'
import { toastsAtom } from 'state/toastState'
import { Toast } from './Toast'
import { useToast } from 'state/ToastFunctions'

export const ToastContainer = () => {
    const [toasts] = useAtom(toastsAtom)
    const { remove } = useToast()

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast} onClose={remove} />
                ))}
            </AnimatePresence>
        </div>
    )
}
