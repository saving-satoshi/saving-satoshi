'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

const javascriptChallenge = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `function verify(sig_r, sig_s, pubkey_x, pubkey_y, msg) {
  // Verify an ECDSA signature given a public key and a message.
  // All input values will be 32-byte BigInt()'s.
  // Start by creating a curve point representation of the public key
  const key = new GE(new FE(pubkey_x), new FE(pubkey_y));
  // Next, check the range limits of the signature values
  if (sig_r == 0n || sig_r >= ORDER) {
    console.log('invalid r value');
    return false;
  }
  if (sig_s == 0n || sig_s >= ORDER) {
    console.log('invalid s value');
    return false;
  }
  // Helper function:
  // Find modular multiplicative inverse using Extended Euclidean Algorithm
  function invert(value, modulus = ORDER) {
    let x0 = 0n;
    let x1 = 1n;
    let a = value;
    let m = modulus;

    while (a > 1n) {
      const q = a / m;
      let t = m;
      m = a % m;
      a = t;
      t = x0;
      x0 = x1 - q * x0;
      x1 = t;
    }

    if (x1 < 0n)
      x1 += modulus;

    return x1;
  }
  const sig_s_inverted = invert(sig_s);
  // Implement ECDSA!
  //   u1 = m / s mod n
  const u1 = (msg * sig_s_inverted) % ORDER;
  //   u2 = r / s mod n
  const u2 = (sig_r * sig_s_inverted) % ORDER;
	// Calculate R = u1 * G + u2 * public key
  // We need to use the appropriate methods for point multiplication and addition
  const R = (secp256k1.G.mul(u1)).add(key.mul(u2));
	// Verify if the x-coordinate of R modulo ORDER is equal to sig_r
  return R.x.equals(new FE(sig_r));
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

const pythonChallenge = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def verify(sig_r, sig_s, pubkey_x, pubkey_y, msg):
	# Verify an ECDSA signature given a public key and a message.
	# All input values will be 32-byte integers.
	# Start by creating a curve point representation of the public key
	key = GE(pubkey_x, pubkey_y)

	# Next, check the range limits of the signature values
	if sig_r == 0 or sig_r >= GE.ORDER:
		print("invalid r value")
		return False
	if sig_s == 0 or sig_s >= GE.ORDER:
		print("invalid s value")
		return False

	# Calculate the inverse of sig_s modulo ORDER
	sig_s_inverted = pow(sig_s, -1, GE.ORDER)

	# Calculate u1 and u2
  # Implement ECDSA!
  # u1 = m / s mod n
	u1 = (msg * sig_s_inverted) % GE.ORDER
  # u2 = r / s mod n
	u2 = (sig_r * sig_s_inverted) % GE.ORDER

	# Calculate R = u1 * G + u2 * public key
	# We need to use the appropriate methods for point multiplication and addition
	R1 = GE.mul((u1, G))
	R2 = GE.mul((u2, key))
	R = R1 + R2

	# Verify if the x-coordinate of R modulo ORDER is equal to sig_r
	return sig_r == int(R.x) % GE.ORDER`,
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

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallenge,
    python: pythonChallenge,
  },
}

export default function VerifySignatureResourcesFive({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const initialStateCode =
    config.languages[getLanguageString(currentLanguage)].defaultCode
  const [code, setCode] = useState<string>(initialStateCode as string)
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode as string)
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
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature_five.finite_field_arithmetic_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature_five.finite_field_arithmetic_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature_five.ge_and_fe_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature_five.ge_and_fe_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature_five.modular_inverse_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature_five.modular_inverse_paragraph_one'
            )}
          </Text>
        </>
      }
      codeResources={
        <>
          <Text>{t('help_page.pseudo_solution')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.pseudo_confirm')}</Text>
          </div>
          {challengeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={config.languages}
                value={language}
                onChange={handleSetLanguage}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`940px`}
                  value={code}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={language}
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
