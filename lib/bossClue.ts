import { ChapterInState, CourseProgress, LessonInState } from 'types'
import { get, post } from 'utils'

// The BOSS clue is only available when BOSS_CLUE_ENABLED is exactly "true"
// Any other value, or leaving it unset, turns it off
export function isBossClueActive(
  enabled: string | undefined = process.env.BOSS_CLUE_ENABLED
): boolean {
  return enabled === 'true'
}

// This is the page the user is on so it won't be marked complete
export const BOSS_CLUE_LESSON_ID = 'CH10OUT6'

// Lessons that don't have to be completed:
// - the clue page itself (the player is on it right now)
// - the TABConf page, which was added in Oct 2025 and gets merged into older
//   players' progress as incomplete, with no way back to it once chapter 4 is done
export const NOT_REQUIRED_LESSON_IDS = [BOSS_CLUE_LESSON_ID, 'CH4TCC1']

// our helper methods in 'utils' throw the backend's `errors` payload on API errors,
// but throw real Error instances (TypeError, SyntaxError) on network/parse failures.
// The first means "not verified", the second means "backend unavailable"
function isTransportError(e: unknown): boolean {
  return e instanceof Error
}

const lessonDone = (l: LessonInState) =>
  l.completed || NOT_REQUIRED_LESSON_IDS.includes(l.id)

// A chapter with difficulty levels counts as finished if ANY one difficulty level
// is fully complete. selectedDifficulty isn't reliable here because a player can
// flip the toggle after finishing the chapter
function chapterFinished(chapter: ChapterInState): boolean {
  if (chapter.hasDifficulty) {
    return (chapter.difficulties ?? []).some(
      (d) => d.lessons.length > 0 && d.lessons.every(lessonDone)
    )
  }

  return (chapter.lessons ?? []).every(lessonDone)
}

// Check that every lesson is completed
export function hasFinishedGame(progress: CourseProgress | undefined): boolean {
  if (!progress?.chapters?.length) return false

  const hasClueLesson = progress.chapters.some((c) =>
    (c.hasDifficulty ? [] : c.lessons ?? []).some(
      (l) => l.id === BOSS_CLUE_LESSON_ID
    )
  )

  // player did not make it to the end of the game
  if (!hasClueLesson) return false

  return progress.chapters.every(chapterFinished)
}

// Returns true if the key belongs to an account that has finished the game,
// false if not, and throws if the backend can't be reached
export async function verifyCompletion(private_key: string): Promise<boolean> {
  let token: string | undefined

  // First confirm that the key is valid
  try {
    const login = await post({
      url: '/v1/auth/login',
      body: { private_key },
    })
    token = login?.token
  } catch (e) {
    // the backend rejected the key
    if (isTransportError(e)) throw e
    return false
  }

  if (!token) return false

  // Pass the token explicitly because the includeToken method reads from
  // window.localstorage, which doesn't exist server-side.
  // No logout afterwards: backend tokens are stateless JWTs, so there is no
  // session to end, and /v1/auth/logout only clears a cookie
  const headers = { Authorization: `Bearer ${token}` }

  try {
    const res = await get({ url: '/v1/progress', headers })
    return hasFinishedGame(res?.progress_state)
  } catch (e) {
    if (isTransportError(e)) throw e
    return false
  }
}
