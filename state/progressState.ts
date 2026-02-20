/**
 * Backward-compatible public entrypoint.
 *
 * Existing imports keep working while the real implementation lives in
 * `state/progress/*`.
 */
// Re-export the new modular implementation through the legacy path.
export * from './progress'
