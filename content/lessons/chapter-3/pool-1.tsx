'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { Title } from 'ui'
import { Button } from 'shared'
import Avatar from 'components/Avatar'
import { useMediaQuery } from 'hooks'
import { useState, useEffect } from 'react'
import { cssVarThemeChange } from 'lib/themeSelector'
import Image from 'next/image'

export const metadata = {
  title: 'chapter_three.pool_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3POL1',
}

export default function Pool1({ lang }) {
  const t = useTranslations(lang)

  const saveAndProceed = useSaveAndProceed()
  const isSmallScreen = useMediaQuery({ width: 767 })
  const [playersFound, setPlayersFound] = useState(false)
  const [players, setPlayers] = useState([
    {
      username: 'You',
      avatar: '/assets/avatars/1.png',
      display: true,
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/2.png',
      display: false,
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/4.png',
      display: false,
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/3.png',
      display: false,
    },
  ])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let playerCount = 1
    let updatedPlayers = players
    if (!playersFound) {
      interval = setInterval(() => {
        updatedPlayers = updatedPlayers.map((player, index) => {
          if (index === playerCount) {
            return { ...player, display: true }
          }
          return player
        })
        setPlayers(updatedPlayers)
        playerCount += 1
        if (playerCount == 4) {
          setPlayersFound(true)
        }
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [!playersFound])

  useEffect(() => {
    cssVarThemeChange({
      '--CH3SOL1-bg': '#411e4f',
      '--CH3SOL1-gradient-start': '#3C1843',
      '--CH3SOL1-gradient-stop': '#45235a',
    })
  }, [])

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-[30px] md:my-auto md:flex md:flex-row">
      <div className="ml-[15px] mr-[15px] mt-[30px] flex h-fit w-full max-w-[342px] flex-col items-center gap-y-2.5 border-2 border-dotted border-white/25 p-3.5 md:order-last  md:ml-0 md:mt-0 md:w-auto md:max-w-none">
        <div className="mx-[5px] mb-[10px] flex gap-x-2.5 p-[5px]">
          <Image
            className="rounded-full"
            src="/assets/images/chapter-1-holocat-cropped.jpg"
            alt=""
            width={26}
            height={26}
          />
          <Title>HoloCat Pool</Title>
        </div>
        <div className="fade-in grid w-full grid-cols-2">
          {players.map((profile, i) => (
            <div
              key={i}
              className="min-h-[180px] w-full max-w-[155px] justify-items-center p-[15px] md:min-h-[185px] md:min-w-[190px] md:max-w-none"
            >
              <div className="flex justify-center md:mb-[15px]">
                <Avatar
                  avatar={profile.avatar}
                  size={isSmallScreen ? 75 : 100}
                  className={`${
                    profile?.display
                      ? 'fade-in max-h-[75px] min-h-[75px] min-w-[75px] max-w-[75px] md:min-h-[100px] md:min-w-[100px]'
                      : 'hidden'
                  }`}
                />

                <div
                  className={`max-h-[75px] min-h-[75px] min-w-[75px] max-w-[75px] rounded-full bg-black/20 md:min-h-[100px] md:min-w-[100px]
                ${profile?.display ? 'hidden' : ''}
                `}
                />
              </div>
              <div
                className={`w-full p-2.5 text-center font-nunito text-base font-semibold text-white
            ${profile.display ? 'animate-none' : 'animate-pulse'}
            `}
              >
                {profile.display ? profile.username : 'Waiting...'}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`mb-5 flex w-full items-center px-[15px] transition-opacity md:mx-0 md:mb-0 md:mt-0 md:w-1/2 md:max-w-[405px] md:pl-[15px] md:pr-0 ${
          true ? 'fade-in' : 'fade-out'
        }`}
      >
        <div className="text-center font-nunito text-white md:text-left">
          <Title>{t('chapter_three.pool_one.waiting_screen_heading')}</Title>
          <div className="mt-2 text-lg">
            {t('chapter_three.pool_one.waiting_screen_paragraph_one')}
          </div>
          <div className="mt-8 text-lg">
            {t('chapter_three.pool_one.waiting_screen_paragraph_two')}
          </div>
          {playersFound ? (
            <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
              {t('chapter_three.pool_one.continue_button')}
            </Button>
          ) : (
            <Button
              classes="mt-10 animate-pulse max-md:w-full"
              style="faded"
              disabled={true}
            >
              {t('chapter_three.pool_one.waiting_button')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
