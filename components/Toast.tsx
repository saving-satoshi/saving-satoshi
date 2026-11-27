'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ToastItem } from 'state/toastState'
import { clsx } from 'clsx'

interface ToastProps {
    toast: ToastItem
    onClose: (id: string) => void
}

export const Toast = ({ toast, onClose }: ToastProps) => {
    const isError = toast.type === 'error'
    const isSuccess = toast.type === 'success'

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            layout
            className={clsx(
                'relative flex min-w-[300px] max-w-md items-center justify-between gap-4 overflow-hidden rounded-lg border px-4 py-3 shadow-2xl backdrop-blur-md',
                {
                    'border-red/50 bg-red/10 text-white': isError,
                    'border-green/50 bg-green/10 text-white': isSuccess,
                    'border-white/20 bg-white/5 text-white': !isError && !isSuccess,
                }
            )}
        >
            <div className="flex items-center gap-3">
                {isError && (
                    <svg
                        className="h-5 w-5 text-red"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
                {isSuccess && (
                    <svg
                        className="h-5 w-5 text-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
                <span className="text-sm font-medium tracking-wide">
                    {toast.message}
                </span>
            </div>
            <button
                onClick={() => onClose(toast.id)}
                className="rounded-full p-1 transition-colors hover:bg-white/10"
            >
                <svg
                    className="h-4 w-4 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            {/* Progress bar for auto-dismiss */}
            {toast.duration && toast.duration > 0 && (
                <motion.div
                    initial={{ width: '100%' }}
                    animate={{ width: 0 }}
                    transition={{ duration: toast.duration / 1000, ease: 'linear' }}
                    className={clsx('absolute bottom-0 left-0 h-1', {
                        'bg-red': isError,
                        'bg-green': isSuccess,
                        'bg-white/30': !isError && !isSuccess,
                    })}
                />
            )}
        </motion.div>
    )
}
