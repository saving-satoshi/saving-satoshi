'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'

const javascriptChallengeOne = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: '',
    args: [],
  },
  defaultCode: `let info = Bitcoin.rpc("getinfo")
console.log(info.difficulty)
  `,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeOne = {
  program: `print("KILL")`,
  defaultFunction: {
    name: '',
    args: [],
  },
  defaultCode: `info = Bitcoin.rpc("getinfo")
print(info["difficulty"])
  `,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeTwo = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'getBlockHeight',
    args: ['height'],
  },
  defaultCode: `function getBlockHeight(height) {
  const hashes = Bitcoin.rpc('getblocksbyheight', CODE_CHALLENGE_2_HEIGHT);
  let answer = null;
  let txCount = Infinity;

  for (const bhash of hashes) {
    const block = Bitcoin.rpc('getblock', bhash);
    const num = block.txs.length;

    if (num < txCount) {
      txCount = num;
      answer = bhash;
    }
  }
  return answer
  }`,
  validate: async (answer) => {
    if (answer !== 'True') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [156, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeTwo = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'get_block_height',
    args: ['height'],
  },
  defaultCode: `def get_block_height(height):
  hashes = Bitcoin.rpc("getblocksbyheight", height)
  answer = None
  tx_count = float("inf")
  for bhash in hashes:
      block = Bitcoin.rpc("getblock", bhash)
      num = len(block["txs"])
      if num < tx_count:
          tx_count = num
          answer = bhash
  return answer
  `,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [154, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeThree = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `const getBlockTxFee = () => {
    let block = Bitcoin.rpc("getblock", BLOCK_HASH)
    for (const tx of block["txs"]) {
      if(tx["txid"] === TX_HASH){
        return getTxFee(tx)
    }
  }
}
  
// Now let's find the miner's fee for this transaction.
// with the transaction from above determine the fee paid to miners
const getTxFee = (tx) =>{
  let fee = 0
  for (const input of tx["inputs"]) {
        fee+=input["value"]
  }
  for (const ouput of tx["outputs"]) {
      fee-=ouput["value"]
  }
  return fee
}`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeThree = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def get_block_tx_fee():
  block = Bitcoin.rpc("getblock", BLOCK_HASH)
  for tx in block["txs"]:
    if tx["txid"] == TX_HASH:
      return get_tx_fee(tx)
        

# Now let's find the miner's fee for this transaction.
# with the transaction from above determine the fee paid to miners
def get_tx_fee(tx):
  fee = 0
  for inp in tx["inputs"]:
    fee += inp["value"]
  for oup in tx["outputs"]:
    fee -= oup["value"]
  return fee
  `,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeFour = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `const getSubsidy = (height)=> {
    let halvings = BigInt(Math.floor(height / 210000));
    if (halvings >= 64) {
        return 0;
    }
    let subsidy = BigInt(5000000000);
    subsidy >>= halvings;
  
    return Number(subsidy)
  }`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeFour = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def get_subsidy(height):
    halvings = height // 210000
    if halvings >= 64:
        return 0
    subsidy = 5000000000
    subsidy >>= halvings
    return subsidy
`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeFive = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `const validateBlock = (block) => {
  let subsidy = getSubsidy(block["height"]);
  let fee = 0;
  for (let i = 1; i < block["txs"].length; i++) {
    fee += getTxFee(block["txs"][i]);
  }
  
  return subsidy + fee === block["txs"][0]["outputs"][0]["value"]
  }
`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeFive = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def validate_block(block):
  fees = 0
  subsidy = get_subsidy(block["height"])
    # Don't include the coinbase in this sum!
  for tx in block["txs"][1:]:
    fees += get_tx_fee(tx)
  return subsidy + fees == block["txs"][0]["outputs"][0]["value"]
`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const javascriptChallengeSix = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `const showtime = ()=> {
    let height = 6929851;
    let tips = {};
    let prevs = {};
    let invalid = [];
    let valid = [];
    let last = Bitcoin.rpc("getinfo")["blocks"];
    while (height <= last) {
        let candidates = Bitcoin.rpc("getblocksbyheight", height);
        for (let bhash of candidates) {
            let block = Bitcoin.rpc("getblock", bhash);
            // Don't even bother checking blocks with invalid parents
            if (invalid.includes(block["prev"]) || !validateBlock(block)) {
                invalid.push(bhash);
                continue;
            }
            // Valid blocks replace their parents in the tips list, extending the branch
            if (tips[block["prev"]]) {
                delete tips[block["prev"]];
            }
            tips[block["hash"]] = block;
            // save prev mapping for final output
            prevs[bhash] = block["prev"];
        }
        height += 1;
    }

    // this is the tip of the longest valid chain
    let best = Object.values(tips).reduce(function(a, b) {
        return a["height"] > b["height"] ? a : b;
    });
    // now reconstruct the chain of parent blocks
    let best_hash = best["hash"];
    valid.push(best_hash);
    while (prevs[best_hash]) {
        let prev = prevs[best_hash];
        valid.push(prev);
        best_hash = prev;
    }
    // reverse it because the instructions said to start low and go to tip
    valid.reverse();
    return {
        valid: valid,
        invalid: invalid
    };
}
`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallengeSix = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def showtime():
  height = 6929851
  tips = {}
  prevs = {}
  invalid = []
  valid = []
  last = Bitcoin.rpc("getinfo")["blocks"]
  while height <= last:
      candidates = Bitcoin.rpc("getblocksbyheight", height)
      for bhash in candidates:
          block = Bitcoin.rpc("getblock", bhash)
          # Don't even bother checking blocks with invalid parents
          if block["prev"] in invalid or not validate_block(block):
              invalid.append(bhash)
              continue
          # Valid blocks replace their parents in the tips list, extending the branch
          if block["prev"] in tips:
              del tips[block["prev"]]
          tips[block["hash"]] = block
          # save prev mapping for final output
          prevs[bhash] = block["prev"]
      height += 1
  # this is the tip of the longest valid chain
  best = max(tips.values(), key=lambda block: block["height"])
  # now reconstruct the chain of parent blocks
  best_hash = best["hash"]
  valid.append(best_hash)
  while best_hash in prevs:
      prev = prevs[best_hash]
      valid.append(prev)
      best_hash = prev
  # reverse it because the instructions said to start low and go to tip
  valid.reverse()
  return {
      "valid": valid,
      "invalid": invalid
  }
`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const configOne: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeOne,
    python: pythonChallengeOne,
  },
}

