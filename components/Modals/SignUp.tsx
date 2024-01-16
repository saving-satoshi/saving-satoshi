import Avatar from 'components/Avatar'
import { useState, useEffect } from 'react'
import Icon from 'shared/Icon'
import { Button, Loader } from 'shared'
import HorizontalScrollView from 'components/HorizontalScrollView'
import { useTranslations, useLang, useSaveAndReturn } from 'hooks'
import clsx from 'clsx'
import { useAuthContext } from 'providers/AuthProvider'
import { useProgressContext } from 'providers/ProgressProvider'
import { getNextLessonKey } from 'lib/progress'
import { generateKeypair } from 'lib/crypto'
import { register } from 'api/auth'
import Modal from './Modal'
import { Text, ToggleSwitch } from 'ui'

const avatars = [
  'white spacesuit',
  'red spacesuit',
  'orange spacesuit',
  'bunny engineer',
  'badger astronaut',
]

export default function SignupModal({ onClose, state }) {
  const lang = useLang()
  const t = useTranslations(lang)
  const { login } = useAuthContext()
  const { progress, saveProgress } = useProgressContext()
  const { onSignUpComplete } = state.meta ?? false
  const saveAndReturn = useSaveAndReturn()
  const nextLessonKey = getNextLessonKey(progress)

  const [loading, setLoading] = useState<boolean>(false)
  const [avatar, setAvatar] = useState(1)
  const [copyAcknowledged, setCopyAcknowledged] = useState<boolean>(false)
  const [privateKey, setPrivateKey] = useState<string | undefined>(undefined)
  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleAcknowledgeCopy = () => {
    setCopyAcknowledged(!copyAcknowledged)
  }

  async function handleConfirm() {
    try {
      setLoading(true)

      if (privateKey) {
        await register(privateKey, `/assets/avatars/${avatar}.png`)
        await login(privateKey)
        //The following line saves the latest localStorage progress to the backend.
        saveProgress(onSignUpComplete ? nextLessonKey : progress)
        onClose()
        onSignUpComplete && saveAndReturn()
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setPrivateKey(undefined)
      setCopyAcknowledged(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (state.open) {
      const { sec } = generateKeypair()

      setPrivateKey(sec)
    }
  }, [state.open])

  return (
    <Modal active={state.open} onRequestClose={onClose}>
      <div className="float-right flex justify-end">
        <button onClick={onClose} aria-label="Close">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>

      <div className="sm:p-[30px]">
        <h2 className="mb-4 text-2xl font-bold">{t('modal_signup.heading')}</h2>
        <p className="mb-5 text-lg">{t('modal_signup.paragraph_one')}</p>

        <h2 className="mb-4 text-xl font-bold">
          {t('modal_signup.subheading_one')}
        </h2>

        <HorizontalScrollView>
          {avatars.map((name, index) => (
            <button
              key={name}
              className={clsx({
                'mr-3.5 sm:mr-3': index !== avatars.length - 1,
              })}
              aria-label={`Select avatar with ${name}`}
              aria-pressed={avatar === avatars.indexOf(name) + 1}
              onClick={() => setAvatar(avatars.indexOf(name) + 1)}
            >
              <Avatar
                avatar={`/assets/avatars/${index + 1}.png`}
                size={80}
                className={clsx('inline-block h-20 w-20 border-2', {
                  'border-white': avatar === avatars.indexOf(name) + 1,
                  'border-transparent': avatar !== avatars.indexOf(name) + 1,
                })}
              />
            </button>
          ))}
        </HorizontalScrollView>

        <h2 className="mb-4 text-xl font-bold">
          {t('modal_signup.subheading_two')}
        </h2>
        <>
          <pre className="mb-5 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
            {privateKey && (
              <>
                <code className="mb-2 whitespace-pre-wrap break-all text-base">
                  {privateKey.toUpperCase()}
                </code>
                <Button
                  round
                  size="tiny"
                  style="w-full"
                  onClick={() => copy(privateKey)}
                >
                  {copied ? t('shared.copy_acknowledged') : t('shared.copy')}
                </Button>
              </>
            )}
          </pre>
        </>
        <div className="flex flex-row items-center gap-2">
          <ToggleSwitch
            checked={copyAcknowledged}
            onChange={handleAcknowledgeCopy}
          />
          <Text>{t('modal_signup.acknowledged')}</Text>
        </div>
        <p className="mt-5 text-base">{t('modal_signup.generate')}</p>
        <button
          onClick={handleConfirm}
          disabled={loading || !copyAcknowledged}
          className="mt-4 w-full rounded-md border border-white px-4 py-2 text-xl text-white disabled:border-opacity-50 disabled:text-opacity-50"
        >
          {loading && <Loader className="h-7 w-7 text-white" />}
          {!loading && t('modal_signup.confirm')}
        </button>
      </div>
    </Modal>
  )
}
