import Modal from './Modal'
import Button from 'shared/Button'
import Icon from 'shared/Icon'

export default function AlertModal({
  active,
  onClose,
  type,
  title,
  message,
}: {
  active: boolean
  onClose: () => void
  type: 'success' | 'error'
  title: string
  message: string
}) {
  return (
    <Modal active={active} onRequestClose={onClose}>
      <div className="flex flex-col items-center gap-6 p-4 text-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${
            type === 'success'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          <Icon
            icon={type === 'success' ? 'check' : 'cross'}
            className="h-8 w-8"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-lg text-white/80">{message}</p>
        </div>

        <Button onClick={onClose} size="small" style="outline">
          Close
        </Button>
      </div>
    </Modal>
  )
}
