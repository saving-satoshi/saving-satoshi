import { CourseProgress } from 'types'

/**
 * Difficulty options for chapters that have multiple lesson tracks.
 *
 * We reuse this across state, tests, and content types so difficulty values
 * stay consistent everywhere.
 */
export enum DifficultyLevel {
  NORMAL = 'NORMAL',
  HARD = 'HARD',
}

/**
 * Default progress snapshot used for:
 * 1. the in-memory initialization value
 * 2. the merge baseline for persisted backend/local progress
 *
 * Keeping this in one place means older saved progress can still be merged
 * with newly added lessons without a migration step.
 */
export const defaultProgressState: CourseProgress = {
  chapters: [
    {
      id: 1,
      lessons: [
        { id: 'CH1INT1', path: '/chapter-1/intro-1', completed: false },
        { id: 'CH1INT2', path: '/chapter-1/intro-2', completed: false },
        { id: 'CH1GEN1', path: '/chapter-1/genesis-1', completed: false },
        { id: 'CH1GEN2', path: '/chapter-1/genesis-2', completed: false },
        { id: 'CH1GEN3', path: '/chapter-1/genesis-3', completed: false },
        { id: 'CH1GEN4', path: '/chapter-1/genesis-4', completed: false },
        { id: 'CH1TRA1', path: '/chapter-1/transacting-1', completed: false },
        { id: 'CH1TRA2', path: '/chapter-1/transacting-2', completed: false },
        { id: 'CH1TRA3', path: '/chapter-1/transacting-3', completed: false },
        { id: 'CH1OUT1', path: '/chapter-1/outro-1', completed: false },
        { id: 'CH1OUT2', path: '/chapter-1/outro-2', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 2,
      lessons: [
        { id: 'CH2INT1', path: '/chapter-2/intro-1', completed: false },
        { id: 'CH2INT2', path: '/chapter-2/intro-2', completed: false },
        { id: 'CH2HSH1', path: '/chapter-2/hashing-1', completed: false },
        { id: 'CH2HSH2', path: '/chapter-2/hashing-2', completed: false },
        { id: 'CH2HSH3', path: '/chapter-2/hashing-3', completed: false },
        { id: 'CH2HSH4', path: '/chapter-2/hashing-4', completed: false },
        { id: 'CH2HSH5', path: '/chapter-2/hashing-5', completed: false },
        { id: 'CH2HSH6', path: '/chapter-2/hashing-6', completed: false },
        { id: 'CH2SCR1', path: '/chapter-2/scripting-1', completed: false },
        { id: 'CH2SCR2', path: '/chapter-2/scripting-2', completed: false },
        { id: 'CH2MIN1', path: '/chapter-2/mining-1', completed: false },
        { id: 'CH2OUT1', path: '/chapter-2/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 3,
      lessons: [
        { id: 'CH3INT1', path: '/chapter-3/intro-1', completed: false },
        { id: 'CH3SOL1', path: '/chapter-3/solo-1', completed: false },
        { id: 'CH3POL1', path: '/chapter-3/pool-1', completed: false },
        { id: 'CH3POL2', path: '/chapter-3/pool-2', completed: false },
        { id: 'CH3COO1', path: '/chapter-3/coop-1', completed: false },
        { id: 'CH3COO2', path: '/chapter-3/coop-2', completed: false },
        { id: 'CH3COO3', path: '/chapter-3/coop-3', completed: false },
        { id: 'CH3SPL1', path: '/chapter-3/split-1', completed: false },
        { id: 'CH3SPL2', path: '/chapter-3/split-2', completed: false },
        { id: 'CH3OUT1', path: '/chapter-3/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 4,
      lessons: [
        { id: 'CH4INT1', path: '/chapter-4/intro-1', completed: false },
        { id: 'CH4PKY1', path: '/chapter-4/public-key-1', completed: false },
        { id: 'CH4PKY2', path: '/chapter-4/public-key-2', completed: false },
        { id: 'CH4PKY3', path: '/chapter-4/public-key-3', completed: false },
        { id: 'CH4PKY4', path: '/chapter-4/public-key-4', completed: false },
        { id: 'CH4ADR1', path: '/chapter-4/address-1', completed: false },
        { id: 'CH4ADR2', path: '/chapter-4/address-2', completed: false },
        { id: 'CH4ADR3', path: '/chapter-4/address-3', completed: false },
        { id: 'CH4TCC1', path: '/chapter-4/tabconf-clue-1', completed: false },
        { id: 'CH4OUT1', path: '/chapter-4/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 5,
      lessons: [
        { id: 'CH5INT1', path: '/chapter-5/intro-1', completed: false },
        { id: 'CH5INT2', path: '/chapter-5/intro-2', completed: false },
        { id: 'CH5INT3', path: '/chapter-5/intro-3', completed: false },
        {
          id: 'CH5DRM1',
          path: '/chapter-5/derive-message-1',
          completed: false,
        },
        {
          id: 'CH5DRM2',
          path: '/chapter-5/derive-message-2',
          completed: false,
        },
        {
          id: 'CH5DRM3',
          path: '/chapter-5/derive-message-3',
          completed: false,
        },
        {
          id: 'CH5DRM4',
          path: '/chapter-5/derive-message-4',
          completed: false,
        },
        {
          id: 'CH5DRM5',
          path: '/chapter-5/derive-message-5',
          completed: false,
        },
        {
          id: 'CH5DRM6',
          path: '/chapter-5/derive-message-6',
          completed: false,
        },
        {
          id: 'CH5DRM7',
          path: '/chapter-5/derive-message-7',
          completed: false,
        },
        {
          id: 'CH5VFS1',
          path: '/chapter-5/verify-signature-1',
          completed: false,
        },
        {
          id: 'CH5VFS2',
          path: '/chapter-5/verify-signature-2',
          completed: false,
        },
        {
          id: 'CH5VFS3',
          path: '/chapter-5/verify-signature-3',
          completed: false,
        },
        {
          id: 'CH5VFS4',
          path: '/chapter-5/verify-signature-4',
          completed: false,
        },
        {
          id: 'CH5VFS5',
          path: '/chapter-5/verify-signature-5',
          completed: false,
        },
        {
          id: 'CH5VLS1',
          path: '/chapter-5/validate-signature-1',
          completed: false,
        },
        {
          id: 'CH5VLS2',
          path: '/chapter-5/validate-signature-2',
          completed: false,
        },
        {
          id: 'CH5VLS3',
          path: '/chapter-5/validate-signature-3',
          completed: false,
        },
        {
          id: 'CH5VLS4',
          path: '/chapter-5/validate-signature-4',
          completed: false,
        },
        { id: 'CH5OUT1', path: '/chapter-5/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 6,
      difficulties: [
        {
          level: DifficultyLevel.NORMAL,
          lessons: [
            { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: false },
            { id: 'CH6INT2', path: '/chapter-6/intro-2', completed: false },
            { id: 'CH6INO1', path: '/chapter-6/in-out-1', completed: false },
            { id: 'CH6INO2', path: '/chapter-6/in-out-2', completed: false },
            { id: 'CH6INO3', path: '/chapter-6/in-out-3', completed: false },
            {
              id: 'CH6INO4_NORMAL',
              path: '/chapter-6/in-out-4-normal',
              completed: false,
            },
            { id: 'CH6INO5', path: '/chapter-6/in-out-5', completed: false },
            {
              id: 'CH6PUT1_NORMAL',
              path: '/chapter-6/put-it-together-1-normal',
              completed: false,
            },
            {
              id: 'CH6PUT2_NORMAL',
              path: '/chapter-6/put-it-together-2-normal',
              completed: false,
            },
            {
              id: 'CH6PUT3_NORMAL',
              path: '/chapter-6/put-it-together-3-normal',
              completed: false,
            },
            { id: 'CH6OUT1', path: '/chapter-6/outro-1', completed: false },
          ],
          completed: false,
        },
        {
          level: DifficultyLevel.HARD,
          lessons: [
            { id: 'CH6INT1', path: '/chapter-6/intro-1', completed: false },
            { id: 'CH6INT2', path: '/chapter-6/intro-2', completed: false },
            { id: 'CH6INO1', path: '/chapter-6/in-out-1', completed: false },
            { id: 'CH6INO2', path: '/chapter-6/in-out-2', completed: false },
            { id: 'CH6INO3', path: '/chapter-6/in-out-3', completed: false },
            {
              id: 'CH6INO4_HARD',
              path: '/chapter-6/in-out-4-hard',
              completed: false,
            },
            { id: 'CH6INO5', path: '/chapter-6/in-out-5', completed: false },
            {
              id: 'CH6PUT1_HARD',
              path: '/chapter-6/put-it-together-1-hard',
              completed: false,
            },
            {
              id: 'CH6PUT2_HARD',
              path: '/chapter-6/put-it-together-2-hard',
              completed: false,
            },
            {
              id: 'CH6PUT3_HARD',
              path: '/chapter-6/put-it-together-3-hard',
              completed: false,
            },
            {
              id: 'CH6PUT4_HARD',
              path: '/chapter-6/put-it-together-4-hard',
              completed: false,
            },
            {
              id: 'CH6PUT5_HARD',
              path: '/chapter-6/put-it-together-5-hard',
              completed: false,
            },
            {
              id: 'CH6PUT6_HARD',
              path: '/chapter-6/put-it-together-6-hard',
              completed: false,
            },
            { id: 'CH6OUT1', path: '/chapter-6/outro-1', completed: false },
          ],
          completed: false,
        },
      ],
      completed: false,
      selectedDifficulty: DifficultyLevel.NORMAL,
      hasDifficulty: true,
    },
    {
      id: 7,
      lessons: [
        { id: 'CH7INT1', path: '/chapter-7/intro-1', completed: false },
        { id: 'CH7INT2', path: '/chapter-7/intro-2', completed: false },
        { id: 'CH7INT3', path: '/chapter-7/intro-3', completed: false },
        {
          id: 'CH7MPT1',
          path: '/chapter-7/mempool-transaction-1',
          completed: false,
        },
        { id: 'CH7OUT1', path: '/chapter-7/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 8,
      lessons: [
        { id: 'CH8INT1', path: '/chapter-8/intro-1', completed: false },
        { id: 'CH8INT2', path: '/chapter-8/intro-2', completed: false },
        { id: 'CH8INT3', path: '/chapter-8/intro-3', completed: false },
        {
          id: 'CH8BBK1',
          path: '/chapter-8/building-blocks-1',
          completed: false,
        },
        {
          id: 'CH8BBK2',
          path: '/chapter-8/building-blocks-2',
          completed: false,
        },
        {
          id: 'CH8BBK3',
          path: '/chapter-8/building-blocks-3',
          completed: false,
        },
        {
          id: 'CH8BBK4',
          path: '/chapter-8/building-blocks-4',
          completed: false,
        },
        {
          id: 'CH8BBK5',
          path: '/chapter-8/building-blocks-5',
          completed: false,
        },
        {
          id: 'CH8BBK6',
          path: '/chapter-8/building-blocks-6',
          completed: false,
        },
        {
          id: 'CH8BBK7',
          path: '/chapter-8/building-blocks-7',
          completed: false,
        },
        {
          id: 'CH8BBK8',
          path: '/chapter-8/building-blocks-8',
          completed: false,
        },
        { id: 'CH8OUT1', path: '/chapter-8/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 9,
      lessons: [
        { id: 'CH9INT1', path: '/chapter-9/intro-1', completed: false },
        { id: 'CH9INT2', path: '/chapter-9/intro-2', completed: false },
        { id: 'CH9OPC1', path: '/chapter-9/opcodes-1', completed: false },
        { id: 'CH9OPC2', path: '/chapter-9/opcodes-2', completed: false },
        { id: 'CH9OPC3', path: '/chapter-9/opcodes-3', completed: false },
        { id: 'CH9OPC4', path: '/chapter-9/opcodes-4', completed: false },
        { id: 'CH9OPC5', path: '/chapter-9/opcodes-5', completed: false },
        { id: 'CH9OPC6', path: '/chapter-9/opcodes-6', completed: false },
        { id: 'CH9OPC7', path: '/chapter-9/opcodes-7', completed: false },
        { id: 'CH9OPC8', path: '/chapter-9/opcodes-8', completed: false },
        { id: 'CH9OPC9', path: '/chapter-9/opcodes-9', completed: false },
        { id: 'CH9OPC10', path: '/chapter-9/opcodes-10', completed: false },
        { id: 'CH9PRP1', path: '/chapter-9/proposal-1', completed: false },
        { id: 'CH9PRP2', path: '/chapter-9/proposal-2', completed: false },
        { id: 'CH9PRP3', path: '/chapter-9/proposal-3', completed: false },
        { id: 'CH9PRP4', path: '/chapter-9/proposal-4', completed: false },
        { id: 'CH9OUT1', path: '/chapter-9/outro-1', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
    {
      id: 10,
      lessons: [
        { id: 'CH10INT1', path: '/chapter-10/intro-1', completed: false },
        { id: 'CH10INT2', path: '/chapter-10/intro-2', completed: false },
        { id: 'CH10INT3', path: '/chapter-10/intro-3', completed: false },
        {
          id: 'CH10OAC1',
          path: '/chapter-10/opening-a-channel-1',
          completed: false,
        },
        {
          id: 'CH10OAC2',
          path: '/chapter-10/opening-a-channel-2',
          completed: false,
        },
        {
          id: 'CH10OAC3',
          path: '/chapter-10/opening-a-channel-3',
          completed: false,
        },
        {
          id: 'CH10OAC4',
          path: '/chapter-10/opening-a-channel-4',
          completed: false,
        },
        {
          id: 'CH10OAC5',
          path: '/chapter-10/opening-a-channel-5',
          completed: false,
        },
        {
          id: 'CH10UTS1',
          path: '/chapter-10/updating-the-state-1',
          completed: false,
        },
        {
          id: 'CH10UTS2',
          path: '/chapter-10/updating-the-state-2',
          completed: false,
        },
        {
          id: 'CH10UTS3',
          path: '/chapter-10/updating-the-state-3',
          completed: false,
        },
        {
          id: 'CH10UTS4',
          path: '/chapter-10/updating-the-state-4',
          completed: false,
        },
        {
          id: 'CH10UTS5',
          path: '/chapter-10/updating-the-state-5',
          completed: false,
        },
        {
          id: 'CH10UTS6',
          path: '/chapter-10/updating-the-state-6',
          completed: false,
        },
        {
          id: 'CH10MAP1',
          path: '/chapter-10/making-a-payment-1',
          completed: false,
        },
        {
          id: 'CH10MAP2',
          path: '/chapter-10/making-a-payment-2',
          completed: false,
        },
        {
          id: 'CH10MAP3',
          path: '/chapter-10/making-a-payment-3',
          completed: false,
        },
        {
          id: 'CH10MAP4',
          path: '/chapter-10/making-a-payment-4',
          completed: false,
        },
        {
          id: 'CH10MAP5',
          path: '/chapter-10/making-a-payment-5',
          completed: false,
        },
        {
          id: 'CH10MAP6',
          path: '/chapter-10/making-a-payment-6',
          completed: false,
        },
        {
          id: 'CH10MAP7',
          path: '/chapter-10/making-a-payment-7',
          completed: false,
        },
        {
          id: 'CH10MAP8',
          path: '/chapter-10/making-a-payment-8',
          completed: false,
        },
        { id: 'CH10OUT1', path: '/chapter-10/outro-1', completed: false },
        { id: 'CH10OUT2', path: '/chapter-10/outro-2', completed: false },
        { id: 'CH10OUT3', path: '/chapter-10/outro-3', completed: false },
        { id: 'CH10OUT4', path: '/chapter-10/outro-4', completed: false },
        { id: 'CH10OUT5', path: '/chapter-10/outro-5', completed: false },
        { id: 'CH10OUT6', path: '/chapter-10/outro-6', completed: false },
      ],
      completed: false,
      hasDifficulty: false,
    },
  ],
  currentChapter: 1,
  currentLesson: 'CH1INT1',
}
