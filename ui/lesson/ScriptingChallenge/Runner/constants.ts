export enum RunnerState {
  Idle = 'idle',
  Building = 'building',
  Running = 'running',
  Error = 'error',
  Complete = 'complete',
}

export const DEFAULT_OUTPUT_HEIGHT = 204
export const MIN_OUTPUT_HEIGHT = 40
export const RUNNER_WS_ENDPOINT =
  process.env.NEXT_PUBLIC_WS_ENDPOINT || 'wss://api.savingsatoshi.com'

export const OUTPUT_COPY = {
  idleTitle: 'Script output',
  idleMessage: 'Waiting for you to run the script...',
  buildingTitle: 'Starting up',
  buildingMessage: 'This will take just a few seconds...',
  timeoutMessage: 'Repl timed out without a response. Please try again.',
} as const
