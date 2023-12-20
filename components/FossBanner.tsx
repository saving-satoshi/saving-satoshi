'use client'
import { useLang, useTranslations } from 'hooks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from 'shared'
import CloseIcon from 'shared/icons/Close'
import { Text } from 'ui'
import styles from './banner.module.css'

const BANNER_KEY = 'queuer-banner'

const FossBanner = () => {
  const [isOpen, setIsOpen] = useState(false)
  const lang = useLang()
  const t = useTranslations(lang)
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
    <div className="bg-[#5B818D] py-[15px] ">
      <div className="flex w-full flex-col  items-center justify-center gap-5 md:flex-row">
        <div className="flex flex-col text-center font-nunito text-lg ">
          <Text>{t('fossBanner.paragraph_one')}</Text>
          <Text>{t('fossBanner.paragraph_two')}</Text>
        </div>
        <Button
          external
          classes="text-[17px] font-bold px-5 py-2.5 md:w-[max-content]"
          href={'https://learning.chaincode.com/#FOSS'}
          style="outline"
        >
          {t('fossBanner.linkCTA')}
        </Button>
      </div>
    </div>
  )
}

export default FossBanner
