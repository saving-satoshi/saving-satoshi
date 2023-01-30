'use client'

import { allLessons, Lesson } from 'contentlayer/generated'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Tabs } from 'components/ui/Tabs'
import { Info } from './Info'
import { Code } from './Code'

/**
 * @slug {string} for fetching challenge data
 * @next {string} link to next part of chapter
 * @tips {string} content for tips section
 * @tipTitle {string} title of the tip
 * @chapterInfo {string} chapter number / info
 * @instruction {string} terminal instruction for user
 * @challegneInfo {string} challenge number / info
 * @expectedInput {string} answer to the challenge problem
 * @successMessage {string} Message displayed to the user upon finishing a challenge
 * @copyableCodeContent {string} Copyable code content / text
 * @TipAdditionalContent {React Functional Component} additional content that can be displayed as tip
 */
export default function TerminalChallengeLayout({
  slug,
  next,
  tips,
  tipTitle,
  chapterInfo,
  instruction,
  challengeInfo,
  expectedInput,
  successMessage,
  copyableCodeContent,
  TipAdditionalContent,
}: {
  slug: string
  next: string
  tips?: string
  tipTitle?: string
  chapterInfo: string
  instruction: string
  challengeInfo: string
  expectedInput: string
  successMessage: string
  copyableCodeContent?: string
  TipAdditionalContent?: React.FC
}) {
  function getLessonContent() {
    const data = allLessons.find(
      (challenge: Lesson) => challenge.slugAsParams === slug
    )
    return data
  }

  const genesis = getLessonContent()
  const [hydrated, setHydrated] = useState(false)
  const [activeTab, setActiveTab] = useState('info')
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })
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

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <>
        {isSmallScreen ? (
          <div
            className="
      flex
      w-full
      grow
      flex-col
      "
          >
            <Tabs
              items={tabData}
              activeId={activeTab}
              onChange={setActiveTab}
              classes="px-4 py-2 w-full"
              stretch={true}
            />
            {activeTab == 'info' && (
              <div className="p-3.5">
                <Info
                  genesis={genesis}
                  copyableCodeContent={copyableCodeContent}
                  tips={tips}
                  tipTitle={tipTitle}
                  TipAdditionalContent={TipAdditionalContent}
                />
              </div>
            )}
            {activeTab == 'code' && (
              <Code
                expectedInput={expectedInput}
                next={next}
                isSmallScreen={isSmallScreen}
                chapterInfo={chapterInfo}
                challengeInfo={challengeInfo}
                instruction={instruction}
                successMessage={successMessage}
              />
            )}
          </div>
        ) : (
          <div className="justify-stretch grid w-full grow grid-cols-1 px-0 md:grid-cols-2">
            <Info
              genesis={genesis}
              copyableCodeContent={copyableCodeContent}
              tips={tips}
              tipTitle={tipTitle}
              TipAdditionalContent={TipAdditionalContent}
            />
            <Code
              expectedInput={expectedInput}
              next={next}
              isSmallScreen={isSmallScreen}
              chapterInfo={chapterInfo}
              challengeInfo={challengeInfo}
              instruction={instruction}
              successMessage={successMessage}
            />
          </div>
        )}
      </>
    )
  )
}