const configTwo: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeTwo,
    python: pythonChallengeTwo,
  },
}

const configThree: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeThree,
    python: pythonChallengeThree,
  },
}

const configFour: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeFour,
    python: pythonChallengeFour,
  },
}

const configFive: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeFive,
    python: pythonChallengeFive,
  },
}

const configSix: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeSix,
    python: pythonChallengeSix,
  },
}

export default function BuildingBlocksResources({ lang }) {
  const t = useTranslations(lang)
  const { currentLanguage } = useDataContext()

  const initialStateCodeOne =
    configOne.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeOne, setCodeOne] = useState<string>(initialStateCodeOne as string)

  const initialStateCodeTwo =
    configTwo.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeTwo, setCodeTwo] = useState<string>(initialStateCodeTwo as string)

  const initialStateCodeThree =
    configThree.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeThree, setCodeThree] = useState<string>(
    initialStateCodeThree as string
  )

  const initialStateCodeFour =
    configFour.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeFour, setCodeFour] = useState<string>(
    initialStateCodeFour as string
  )

  const initialStateCodeFive =
    configFive.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeFive, setCodeFive] = useState<string>(
    initialStateCodeFive as string
  )

  const initialStateCodeSix =
    configSix.languages[getLanguageString(currentLanguage)].defaultCode
  const [codeSix, setCodeSix] = useState<string>(initialStateCodeSix as string)

  const [languageOne, setLanguageOne] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageTwo, setLanguageTwo] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageThree, setLanguageThree] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageFour, setLanguageFour] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageFive, setLanguageFive] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageSix, setLanguageSix] = useState(
    getLanguageString(currentLanguage)
  )

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)
  const [challengeThreeIsToggled, setChallengeThreeIsToggled] = useState(false)
  const [challengeFourIsToggled, setChallengeFourIsToggled] = useState(false)
  const [challengeFiveIsToggled, setChallengeFiveIsToggled] = useState(false)
  const [challengeSixIsToggled, setChallengeSixIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const challengeThreeToggleSwitch = () => {
    setChallengeThreeIsToggled(!challengeThreeIsToggled)
  }

  const challengeFourToggleSwitch = () => {
    setChallengeFourIsToggled(!challengeFourIsToggled)
  }

  const challengeFiveToggleSwitch = () => {
    setChallengeFiveIsToggled(!challengeFiveIsToggled)
  }

  const challengeSixToggleSwitch = () => {
    setChallengeSixIsToggled(!challengeSixIsToggled)
  }

  const handleSetLanguageOne = (value) => {
    setLanguageOne(value)
    setCodeOne(configOne.languages[value].defaultCode as string)
  }
  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configTwo.languages[value].defaultCode as string)
  }
  const handleSetLanguageThree = (value) => {
    setLanguageThree(value)
    setCodeThree(configThree.languages[value].defaultCode as string)
  }
  const handleSetLanguageFour = (value) => {
    setLanguageFour(value)
    setCodeFour(configFour.languages[value].defaultCode as string)
  }
  const handleSetLanguageFive = (value) => {
    setLanguageFive(value)
    setCodeFive(configFive.languages[value].defaultCode as string)
  }
  const handleSetLanguageSix = (value) => {
    setLanguageSix(value)
    setCodeSix(configSix.languages[value].defaultCode as string)
  }

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: readOnlyOptions.theme,
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBorder': '#00000000', // 4th channel is for transparency
      },
    })
  }

  const handleMount = (_editor, monaco) => {
    monaco.editor.setTheme('satoshi')
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={<></>}
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeOneIsToggled}
              onChange={challengeOneToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeOneIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configOne.languages}
                value={languageOne}
                onChange={handleSetLanguageOne}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`765px`}
                  value={codeOne}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageOne}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_two')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeTwoIsToggled}
              onChange={challengeTwoToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeTwoIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configTwo.languages}
                value={languageTwo}
                onChange={handleSetLanguageTwo}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`1435px`}
                  value={codeTwo}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageTwo}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_three')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeThreeIsToggled}
              onChange={challengeThreeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeThreeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configThree.languages}
                value={languageThree}
                onChange={handleSetLanguageThree}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`365px`}
                  value={codeThree}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageThree}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_four')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeFourIsToggled}
              onChange={challengeFourToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeFourIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configFour.languages}
                value={languageFour}
                onChange={handleSetLanguageFour}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`235px`}
                  value={codeFour}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageFour}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}

          <Text>{t('help_page.solution_five')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeFiveIsToggled}
              onChange={challengeFiveToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>

          {challengeFiveIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configFive.languages}
                value={languageFive}
                onChange={handleSetLanguageFive}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`235px`}
                  value={codeFive}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageFive}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}

          <Text>{t('help_page.solution_six')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeSixIsToggled}
              onChange={challengeSixToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>

          {challengeSixIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configSix.languages}
                value={languageSix}
                onChange={handleSetLanguageSix}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`235px`}
                  value={codeSix}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageSix}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
        </>
      }
    />
  )
}
