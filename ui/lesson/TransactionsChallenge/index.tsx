import Avatar from 'components/Avatar'
import { useLang, useMediaQuery, useProceed, useTranslations } from 'hooks'
import { useAtom } from 'jotai'
import React, { FC, useState } from 'react'
import { Button } from 'shared'
import ArrowRightLarge from 'shared/icons/ArrowRightLarge'
import SignatureButton from 'shared/SignatureButton'
import { accountAtom } from 'state/state'
import { LessonDirection } from 'types'
import { StatusBar, Text, Tooltip } from 'ui/common'
import { SuccessNumbers } from 'ui/common/StatusBar'
import { sleep } from 'utils'
import { transactionTabs } from 'utils/data'
import Lesson from '../Lesson'
import OutputScript from './OutputScript'
import Tabs from './Tabs'

interface ITransactionProps {
  children: React.ReactNode
  currentTransactionTab: string
  progressKey: string
  prefilled?: boolean
  initialStack: Record<'output_0' | 'output_1', SpendingConditions>
  height?: number
  nSequenceTime?: number
  answerScript: Record<'output_0' | 'output_1', string[]>
  laszloWillNotSign?: boolean
  noSignature?: boolean
  alwaysShowButton?: boolean
  laszloHidden?: boolean
}
export type OutputType = Record<'output_0' | 'output_1', string[]>
export type SignatureType = Record<
  'signature_0' | 'signature_1',
  SuccessNumbers
>
export type SpendingConditions = {
  0: string[]
  1?: string[]
}
export type Signatures = 'pending' | 'signed' | 'not-signed' | 'rejected'
export type OutputSuccess = {
  0: SuccessNumbers
  1: SuccessNumbers
}

export type OutputSignatures = {
  you: Signatures
  laszlo: Signatures
}

