'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'

const javascriptChallengeOne = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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
    name: 'verify',
    args: [],
  },
  hiddenRange: [1, 0, 126, 0],
  defaultCode: `
  // Message digest from step 5:
	const msg = 0x7a05c6145f10101e9d6325494245adf1297d80f8f38d4d576d57cdba220bcb19;

	// Signature values from step 6:
	const sig_r = 0x4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41;
	const sig_s = 0x181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09;

	// Public key values from step 7:
	const pubkey_x = 0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c;
	const pubkey_y = 0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3;

	function verify(sig_r, sig_s, pubkey_x, pubkey_y, msg) {
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
      // Implement ECDSA!
      //   u1 = m / s mod n
      //   u2 = r / s mod n
      //   R = G * u1 + A * u2
      //   r == x(R) mod n
      const sig_s_inverted = invert(sig_s);
      const u1 = (msg * sig_s_inverted) % ORDER;
      const u2 = (sig_r * sig_s_inverted) % ORDER;
      const R = (secp256k1.G.mul(u1)).add(key.mul(u2));
      return R.x.equals(new FE(sig_r));
    }
`,
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
    name: 'verify',
    args: [],
  },
  hiddenRange: [1, 0, 126, 0],
  defaultCode: `
# Message digest from step 5:
msg = 0x7a05c6145f10101e9d6325494245adf1297d80f8f38d4d576d57cdba220bcb19

# Signature values from step 6:
sig_r = 0x4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41
sig_s = 0x181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09

# Public key values from step 7:
pubkey_x = 0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c
pubkey_y = 0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3

def verify(sig_r, sig_s, pubkey_x, pubkey_y, msg):
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
    u1 = (msg * sig_s_inverted) % GE.ORDER
    u2 = (sig_r * sig_s_inverted) % GE.ORDER

    # Calculate R = u1 * G + u2 * public key
    # We need to use the appropriate methods for point multiplication and addition
    R1 = GE.mul((u1, G))
    R2 = GE.mul((u2, key))
    R = R1 + R2

    # Verify if the x-coordinate of R modulo ORDER is equal to sig_r
    return sig_r == int(R.x) % GE.ORDER
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

export default function VerifySignatureResources({ lang }) {
  const t = useTranslations(lang)
  const initialStateCodeOne =
    configOne.languages[configOne.defaultLanguage].defaultCode
  const [codeOne, setCodeOne] = useState<string>(initialStateCodeOne as string)
  const initialStateCodeTwo =
    configTwo.languages[configTwo.defaultLanguage].defaultCode
  const [codeTwo, setCodeTwo] = useState(initialStateCodeTwo as string)
  const [languageOne, setLanguageOne] = useState(configOne.defaultLanguage)
  const [languageTwo, setLanguageTwo] = useState(configTwo.defaultLanguage)
  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const handleSetLanguageOne = (value) => {
    setLanguageOne(value)
    setCodeOne(configOne.languages[value].defaultCode as string)
  }

  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configTwo.languages[value].defaultCode as string)
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
            {t('chapter_five.resources.verify_signature.eliptic_curve_heading')}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.eliptic_curve_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.public_private_key_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.public_private_key_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.signature_verification_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.signature_verification_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.finite_field_arithmetic_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.finite_field_arithmetic_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_five.resources.verify_signature.ge_and_fe_heading')}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.ge_and_fe_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.modular_inverse_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.modular_inverse_paragraph_one'
            )}
          </Text>
        </>
      }
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
                  height={`calc(var(--dynamic-height) - 827px)`}
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
                  height={`calc(var(--dynamic-height) - 642px)`}
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
        </>
      }
    />
  )
}
