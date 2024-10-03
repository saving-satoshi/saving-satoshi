export type TransactionData = Record<string, TabDetails>
type TabDetails = {
  description: string
  input?: Details
  output_0: Details
  output_1?: Details
}

type Details = {
  sats: string
  script?: string
}
export const transactionTabs: TransactionData = {
  deposit: {
    description:
      'This is an output of 100,000 sats in your wallet that you are going to use for your off-chain payments with Laszlo.',
    output_0: {
      sats: '100,000',
      script: `T1BfUFVTSCBQVUJLRVkoWW91KSBPUF9DSEVDS1NJRw==`, // Intro 2
    },
  },
  payment: {
    description: 'This is your off-chain payment to Laszlo.',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '1000',
      script: '',
    },
    output_1: {
      sats: '99000',
      script: '',
    },
  },
  'multi-sig': {
    description: 'This is the multi-sig transaction between you and Laszlo.',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script: '',
    },
  },
  refund: {
    description:
      'This transaction ensures funds are not lost if Laszlo disappears.',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script: '',
    },
  },
  refund_1: {
    description:
      'This transaction ensures funds are not lost if Laszlo disappears.',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script: '',
    },
  },
  refund_2: {
    description:
      'This transaction ensures funds are not lost if Laszlo disappears.',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '100000',
      script: '',
    },
  },
  'commitment(You)': {
    description: '',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '99000',
      script: '',
    },
    output_1: {
      sats: '1000',
      script: '',
    },
  },
  'commitment(Lazlo)': {
    description: '',
    input: {
      sats: '100,000',
    },
    output_0: {
      sats: '1000',
      script: '',
    },
    output_1: {
      sats: '99000',
      script: '',
    },
  },
}
