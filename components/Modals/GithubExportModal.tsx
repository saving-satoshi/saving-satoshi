import { useState, useEffect } from 'react'
import Modal from './Modal'
import Input from 'shared/Input'
import Button from 'shared/Button'
import { verifyToken, GitHubUser } from 'lib/userGithub'

export default function GitHubExportModal({
  active,
  savedToken,
  onClose,
  onConfirm,
}: {
  active: boolean
  savedToken: string | null
  onClose: () => void
  onConfirm: (token: string, repo?: string) => void
}) {
  const [step, setStep] = useState<'auth' | 'config'>('auth')
  const [token, setToken] = useState('')
  const [repo, setRepo] = useState('')
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (active) {
      if (savedToken) {
        setToken(savedToken)
        handleVerify(savedToken)
      } else {
        setStep('auth')
        setToken('')
        setUser(null)
      }
      setError('')
      setRepo('')
    }
  }, [active])

  const handleVerify = async (tokenToVerify: string) => {
    setVerifying(true)
    setError('')
    const userData = await verifyToken(tokenToVerify)
    setVerifying(false)

    if (userData) {
      setUser(userData)
      setStep('config')
    } else {
      setError('Connection failed. Please check your Token.')
    }
  }

  const handleSubmit = () => {
    onConfirm(token, repo || undefined)
  }

  return (
    <Modal active={active} onRequestClose={onClose}>
      <div className="flex flex-col items-center gap-6 p-4 text-center">
        <h2 className="text-2xl font-bold text-white">GitHub Export</h2>

        {step === 'auth' && (
          <div className="w-full max-w-sm space-y-4">
            <p className="text-white/80">
              Paste a <strong>Personal Access Token</strong> (Classic) with{' '}
              <code>repo</code> scope.
            </p>
            <Input
              type="password"
              name="gh_token"
              placeholder="ghp_..."
              value={token}
              onInput={setToken}
            />
            {error && (
              <p className="text-red-400 bg-red-400/10 rounded p-2 text-sm">
                {error}
              </p>
            )}
            <div className="flex justify-center gap-4 pt-2">
              <Button onClick={onClose} style="outline" size="small">
                Cancel
              </Button>
              <Button
                onClick={() => handleVerify(token)}
                disabled={!token || verifying}
                size="small"
              >
                {verifying ? 'Verifying...' : 'Connect'}
              </Button>
            </div>
          </div>
        )}

        {step === 'config' && user && (
          <div className="w-full max-w-sm space-y-6">
            <div className="flex items-center justify-center gap-4 rounded-lg bg-white/10 p-3">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="h-10 w-10 rounded-full"
              />
              <div className="text-left">
                <p className="text-xs opacity-75">Connected as</p>
                <p className="text-green-400 font-bold">{user.login}</p>
              </div>
              <button
                onClick={() => setStep('auth')}
                className="ml-auto text-xs text-white/50 underline hover:text-white"
              >
                Unlink
              </button>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-white">
                Target Repository
              </label>
              <Input
                type="text"
                name="repo_name"
                placeholder="e.g. solutions OR my-user/solutions"
                value={repo}
                onInput={setRepo}
              />
              <p className="text-xs text-white/50">
                Supports URLs too. Repository{' '}
                <strong>must already exist</strong>.
                <br />
                Leave blank to export as a <strong>Secret Gist</strong>.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <Button onClick={onClose} style="outline" size="small">
                Cancel
              </Button>
              <Button onClick={handleSubmit} size="small">
                Export
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
