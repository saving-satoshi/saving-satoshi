import { useSetAtom } from 'jotai'
import { toastsAtom, ToastType } from './toastState'
import { uuid } from 'utils'
import { store } from './state'

export const toast = {
    success: (message: string, duration = 5000) => {
        const id = uuid()
        store.set(toastsAtom, (prev) => [
            ...prev,
            { id, message, type: 'success', duration },
        ])
        if (duration > 0) setTimeout(() => toast.remove(id), duration)
    },
    error: (message: string, duration = 5000) => {
        const id = uuid()
        store.set(toastsAtom, (prev) => [
            ...prev,
            { id, message, type: 'error', duration },
        ])
        if (duration > 0) setTimeout(() => toast.remove(id), duration)
    },
    info: (message: string, duration = 5000) => {
        const id = uuid()
        store.set(toastsAtom, (prev) => [
            ...prev,
            { id, message, type: 'info', duration },
        ])
        if (duration > 0) setTimeout(() => toast.remove(id), duration)
    },
    remove: (id: string) => {
        store.set(toastsAtom, (prev) => prev.filter((t) => t.id !== id))
    },
}

export const useToast = () => {
    const setToasts = useSetAtom(toastsAtom)

    const show = (message: string, type: ToastType = 'info', duration = 5000) => {
        const id = uuid()
        setToasts((prev) => [...prev, { id, message, type, duration }])

        if (duration > 0) {
            setTimeout(() => {
                remove(id)
            }, duration)
        }
    }

    const remove = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }

    return {
        success: (message: string, duration?: number) =>
            show(message, 'success', duration),
        error: (message: string, duration?: number) =>
            show(message, 'error', duration),
        info: (message: string, duration?: number) =>
            show(message, 'info', duration),
        remove,
    }
}
