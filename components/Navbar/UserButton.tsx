'use client'

import { useState } from 'react'
import LoginModal from 'components/Modals/Login'
import SignUpModal from 'components/Modals/SignUp'
import UserIcon from 'public/assets/icons/avatar.svg'
import Avatar from 'components/Avatar'
import { useUser, useHasMounted } from 'hooks'
import { useAuthContext } from 'providers/AuthProvider'

export default function UserButton() {
  const hasMounted = useHasMounted()
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  const { user, isLoggedIn, isRegistered } = useUser()

  function toggleModal(show) {
    if (user && user.publicKey && isRegistered) {
      setOpenSignInModal(show)
    } else {
      setOpenSignUpModal(show)
    }
  }

  function hideModals() {
    setOpenSignInModal(false)
    setOpenSignUpModal(false)
  }

  return (
    <div className="flex-l flex h-full items-stretch">
      {isRegistered ? (
        <LoginModal
          onLogin={() => setOpenSignInModal(false)}
          open={openSignInModal}
          onClose={hideModals}
        />
      ) : (
        <SignUpModal
          onConfirm={() => setOpenSignUpModal(false)}
          open={openSignUpModal}
          onClose={hideModals}
        />
      )}
      <span aria-describedby="navbar-tab-user">
        {!hasMounted && <div />}
        {hasMounted && isLoggedIn && (
          <button
            id="navbar-tab-user-icon"
            onClick={() => setOpenSignInModal(true)}
            aria-label="profile"
            className="text-grey-300 relative flex h-full w-12 cursor-pointer items-center justify-center md:w-16"
          >
            <Avatar avatar={user.avatar} size={30} />
          </button>
        )}
        {hasMounted && !isLoggedIn && (
          <button
            id="navbar-tab-user-login"
            onClick={() => toggleModal(true)}
            aria-label="profile"
            className="text-grey-300 relative flex h-full w-12 cursor-pointer items-center justify-center md:w-16"
          >
            <UserIcon />
          </button>
        )}
      </span>
    </div>
  )
}
