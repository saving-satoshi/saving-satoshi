'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import CloseIcon from 'shared/icons/Close'
import styles from './banner.module.css'

const BANNER_KEY = 'queuer-banner'

const FossBanner = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(BANNER_KEY, 'hidden')
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const banner_in_session = window.sessionStorage.getItem(BANNER_KEY)
    if (banner_in_session === 'hidden') {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [])

  // if (queuerBanner == "hidden") return null;
  if (!isOpen) return null
  return (
    <div className="sticky top-[40px] z-[99] mt-10 flex w-full -translate-y-[40px] items-center bg-white/75 md:top-20 md:-translate-y-20">
      <div className="flex grow items-center justify-between px-2 text-sm md:px-4 md:text-base">
        <div className="flex-[1_1_100%] text-center font-medium text-back">
          <Link href="https://learning.chaincode.com/#FOSS" target="_blank">
            <span>{`Start Your Career in Bitcoin Open Source`}</span>
            <br />
            <span>{`Development with Chaincode Labs `}</span>
            <span
              className="text-back"
              style={{
                fontWeight: 'medium',
                textTransform: 'uppercase',
                color: '#ED8936',
                textDecoration: 'underline',
              }}
            >{`Apply Today!`}</span>
          </Link>
        </div>
        <button
          onClick={handleClose}
          className="hover:bg-orange-300 relative grid h-[18px] w-[18px] place-items-center rounded-full"
        >
          <CloseIcon className="text-back" />
        </button>
      </div>
    </div>
  )
}

export default FossBanner
