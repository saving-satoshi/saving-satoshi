import { useEffect, useState, useTransition } from 'react'
import { Button, Input, Loader } from 'shared'
import { useLocalizedRoutes, useTranslations } from 'hooks'
import clsx from 'clsx'
import { useAuthFunctions } from 'state/AuthFunctions'
import { accountAtom, Modal } from 'state/state'
import { useModalFunctions } from 'state/ModalFunctions'
import Avatar from './Avatar'
import { progressAtom } from 'state/state'
import { useAtom } from 'jotai'
import { getLessonPath } from 'lib/progress'
import { useRouter } from 'next/navigation'

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
  const { open } = useModalFunctions()
  const { attemptLogin } = useAuthFunctions()
  const [account] = useAtom(accountAtom)
  const [progress] = useAtom(progressAtom)
  const routes = useLocalizedRoutes()
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)
  const [privateKey, setPrivateKey] = useState<string>('')
  const [hasAccount, setHasAccount] = useState<boolean>()
  const [progressRoute, setProgressRoute] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleConfirm = async () => {
    try {
      setLoading(true)

      const loginSuccess = await attemptLogin(privateKey.toLowerCase())
      if (loginSuccess) {
        setPrivateKey('')
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setLoading(false)
      setHasAccount(true)
    }
  }

  const handleRedirect = async () => {
    startTransition(() => {
      router.push(`${routes.chaptersUrl + progressRoute}`)
    })
  }

  useEffect(() => {
    if (isPending) {
      setLoading(true)
      return
    } else if (!isPending && hasAccount) {
      setLoading(false)
      typeof onSignIn === 'function' && onSignIn()
    }
  }, [isPending])

  useEffect(() => {
    setProgressRoute(getLessonPath(progress.progress))
  }, [progress])

  function handleCreateClick() {
    open(Modal.SignUp, { onSignUpComplete: false })
  }

  return (
    (!hasAccount && (
      <div className={clsx(className, 'font-nunito text-white')}>
        <h2 className="mb-4 text-3xl font-bold">{t('modal_signin.heading')}</h2>
        <p className="mb-5">{t('modal_signin.pre_signin_paragraph_one')}</p>

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
    )) || (
      <div className={clsx(className, 'font-nunito text-white')}>
        <Avatar avatar={account.avatar} size={60} />
        <h2 className="mb-4 mt-4 text-2xl font-bold">
          {t('modal_signin.welcome_back')}
        </h2>
        <p className="mb-5">{t('modal_signin.post_signin_paragraph_one')}</p>

        <div className="mt-4 flex w-full flex-col gap-4">
          <Button
            full
            size="small"
            style="outline"
            disabled={loading}
            onClick={handleRedirect}
            classes="border-white border-2 p-1 text-xl md:w-full"
          >
            {loading && <Loader className="h-7 w-7 text-white" />}
            {!loading && t('modal_signin.progress_redirect')}
          </Button>
          <Button
            full
            size="small"
            disabled={loading}
            onClick={onSignIn}
            classes="border-white border-2 p-1 text-xl md:w-full"
          >
            {t('shared.close')}
          </Button>
        </div>
      </div>
    )
  )
}
