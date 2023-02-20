'use client'

import { useState } from 'react'
import LoginModal from 'components/Modals/Login'
import SignUpModal from 'components/Modals/SignUp'
import UserIcon from 'public/assets/icons/avatar.svg'
import Avatar from 'components/Avatar'
import { useUser, useHasMounted } from 'hooks'

export default function UserButton() {
  const hasMounted = useHasMounted()
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  const { user, isLoggedIn, isRegistered } = useUser()
  const renderIconButton = () => {
    if (!hasMounted) {
      return <div />
    }

    return isLoggedIn ? (
      <button
        onClick={() => setOpenSignInModal(true) }
        aria-label="profile"
        className="text-grey-300 h-10 w-10 cursor-pointer"
      >
        <Avatar avatar={user.avatar} size={30} />
      </button>
    ) : (
      <button
        onClick={() => toggleModal(true) }
        aria-label="profile"
        className="text-grey-300 h-10 w-10 cursor-pointer"
      >
        <UserIcon />
      </button>
    )
  }

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
    <div>
      <div className="ml-4">{renderIconButton()}</div>
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
    </div>
  )
}
