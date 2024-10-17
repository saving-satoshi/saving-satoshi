export type TransactionData = Record<string, TabDetails>
type TabDetails = {
  description: string
  input?: Details
  output_0: Details
  output_1?: Details
  signatures?: Record<string, 'pending' | 'signed' | 'not-signed'>
}

type Details = {
  sats: string
  script?: string
}
export const transactionTabs: TransactionData = {
  deposit: {
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    description:
      'This is an output of 100,000 sats in your wallet that you are going to use for your off-chain payments with Laszlo.',
    output_0: {
      sats: '100,000',
      script: `T1BfUFVTSCBQVUJLRVkoWU9VKSBPUF9DSEVDS1NJRw==`,
    },
  },
  payment: {
    description: 'This is your off-chain payment to Laszlo.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '1000',
      script: 'T1BfUFVTSCBQVUJLRVkoTEFTWkxPKSBPUF9DSEVDS1NJRw==',
    },
    output_1: {
      sats: '99000',
      script: 'T1BfUFVTSCBQVUJLRVkoWU9VKSBPUF9DSEVDS1NJRw==',
    },
  },
  'multi-sig': {
    description: 'This is the multi-sig transaction between you and Laszlo.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script:
        'T1BfMiBPUF9QVVNIIFBVQktFWShMYXN6bG8pIE9QX1BVU0ggUFVCS0VZKFlvdSkgT1BfMiBPUF9DSEVDS01VTFRJU0lH',
    },
  },
  refund: {
    description:
      'This transaction ensures funds are not lost if Laszlo disappears.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script: 'T1BfUFVTSCBQVUJLRVkoWW91KSBPUF9DSEVDS1NJRw==',
    },
  },
  refund_1: {
    description:
      'This transaction ensures funds are not lost if Laszlo disappears. It also ensures that you will not broadcast it after paying for your beer.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script:
        'T1BfSUYgT1BfUFVTSCBQVUJLRVkoWW91KSBPUF9DSEVDS1NJR+KAqE9QX0VMU0UgT1BfMiBPUF9QVVNIIFBVQktFWShyZXZvY2F0aW9uX3lvdV8xKSBPUF9QVVNIIFBVQktFWShMYXN6bG8pIE9QXzIgT1BfQ0hFQ0tNVUxUSVNJR+KAqE9QX0VORElG',
    },
  },
  refund_2: {
    description:
      'This transaction ensures funds are not lost if you or Bob disappear.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script:
        'T1BfSUYgT1BfUFVTSCA3MDAgT1BfQ0hFQ0tTRVFVRU5DRVZFUklGWSBPUF9EUk9QIE9QX1BVU0ggUFVCS0VZKFlvdSkgT1BfQ0hFQ0tTSUfigKhPUF9FTFNF4oCoICBPUF8yIE9QX1BVU0ggUFVCS0VZKHJldm9jYXRpb25feW91XzEpIE9QX1BVU0ggUFVCS0VZKExhc3psbykgT1BfMiBPUF9DSEVDS01VTFRJU0lHIE9QX0VORElG',
    },
  },
  'commitment(You)': {
    description:
      'This transaction updates the sat distribution you and Laszlo agreed on.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '99000',
      script:
        'T1BfSUYgT1BfUFVTSCA3MDAgT1BfQ0hFQ0tTRVFVRU5DRVZFUklGWSBPUF9EUk9QIE9QX1BVU0ggUFVCS0VZKFlvdSkgT1BfQ0hFQ0tTSUcgT1BfRUxTRSBPUF8yIE9QX1BVU0ggUFVCS0VZKHJldm9jYXRpb25feW91XzIpIE9QX1BVU0ggUFVCS0VZKExhc3psbykgT1BfMiBPUF9DSEVDS01VTFRJU0lHIE9QX0VORElG',
    },
    output_1: {
      sats: '1000',
      script: 'T1BfUFVTSCBQVUJLRVkoTGFzemxvKSBPUF9DSEVDS1NJRw==',
    },
  },
  'commitment(Laszlo)': {
    description: 'This is Laszlo’s version of the commitment transaction.',
    signatures: {
      you: 'signed',
      lazlo: 'pending',
    },
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '2000',
      script: `T1BfSUbigKhPUF9QVVNIIDcwMCBPUF9DSEVDS1NFUVVFTkNFVkVSSUZZIE9QX0RST1DigKhPUF9QVVNIIFBVQktFWShMYXN6bG8pIE9QX0NIRUNLU0lH4oCoT1BfRUxTReKAqE9QXzIgT1BfUFVTSCBQVUJLRVkocmV2b2NhdGlvbl9sYXN6bG9fMSkgT1BfUFVTSCBQVUJLRVkoWW91KSBPUF8yIE9QX0NIRUNLTVVMVElTSUfigKhPUF9FTkRJRg==`,
    },
    output_1: {
      sats: '98000',
      script: 'T1BfUFVTSCBQVUJLRVkoWW91KSBPUF9DSEVDS1NJRw==',
    },
  },
}