const TransactionChallenge: FC<ITransactionProps> = ({
  children,
  currentTransactionTab,
  progressKey,
  prefilled,
  answerScript,
  initialStack,
  height,
  nSequenceTime,
  laszloWillNotSign,
  noSignature,
  alwaysShowButton,
  laszloHidden = false,
}) => {
  const lang = useLang()
  const t = useTranslations(lang)
  const proceed = useProceed()
  const isSmallScreen = useMediaQuery({ width: 767 })
  const [activeView, setActiveView] = useState(currentTransactionTab)
  const [account] = useAtom(accountAtom)
  const allTabs = Object.keys(transactionTabs)
  const allTabsData = Object.entries(transactionTabs)
  const [validating, setValidating] = useState<boolean>(false)
  const [errorMessage0, setErrorMessage0] = useState('')
  const [errorMessage1, setErrorMessage1] = useState('')
  const [signatures, setSignatures] = useState<OutputSignatures>({
    you: 'not-signed',
    laszlo: 'not-signed',
  })
  const [disableSign, setDisableSign] = useState<boolean>(true)
  const [validateOutput0, setValidateOutput0] = useState<SignatureType>({
    signature_0: 0,
    signature_1: 0,
  })

  const [validateOutput1, setValidateOutput1] = useState<SignatureType>({
    signature_0: 0,
    signature_1: 0,
  })

  const [satsInput, setSatsInput] = useState<{
    output_0: string
    output_1: string
  }>({
    output_0: '',
    output_1: '',
  })
  const [scriptInput, setScriptInput] = useState<{
    output_0: string
    output_1: string
  }>({
    output_0: '',
    output_1: '',
  })
  const handleLazloSign = () => {
    setSignatures((prev) => ({ ...prev, laszlo: 'pending' }))
  }

  const allTabsFiltered = allTabs
    .filter((tab, i) => {
      if (tab === 'payment') {
        return currentTransactionTab === 'payment'
      }

      // Handle refund tabs
      if (
        tab.includes('refund') &&
        allTabs.indexOf(currentTransactionTab) > 2
      ) {
        if (!currentTransactionTab.includes('refund')) {
          return tab === 'refund_2'
        } else {
          return tab === currentTransactionTab
        }
      }

      // Handle commitment_you and commitment_you_1 based on current tab
      if (tab.includes('commitment_you')) {
        if (
          currentTransactionTab === 'commitment_you' ||
          currentTransactionTab === 'commitment_laszlo'
        ) {
          return tab === 'commitment_you'
        } else if (
          currentTransactionTab === 'commitment_you_1' ||
          currentTransactionTab === 'commitment_laszlo_1'
        ) {
          return tab === 'commitment_you_1'
        }
      }

      // Handle commitment_laszlo and commitment_laszlo_1 based on current tab
      if (tab.includes('commitment_laszlo')) {
        if (currentTransactionTab === 'commitment_laszlo') {
          return tab === 'commitment_laszlo'
        } else if (
          currentTransactionTab === 'commitment_you_1' ||
          currentTransactionTab === 'commitment_laszlo_1'
        ) {
          return tab === 'commitment_laszlo_1'
        }
      }

      // Default case
      return i <= allTabs.indexOf(currentTransactionTab) ?? allTabs.length
    })
    .map((tab) => ({
      id: tab,
      text: tab.includes('refund')
        ? 'refund'
        : tab.includes('commitment_you')
        ? 'commitment(You)'
        : tab.includes('commitment_laszlo')
        ? 'commitment(Laszlo)'
        : tab,
    }))

  const returnSuccess = () => {
    if (
      validateOutput0.signature_0 === 0 &&
      validateOutput1.signature_0 === 0
    ) {
      return 0
    }
    if (initialStack.output_0?.[1]) {
      if (
        validateOutput0.signature_0 === 5 &&
        validateOutput0.signature_1 !== 2
      ) {
        if (
          answerScript.output_1.length > 0 &&
          validateOutput1.signature_0 === 5
        ) {
          return 5
        } else if (answerScript.output_0.length === 0) {
          return 5
        } else {
          return 5
        }
      } else {
        if (validateOutput0.signature_1 === 5) {
          return 5
        } else {
          return 2
        }
      }
    } else {
      if (answerScript?.output_1.length > 0) {
        if (
          validateOutput1.signature_0 === 5 &&
          validateOutput0.signature_0 === 5
        ) {
          return 5
        } else if (
          validateOutput0.signature_0 === 2 ||
          validateOutput1.signature_0 === 2
        ) {
          return 2
        } else {
          return 0
        }
      } else {
        return validateOutput0.signature_0
      }
    }
  }

  const handleYouSign = async () => {
    await sleep(1000)
    setValidating(true)
    if (returnSuccess() === 5) {
      setSignatures((prev) => ({ ...prev, you: 'signed' }))
      handleLazloSign()
    }
  }

  const handleScriptEmpty = (scriptEmpty) => {
    if (scriptEmpty) {
      setDisableSign(true)
    } else {
      setDisableSign(false)
    }
  }

  return (
    <Lesson
      direction={
        isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
      }
    >
      {children}
      <div className="flex h-[calc(100vh-70px-48px)] w-full flex-shrink-0 flex-col justify-between border-white/25 md:h-[calc(100vh-70px)] md:max-w-[50vw] md:border-l">
        <div className="flex h-full flex-col gap-4 ">
          <div className=" min-h-[65px] w-full border-b border-white/25 ">
            <Tabs
              items={allTabsFiltered}
              classes={'h-full max-w-[max-content] capitalize'}
              stretch
              setActiveView={setActiveView}
              activeView={activeView}
            />
          </div>
          {allTabsData.map(
            (tabData) =>
              tabData[0] === activeView && (
                <div key={tabData[0]} className="flex h-full flex-col gap-4 ">
                  <div className="flex h-full max-h-[calc(100vh-407px)] flex-col  overflow-auto px-6 pt-6  font-space-mono ">
                    <Text className=" font-space-mono text-base leading-[22.22px] tracking-[2%]">
                      {tabData[1].description}
                    </Text>
                    <div className="flex items-start gap-[15px] py-4">
                      {tabData[1]?.input && (
                        <div className="flex flex-col gap-4 rounded-md bg-black/20 p-4 text-lg">
                          <div className="flex flex-col gap-1">
                            <Text className="text-nowrap ">
                              {tabData[0] === 'deposit' ||
                              tabData[0] === 'payment' ||
                              tabData[0] === 'multi-sig'
                                ? 'Deposit'
                                : 'Multi-sig'}
                            </Text>
                            <Text>Input 0</Text>
                          </div>
                          <div className="flex flex-col gap-1  ">
                            <Text>Sats</Text>
                            <Text>{tabData[1].input?.sats}</Text>
                          </div>
                        </div>
                      )}

                      {tabData[1]?.input && <ArrowRightLarge />}
                      <div className="flex w-full flex-col gap-4">
                        {tabData[1].output_0 && (
                          <OutputScript
                            key={'output_0'}
                            initialStack={initialStack}
                            height={height}
                            nSequenceTime={nSequenceTime}
                            output="output 0"
                            tab={tabData[0]}
                            prefilled={prefilled}
                            currentTransactionTab={currentTransactionTab}
                            sats={tabData[1].output_0.sats || ''}
                            script={tabData[1].output_0.script || ''}
                            progressKey={progressKey}
                            answerScript={answerScript}
                            validateScript0={validateOutput0}
                            validateScript1={validateOutput1}
                            setValidateScript={setValidateOutput0}
                            validating={validating}
                            setValidating={setValidating}
                            setErrorMessage={setErrorMessage0}
                            onScriptEmpty={handleScriptEmpty}
                            satsInput={satsInput}
                            setSatsInput={setSatsInput}
                            scriptInput={scriptInput}
                            setScriptInput={setScriptInput}
                          />
                        )}
                        {tabData[1].output_1 && (
                          <OutputScript
                            key={'output_1'}
                            initialStack={initialStack}
                            height={height}
                            nSequenceTime={nSequenceTime}
                            output="output 1"
                            tab={tabData[0]}
                            setValidateScript={setValidateOutput1}
                            prefilled={prefilled}
                            currentTransactionTab={currentTransactionTab}
                            sats={tabData[1].output_1.sats || ''}
                            script={tabData[1].output_1.script || ''}
                            progressKey={progressKey}
                            answerScript={answerScript}
                            validating={validating}
                            validateScript0={validateOutput0}
                            validateScript1={validateOutput1}
                            setValidating={setValidating}
                            setErrorMessage={setErrorMessage1}
                            onScriptEmpty={handleScriptEmpty}
                            satsInput={satsInput}
                            setSatsInput={setSatsInput}
                            scriptInput={scriptInput}
                            setScriptInput={setScriptInput}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {currentTransactionTab === tabData[0] && !noSignature && (
                    <div className="flex flex-col gap-4 px-[30px] py-[15px] ">
                      <div className="flex flex-col">
                        <Text>Signatures</Text>
                        <div className="flex  gap-10">
                          <div className="flex items-center gap-2.5">
                            <Avatar avatar={account?.avatar} />
                            <Text> You</Text>
                            <SignatureButton
                              returnSuccess={returnSuccess()}
                              onClick={handleYouSign}
                              classes=" max-w-[max-content] rounded-[3px] px-2.5 text-base py-1"
                              disabled={
                                signatures.you === 'signed' || disableSign
                              }
                            >
                              Sign
                            </SignatureButton>
                          </div>

                          {!laszloHidden && (
                            <div className="flex items-center gap-2.5">
                              <Avatar avatar={account?.avatar} />
                              <Text>Laszlo</Text>
                              <SignatureButton
                                disabled={true}
                                returnSuccess={returnSuccess()}
                                laszloWillNotSign={laszloWillNotSign}
                                classes=" max-w-[max-content] rounded-[3px] px-2.5 text-base py-1"
                              >
                                Sign
                              </SignatureButton>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Text>Options</Text>
                        <Button
                          classes="max-w-[max-content] rounded-[3px] px-2.5 text-base py-1"
                          disabled
                        >
                          Broadcast Transaction
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
        {alwaysShowButton ? (
          <div className="max-md:bottom-0 max-md:px-4 max-md:py-8 h-14 min-h-14 grow border-l border-t border-white/25 transition-all">
            <div className="max-md:gap-4 flex flex-col items-stretch justify-between md:h-14 md:flex-row">
              <div className="flex items-center align-middle transition duration-150 ease-in-out md:px-5">
                <div className="font-nunito text-[21px] text-white opacity-50 transition duration-150 ease-in-out">
                  {t('Lets move on to the first challenge!')}
                </div>
              </div>
              <Button onClick={proceed} classes="md:text-2xl">
                {t('shared.next')}
              </Button>
            </div>
          </div>
        ) : (
          <StatusBar
            errorMessage={errorMessage1 || errorMessage0}
            success={returnSuccess()}
          />
        )}
      </div>
    </Lesson>
  )
}

export default TransactionChallenge
