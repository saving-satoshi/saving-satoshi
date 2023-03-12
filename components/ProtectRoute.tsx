'use client'

import { useContentRoute } from 'hooks'

const ProtectRoute = ({ children }) => {
  const { checkChallengeAllowed } = useContentRoute()
  if (!checkChallengeAllowed()) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <span className="mb-10 text-4xl text-white">
          This challenge is locked
        </span>
      </div>
    )
  }

  return children
}

export default ProtectRoute
