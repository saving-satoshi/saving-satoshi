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
  defaultCode: `  compute_input_signature(index, key) {
    assert(typeof key === 'bigint');
    assert(Number.isInteger(index));
    // Helper function:
    // Find modular multiplicative inverse using Extended Euclidean Algorithm
    function invert(value, modulus = secp256k1.ORDER) {
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
    // The math:
    //   k = random integer in [1, n-1]
    //   R = G * k
    //   r = x(R) mod n
    //   s = (r * a + m) / k mod n
    //   Extra Bitcoin rule from BIP 146:
    //     if s > n / 2 then s = n - s mod n
    //   return (r, s)
    // Hints:
    //   n = the order of the curve secp256k1.ORDER
    //   a = the private key
    //   m = the message value returned by digest()
    //   x(R) = the x-coordinate of the point R
    //   Use the invert() function above to turn division into multiplication!
    const msg = this.digest(index);
    const k = BigInt(\`0x\${randomBytes(32).toString('hex')}\`);
    // Extremeley unlikely to fail, this is lazy but ok
    assert(k < secp256k1.ORDER);
    const k_inverted = invert(k);
    const R = secp256k1.G.mul(k);
    const r = R.x.val % secp256k1.ORDER;
    let s = ((r * key) + BigInt(\`0x\${msg.toString('hex')}\`)) * k_inverted % secp256k1.ORDER;

    if (s > (secp256k1.ORDER / BigInt(2)))
      s = secp256k1.ORDER - s;
    return [r, s];
  }

  sign_input(index, priv, pub, sighash=1) {
    // Represent in DER format. The byte representations of r and s have
    // length rounded up (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
    // See BIP 66
    // https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
    const der_int = (n) => {
      const bit_length = n.toString(2).length;
      const byte_length = parseInt((bit_length + 8) / 8);
      const padded_hex = n.toString(16).padStart(byte_length * 2, '0');
      return Buffer.from(padded_hex, 'hex');
    };
    const encode_der = (r, s) => {
      const rb = der_int(r);
      const sb = der_int(s);
      let buf = Buffer.from([0x30, 4 + rb.length + sb.length, 2, rb.length]);
      buf = Buffer.concat([buf, rb]);
      buf = Buffer.concat([buf, Buffer.from([2, sb.length])]);
      buf = Buffer.concat([buf, sb]);
      return buf;
    };
    const [r, s] = this.compute_input_signature(index, priv);
    const der_sig = encode_der(r, s);
    const wit = new Witness();
    wit.push_item(Buffer.concat([der_sig, Buffer.from([sighash])]));
    wit.push_item(pub);
    this.witnesses.push(wit);
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
  defaultCode: `    def compute_input_signature(self, index, key):
        # The math:
        #   k = random integer in [1, n-1]
        #   R = G * k
        #   r = x(R) mod n
        #   s = (r * a + m) / k mod n
        #   Extra Bitcoin rule from BIP 146:
        #     if s > n / 2 then s = n - s mod n
        # return (r, s)
        # Hints:
        #   n = the order of the curve secp256k1.GE.ORDER
        #   a = the private key
        #   m = the message value returned by digest()
        #   x(R) = the x-coordinate of the point R
        #   Use the built-in pow() function to turn division into multiplication!

        assert isinstance(key, int)

        msg = self.digest(index)
        k = randrange(1, secp256k1.GE.ORDER)
        k_inverted = pow(k, -1, secp256k1.GE.ORDER)
        R = k * secp256k1.G
        r = int(R.x) % secp256k1.GE.ORDER
        s = ((r * key) + int.from_bytes(msg)) * k_inverted % secp256k1.GE.ORDER
        if s > secp256k1.GE.ORDER // 2:
            s = secp256k1.GE.ORDER - s

        return (r, s)

    def sign_input(self, index, priv, pub, sighash=1):
        def encode_der(r, s):
            # Represent in DER format. The byte representations of r and s have
            # length rounded up (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
            # See BIP 66
            # https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
            rb = r.to_bytes((r.bit_length() + 8) // 8, 'big')
            sb = s.to_bytes((s.bit_length() + 8) // 8, 'big')
            return b'\x30' + bytes([4 + len(rb) + len(sb), 2, len(rb)]) + rb + bytes([2, len(sb)]) + sb
        (r, s) = self.compute_input_signature(index, priv)
        der_sig = encode_der(r, s)
        wit = Witness()
        wit.push_item(der_sig + bytes([sighash]))
        wit.push_item(pub)
        self.witnesses.append(wit)`,
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

export default function PutItTogetherResources({ lang }) {
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
      readingResources={<></>}
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
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
                  height={`1565px`}
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
