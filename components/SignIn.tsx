import { useState } from 'react'
import { Button, Input, Loader } from 'shared'
import { useTranslations } from 'hooks'
import { Modal, useModalContext } from 'contexts/ModalContext'
import clsx from 'clsx'
import { useAuthFunctions } from 'state/AuthFunctions'

export default function SignIn({
  lang,
  className,
  onSignIn,
}: {
  lang: string
  className?: string
  onSignIn?: () => void
}) {
  const t = useTranslations(lang)
  const modals = useModalContext()
  const { attemptLogin } = useAuthFunctions()

  const [loading, setLoading] = useState<boolean>(false)
  const [privateKey, setPrivateKey] = useState<string>('')

  const handleConfirm = async () => {
    try {
      setLoading(true)

      const loginSuccess = await attemptLogin(privateKey.toLowerCase())
      if (loginSuccess) {
        setPrivateKey('')
      }

      if (typeof onSignIn === 'function') {
        onSignIn()
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setLoading(false)
    }
  }

  function handleCreateClick() {
    modals.open(Modal.SignUp, { onSignUpComplete: false })
  }

  return (
    <div className={clsx(className, 'font-nunito text-white')}>
      <h2 className="mb-4 text-3xl font-bold">{t('modal_signin.heading')}</h2>
      <p className="mb-5">{t('modal_signin.paragraph_one')}</p>

      <div className="flex flex-col justify-between">
        <div className="flex w-full">
          <Input
            type="text"
            name="private_key"
            placeholder={t('modal_signin.prompt')}
            value={privateKey}
            onInput={setPrivateKey}
            disabled={loading}
          />
        </div>

        <div className="mt-4 flex w-full">
          <Button
            full
            size="small"
            style="outline"
            disabled={!privateKey || loading}
            onClick={handleConfirm}
            classes={`border-white border-2 p-1 text-xl md:w-full ${
              !privateKey && 'opacity-50'
            }`}
          >
            {loading && <Loader className="h-7 w-7 text-white" />}
            {!loading && t('modal_signin.confirm')}
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <button className="underline" onClick={handleCreateClick}>
            {t('modal_signin.create_account')}
          </button>
        </div>
      </div>
    </div>
  )
}
