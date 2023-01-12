'use client'

import { Tabs } from 'components/ui/Tabs'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Code } from './code'
import { BoxButton } from 'components/ui/BoxButton'

export default function Genesis() {
  const [hydrated, setHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('info')
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })
  const tabData = [
    {
      id: 'info',
      text: 'Info'
    },
    {
      id: 'code',
      text: 'Code',
    }
  ]

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (hydrated && (
    <div className="
      flex
      w-screen
      grow
      flex-col
      items-center
      justify-center
    ">
      {isSmallScreen && (
        <Tabs
          items={tabData}
          activeId={activeTab}
          onChange={setActiveTab}
          classes="px-4 py-2 w-full"
          stretch={true}
        />
      )}
      {(!isSmallScreen || (isSmallScreen && activeTab == 'info')) && (
        <div className="
          flex
          flex-col
          gap-6
          grow
          px-4
          py-6
          max-w-[840px]
          md:justify-center
        ">
          <div className='genesis text-white font-nunito'>
            <h1>Find block 0</h1>
            <p>
              Let's find the very first block in the Bitcoin blockchain. Go to a block explorer and search for '0'. This will take you to the block at height 0. As you can see, this block only contains one transaction.
            </p>
            <p>
              Open up the transaction so you can take a closer look at the details. On the left is an input called 'Coinbase'. Inside that is a field called 'ScriptSig'. Find the HEX representation and paste it below.
            </p>
          </div>

          <BoxButton
            href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
            external={true}
          >View Block 0</BoxButton>
        </div>
      )}
      {!isSmallScreen && (
        <hr className="border-1 h-1 w-screen border-white/25"></hr>
      )}
      {(!isSmallScreen || (isSmallScreen && activeTab == 'code')) && (
        <Code
          isSmallScreen={isSmallScreen}
        />
      )}
    </div>
  ))
}
