import clsx from 'clsx'
import Avatar from 'components/Avatar'
import { useLang, useMediaQuery, useProceed, useTranslations } from 'hooks'
import { useAtom } from 'jotai'
import React, { FC, useEffect, useState } from 'react'
import { Button } from 'shared'
import ArrowRightLarge from 'shared/icons/ArrowRightLarge'
import SignatureButton from 'shared/SignatureButton'
import { accountAtom } from 'state/state'
import { LessonDirection, LessonView } from 'types'
import { StatusBar, Text, LessonTabs, Tooltip } from 'ui'
import { SuccessNumbers } from 'ui/common/StatusBar'
import { sleep } from 'utils'
import { transactionTabs } from 'utils/data'
import Lesson from '../Lesson'
import OutputScript from './OutputScript'
import Tabs from './Tabs'

interface ITransactionProps {
  children: React.ReactNode
  currentTransactionTab: string
  nextTransactionTab?: string
  progressKey: string
  prefilled?: boolean
  prefilledEditable?: boolean
  initialStack: Record<'output_0' | 'output_1', SpendingConditions>
  height?: number
  nSequenceTime?: number
  answerScript: Record<'output_0' | 'output_1', string[]>
  answerSats?: Record<'output_0' | 'output_1', string>
  answerSatsMirrored?: Record<'output_0' | 'output_1', string>
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

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

const initialStackStepTwo = {
  output_0: {
    0: ['SIG(YOU)', '1'],
    1: ['0', 'SIG(REVOCATION_YOU_3)', 'SIG(LASZLO)', '0'],
  },
  output_1: { 0: ['SIG(LASZLO)'] },
}

const answerScriptStepTwo = {
  output_0: [
    'OP_IF',
    'OP_PUSH',
    'PUBKEY(REVOCATION_YOU_3)',
    'OP_CHECKSEQUENCEVERIFY',
    'OP_DROP',
    'PUBKEY(YOU)',
    'PUBKEY(LASZLO)',
    'OP_CHECKSIG',
    'OP_ELSE',
    'OP_ENDIF',
    'OP_CHECKMULTISIG',
  ],
  output_1: ['OP_PUSH', 'PUBKEY(LASZLO)', 'OP_CHECKSIG'],
}

const TransactionChallenge: FC<ITransactionProps> = ({
  children,
  currentTransactionTab,
  nextTransactionTab,
  progressKey,
  prefilled,
  prefilledEditable,
  answerScript,
  answerSats,
  answerSatsMirrored,
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
  const [step, setStep] = useState(0)
  const [activeView, setActiveView] = useState(currentTransactionTab)
  const [activePageView, setActivePageView] = useState(LessonView.Info)
  const [account] = useAtom(accountAtom)
  const allTabs = Object.keys(transactionTabs)
  const allTabsData = Object.entries(transactionTabs)
  const [validating, setValidating] = useState<boolean>(false)
  const [success, setSuccess] = useState<SuccessNumbers>(0)
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

      // Default case
      return i <= allTabs.indexOf(currentTransactionTab) ?? allTabs.length
    })
    .map((tab) => ({ id: tab, text: tab.includes('refund') ? 'refund' : tab }))

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
          if (prefilledEditable && step === 0) {
            return 6
          }
          return 5
        } else if (answerScript.output_0.length === 0) {
          return 5
        } else if (validateOutput1.signature_0 === 5) {
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
    if (
      (prefilledEditable &&
        step === 1 &&
        returnSuccess() === 5 &&
        validating) ||
      (!prefilledEditable && returnSuccess() === 5)
    ) {
      setSignatures((prev) => ({ ...prev, you: 'signed' }))
      handleLazloSign()
    }
    setValidating(true)
  }

  const handleScriptEmpty = (scriptEmpty: boolean) => {
    if (scriptEmpty && step === 0) {
      setDisableSign(true)
    } else {
      setDisableSign(false)
    }
  }

  const handlePageViewChange = (view) => {
    setActivePageView(view)
  }

  useEffect(() => {
    if (nextTransactionTab && step === 1) {
      setActiveView(nextTransactionTab)
    }
  }, [step])

  useEffect(() => {
    if (step === 0 && returnSuccess() === 6) setStep(1)
    setSuccess(returnSuccess())
  }, [validating])

  console.log(validateOutput0, validateOutput1)

  return (
    <Lesson
      direction={
        isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
      }
      onViewChange={handlePageViewChange}
    >
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
      {children}
      <div
        className={clsx(
          'flex h-[calc(100vh-70px-48px)] w-full flex-shrink-0 flex-col justify-between border-white/25 md:h-[calc(100vh-70px)] md:max-w-[50vw] md:border-l',
          {
            'hidden md:flex': activePageView === LessonView.Info,
          }
        )}
      >
        <div className="flex h-full flex-col">
          <div className="min-h-[65px] w-full overflow-x-auto border-y border-white/25 md:border-t-0">
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
                <div
                  key={tabData[0]}
                  className="flex h-[calc(100vh-70px-56px-65px-48px)] flex-col gap-4 overflow-y-auto md:h-[calc(100vh-70px-56px-65px)]"
                >
                  <div className="px-6 pt-6 font-space-mono">
                    <Text className="font-space-mono text-base leading-[22.22px] tracking-[2%]">
                      {tabData[1].description}
                    </Text>
                    <div className="flex flex-col items-center gap-[15px] py-4 md:flex-row md:items-start">
                      {tabData[1]?.input && (
                        <div className="flex w-full flex-row justify-around gap-4 rounded-md bg-black/20 p-4 text-lg md:w-fit md:flex-col">
                          <div className="flex flex-col gap-1">
                            <Text>Input 0</Text>
                            <Text className="text-nowrap ">
                              {tabData[0] === 'deposit' ||
                              tabData[0] === 'payment' ||
                              tabData[0] === 'multi-sig'
                                ? 'Deposit'
                                : 'Multi-sig'}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Text>Sats</Text>
                            <Text>{tabData[1].input?.sats}</Text>
                          </div>
                        </div>
                      )}

                      <div className="rotate-90 md:flex md:h-44 md:rotate-0 md:items-center">
                        {tabData[1]?.input && <ArrowRightLarge />}
                      </div>
                      <div className="flex w-full min-w-0 flex-col gap-4">
                        {tabData[1].output_0 && (
                          <OutputScript
                            key={'output_0'}
                            initialStack={
                              step === 0 ? initialStack : initialStackStepTwo
                            }
                            height={height}
                            nSequenceTime={nSequenceTime}
                            output="output 0"
                            tab={tabData[0]}
                            prefilled={prefilled}
                            prefilledEditable={prefilledEditable}
                            step={step}
                            currentTransactionTab={currentTransactionTab}
                            nextTransactionTab={nextTransactionTab}
                            answerSats={answerSats}
                            answerSatsMirrored={answerSatsMirrored}
                            sats={tabData[1].output_0.sats || ''}
                            script={tabData[1].output_0.script || ''}
                            progressKey={progressKey}
                            answerScript={
                              step === 0 ? answerScript : answerScriptStepTwo
                            }
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
                            initialStack={
                              step === 0 ? initialStack : initialStackStepTwo
                            }
                            height={height}
                            nSequenceTime={nSequenceTime}
                            output="output 1"
                            tab={tabData[0]}
                            setValidateScript={setValidateOutput1}
                            prefilled={prefilled}
                            prefilledEditable={prefilledEditable}
                            step={step}
                            currentTransactionTab={currentTransactionTab}
                            nextTransactionTab={nextTransactionTab}
                            answerSats={answerSats}
                            answerSatsMirrored={answerSatsMirrored}
                            sats={tabData[1].output_1.sats || ''}
                            script={tabData[1].output_1.script || ''}
                            progressKey={progressKey}
                            answerScript={
                              step === 0 ? answerScript : answerScriptStepTwo
                            }
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
                  {((step === 0 &&
                    currentTransactionTab === tabData[0] &&
                    !noSignature) ||
                    (step === 1 &&
                      nextTransactionTab === tabData[0] &&
                      !noSignature)) && (
                    <div className="flex flex-col gap-4 px-[30px] py-[15px]">
                      <div className="flex flex-col">
                        <Text>Signatures</Text>
                        <div className="flex flex-col gap-2 md:flex-row md:gap-10">
                          <div className="flex items-center gap-2.5">
                            <div className="h-[30px] w-[30px]">
                              <Avatar avatar={account?.avatar} />
                            </div>
                            <Text> You</Text>
                            <SignatureButton
                              returnSuccess={success}
                              onClick={handleYouSign}
                              classes=" max-w-[max-content] rounded-[3px] px-2.5 text-base py-1"
                              disabled={
                                signatures.you === 'signed' ||
                                disableSign ||
                                validating
                              }
                            >
                              Sign
                            </SignatureButton>
                          </div>

                          {!laszloHidden && (
                            <div className="flex items-center gap-2.5">
                              <Avatar avatar={'/assets/avatars/laszlo.jpg'} />
                              <Text>Laszlo</Text>
                              <SignatureButton
                                disabled={true}
                                returnSuccess={success}
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
                        {/*<Button
                          classes="max-w-[max-content] rounded-[3px] px-2.5 text-base py-1"
                          disabled
                        >
                          Broadcast Transaction
                        </Button>*/}
                        <Tooltip
                          id="broadcast-button"
                          position="top"
                          theme="bg-[#5c4d4b]"
                          offset={10}
                          parentClassName="max-w-[max-content]"
                          className="max-w-[100px] cursor-not-allowed"
                          content={`Broadcasting this ${tabData[0]} will close the channel`}
                        >
                          <Button
                            disabled={true}
                            classes=" max-w-[max-content] rounded-[3px] px-2.5 text-base py-1"
                          >
                            Broadcast Transaction
                          </Button>
                        </Tooltip>
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
                  {currentTransactionTab === 'deposit'
                    ? t('status_bar.skip_challenge_first')
                    : t('status_bar.skip_challenge_last')}
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
            nextStepMessage={`Nice! Let\'s update your commitment!`}
            success={success}
          />
        )}
      </div>
    </Lesson>
  )
}

export default TransactionChallenge
