import { setProgressLocal } from 'api/local'
import { setProgress } from 'api/progress'
import { atom } from 'jotai'
import { atomEffect } from 'jotai-effect'
import { CourseProgress } from 'types'
import { accountAtom, isAuthLoadingAtom } from '../state'
import { defaultProgressState } from './defaultProgress'

/**
 * Tracks whether a progress load/merge is currently running.
 *
 * This is mainly a UI spinner flag. It can be true even after we already
 * finished the first successful hydration.
 */
export const isLoadingProgressAtom = atom<boolean>(true)

/**
 * Tracks whether initial progress hydration has completed at least once.
 *
 * This is a sync-safety guard, not a loading spinner flag. We use it to avoid
 * writing default state back to storage before real progress has been loaded.
 */
export const isProgressLoadedAtom = atom<boolean>(false)

/** Main in-memory source of truth for course progress. */
export const courseProgressAtom = atom<CourseProgress>(defaultProgressState)

/**
 * Persists in-memory progress to storage on every change.
 *
 * Always writes to local storage so progress survives logout. Authenticated
 * users also get their progress synced to the backend.
 */
const syncProgressEffectAtom = atomEffect((get) => {
  // Read dependencies so the effect reruns when any of them change.
  const account = get(accountAtom)
  const courseProgress = get(courseProgressAtom)
  const isAuthLoading = get(isAuthLoadingAtom)
  const isProgressLoaded = get(isProgressLoadedAtom)

  // Skip writes while auth/progress bootstrap is still unresolved.
  if (isAuthLoading || !isProgressLoaded) {
    return
  }

  // Always persist to local storage so progress survives logout.
  setProgressLocal(courseProgress)

  if (account) {
    // Signed-in users also write progress to the backend.
    setProgress(courseProgress)
  }
})

/**
 * Public progress atom that bundles state + sync behavior.
 *
 * Consumers read/write one atom, and persistence stays centralized here.
 */
export const syncedCourseProgressAtom = atom(
  (get) => {
    // Touching the effect atom wires up its reactive sync behavior.
    get(syncProgressEffectAtom)
    // Return the current in-memory progress snapshot.
    return get(courseProgressAtom)
  },
  (_get, set, update: Partial<CourseProgress>) => {
    // Accept partial updates so callers can set only what they care about.
    set(courseProgressAtom, (prev) => ({ ...prev, ...update }))
  }
)
