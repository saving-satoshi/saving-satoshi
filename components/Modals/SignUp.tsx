'use client'

import Avatar from 'components/Avatar'
import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import CloseIcon from 'public/assets/icons/close.svg'
import { Checkbox, CopyButton, Loader, RadioButton, RadioGroup } from 'shared'
import HorizontalScrollView from 'components/HorizontalScrollView'
import { useTranslations, useLang } from 'hooks'
import clsx from 'clsx'
import { useAuthContext } from 'providers/AuthProvider'
import { generateKeypair, generateKeyPairFromString } from 'lib/crypto'
import { register } from 'api/auth'
import { Input } from 'shared'
import { PrivateKey } from 'types'

enum View {
  Generate = 'generate',
  Input = 'input',
}

export default function SignUpModal({ open, onClose }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { login } = useAuthContext()

  const [loading, setLoading] = useState<boolean>(false)
  const [avatar, setAvatar] = useState(1)
  const [view, setView] = useState<string>(View.Generate)
  const [copyAcknowledged, setCopyAcknowledged] = useState<boolean>(false)
  const [privateKey, setPrivateKey] = useState<PrivateKey | undefined>(
    undefined
  )

  const handleChangeView = (view: View) => {
    setView(view)
    setCopyAcknowledged(false)
  }

  const handleSetPrivateKey = (pk: string) => {
    const { sec } = generateKeyPairFromString(pk)

    setPrivateKey(sec)
  }

  async function handleConfirm() {
    try {
      setLoading(true)

      await register(privateKey, `/assets/avatars/${avatar}.png`)

      await login(privateKey.toString(16))

      onClose()
    } catch (ex) {
      console.error(ex)
    } finally {
      setPrivateKey(undefined)
      setCopyAcknowledged(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (view === View.Generate) {
      const { sec } = generateKeypair()

      setPrivateKey(sec)
    }
  }, [view])

  return (
    <ReactModal
      isOpen={open}
      overlayClassName="fixed inset-0 bg-overlayColor z-10"
      className="fixed inset-0 top-1/2 left-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto bg-back p-5 pt-10 font-nunito text-white shadow-lg outline-none sm:absolute sm:h-fit sm:w-[550px] sm:rounded-lg sm:pt-5"
      contentLabel="Sign up Modal"
      onRequestClose={onClose}
    >
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="sm:p-[30px]">
        <h2 className="mb-4 text-2xl font-bold">{t('modal_signup.heading')}</h2>
        <p className="mb-5 text-lg">{t('modal_signup.paragraph_one')}</p>

        <h2 className="mb-4 text-xl font-bold">
          {t('modal_signup.subheading_one')}
        </h2>

        <HorizontalScrollView>
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar
              key={i}
              avatar={`/assets/avatars/${i}.png`}
              size={80}
              onClick={() => setAvatar(i)}
              classes={clsx('border-2 h-20 w-20 rounded-full inline-block', {
                'border-white': avatar === i,
                'border-transparent': avatar !== i,
              })}
            />
          ))}
        </HorizontalScrollView>

        <h2 className="mb-4 text-xl font-bold">
          {t('modal_signup.subheading_two')}
        </h2>

        <RadioGroup value={view} onChange={handleChangeView}>
          <RadioButton name="generate" value={View.Generate}>
            Generate
          </RadioButton>

          <RadioButton name="inpit" value={View.Input}>
            Enter my own
          </RadioButton>
        </RadioGroup>

        {view === View.Generate && (
          <>
            <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
              {privateKey && (
                <>
                  <code className="mb-2 whitespace-pre-wrap break-all text-base">
                    {privateKey.toString(16)}
                  </code>
                  <CopyButton content={privateKey.toString(16)}>
                    {t('shared.copy')}
                  </CopyButton>
                </>
              )}
            </pre>
            <p className="mt-5 text-base">{t('modal_signup.generate')}</p>
          </>
        )}

        {view === View.Input && (
          <>
            <Input
              type="text"
              name="private_key"
              placeholder="Enter your private key"
              onInput={handleSetPrivateKey}
            />
            <p className="mt-5 text-base">{t('modal_signup.input')}</p>
          </>
        )}

        <Checkbox
          name="checkbox"
          className="my-4"
          value={copyAcknowledged}
          onChange={setCopyAcknowledged}
          label={t('modal_signup.acknowledge_copy')}
        />

        <button
          onClick={handleConfirm}
          disabled={loading || !copyAcknowledged}
          className="mt-4 w-full rounded-md border border-white px-4 py-2 text-xl text-white disabled:border-opacity-50 disabled:text-opacity-50"
        >
          {loading && <Loader className="h-7 w-7 text-white" />}
          {!loading && t('modal_signup.confirm')}
        </button>
      </div>
    </ReactModal>
  )
}
