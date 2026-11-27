import { NextRequest } from 'next/server'
import {
  hasFinishedGame,
  isBossClueActive,
  verifyCompletion,
} from 'lib/bossClue'
import {
  DifficultyLevel,
  defaultProgressState,
} from 'state/progress/defaultProgress'
import { mergeProgressState } from 'state/progress/utils'
import {
  ChapterInState,
  ChapterWithDifficulties,
  ChapterWithoutDifficulties,
  CourseProgress,
  LessonInState,
} from 'types'
import { get, post } from 'utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// The backend helpers are mocked so no real network calls are made
vi.mock('utils', async (importOriginal) => ({
  ...(await importOriginal<typeof import('utils')>()),
  get: vi.fn(),
  post: vi.fn(),
}))
const mockGet = vi.mocked(get)
const mockPost = vi.mocked(post)

const VALID_KEY = 'a'.repeat(64)

// --- progress builders ---

const freshProgress = (): CourseProgress =>
  structuredClone(defaultProgressState)

const chapter = (p: CourseProgress, id: number) =>
  p.chapters.find((c) => c.id === id) as ChapterInState

const regularChapter = (p: CourseProgress, id: number) =>
  chapter(p, id) as ChapterWithoutDifficulties

const difficultyChapter = (p: CourseProgress) =>
  p.chapters.find((c) => c.hasDifficulty) as ChapterWithDifficulties

const findLesson = (p: CourseProgress, lessonId: string): LessonInState => {
  for (const c of p.chapters) {
    const lessons = c.hasDifficulty
      ? c.difficulties.flatMap((d) => d.lessons)
      : c.lessons
    const lesson = lessons.find((l) => l.id === lessonId)
    if (lesson) return lesson
  }
  throw new Error(`lesson ${lessonId} not found`)
}

/**
 * A player who has finished every lesson and is now on the clue page.
 * Difficulty chapters get every track completed unless `onlyTrack` is given.
 */
function finishedProgress(onlyTrack?: DifficultyLevel): CourseProgress {
  const p = freshProgress()
  for (const c of p.chapters) {
    if (c.hasDifficulty) {
      for (const d of c.difficulties) {
        if (!onlyTrack || d.level === onlyTrack) {
          d.lessons.forEach((l) => (l.completed = true))
        }
      }
    } else {
      c.lessons.forEach((l) => (l.completed = l.id !== 'CH10OUT6'))
    }
    c.completed = true
  }
  return p
}

/** A player who finished the game before the TABConf page (CH4TCC1) existed */
function preTabconfProgress(): CourseProgress {
  const p = finishedProgress()
  const ch4 = regularChapter(p, 4)
  ch4.lessons = ch4.lessons.filter((l) => l.id !== 'CH4TCC1')
  return p
}

describe('isBossClueActive', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('is on when set to "true"', () => {
    expect(isBossClueActive('true')).toBe(true)
  })

  it.each([
    ['unset', undefined],
    ['empty', ''],
    ['"false"', 'false'],
    ['"TRUE" (wrong case)', 'TRUE'],
    ['"1"', '1'],
    ['" true" (stray space)', ' true'],
  ])('is off when %s', (_, value) => {
    expect(isBossClueActive(value)).toBe(false)
  })

  it('reads BOSS_CLUE_ENABLED from the environment by default', () => {
    vi.stubEnv('BOSS_CLUE_ENABLED', 'true')
    expect(isBossClueActive()).toBe(true)

    vi.stubEnv('BOSS_CLUE_ENABLED', '')
    expect(isBossClueActive()).toBe(false)
  })
})

describe('hasFinishedGame', () => {
  describe('players who finished the game', () => {
    it('accepts a player who completed every lesson', () => {
      expect(hasFinishedGame(finishedProgress())).toBe(true)
    })

    it('does not require the clue page itself (CH10OUT6) to be complete', () => {
      const p = finishedProgress()
      expect(findLesson(p, 'CH10OUT6').completed).toBe(false)
      expect(hasFinishedGame(p)).toBe(true)
    })

    it('accepts a player who only finished the Normal track of chapter 6', () => {
      const p = finishedProgress(DifficultyLevel.NORMAL)
      expect(hasFinishedGame(p)).toBe(true)
    })

    it('accepts a player who finished chapter 6 on Normal, then flipped the toggle to Hard', () => {
      const p = finishedProgress(DifficultyLevel.NORMAL)
      difficultyChapter(p).selectedDifficulty = DifficultyLevel.HARD
      expect(hasFinishedGame(p)).toBe(true)
    })

    it('accepts a player who only finished the Hard track of chapter 6', () => {
      const p = finishedProgress(DifficultyLevel.HARD)
      expect(hasFinishedGame(p)).toBe(true)
    })
  })

  describe('the TABConf page (CH4TCC1)', () => {
    it('does not require CH4TCC1 to be complete', () => {
      const p = finishedProgress()
      findLesson(p, 'CH4TCC1').completed = false
      expect(hasFinishedGame(p)).toBe(true)
    })

    it('accepts a pre-TABConf finisher whose saved progress has no CH4TCC1', () => {
      expect(hasFinishedGame(preTabconfProgress())).toBe(true)
    })

    it('accepts a pre-TABConf finisher after logging in merges CH4TCC1 in as incomplete', () => {
      const merged = mergeProgressState(
        defaultProgressState,
        preTabconfProgress()
      )
      expect(findLesson(merged, 'CH4TCC1').completed).toBe(false)
      expect(hasFinishedGame(merged)).toBe(true)
    })
  })

  describe('players who did not finish the game', () => {
    it('rejects a fresh account', () => {
      expect(hasFinishedGame(freshProgress())).toBe(false)
    })

    it('rejects a player missing only the lesson before the clue page (CH10OUT5)', () => {
      const p = finishedProgress()
      findLesson(p, 'CH10OUT5').completed = false
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects a player missing a single lesson in an early chapter', () => {
      const p = finishedProgress()
      regularChapter(p, 3).lessons[1].completed = false
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects a player who completed some lessons in every chapter, but not all', () => {
      const p = freshProgress()
      const half = (lessons: LessonInState[]) =>
        lessons.forEach((l, i) => (l.completed = i < lessons.length / 2))
      for (const c of p.chapters) {
        if (c.hasDifficulty) c.difficulties.forEach((d) => half(d.lessons))
        else half(c.lessons)
      }
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects chapter 6 completed by mixing Normal and Hard tracks', () => {
      const p = finishedProgress()
      const [normal, hard] = difficultyChapter(p).difficulties
      normal.lessons.forEach((l, i) => (l.completed = i < 5))
      hard.lessons.forEach((l, i) => (l.completed = i >= 5))
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects chapter 6 with no track fully complete', () => {
      const p = finishedProgress()
      difficultyChapter(p).difficulties.forEach(
        (d) => (d.lessons[0].completed = false)
      )
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('ignores chapter-level completed flags (they can be set without finishing)', () => {
      const p = freshProgress()
      p.chapters.forEach((c) => {
        c.completed = true
        if (c.hasDifficulty) c.difficulties.forEach((d) => (d.completed = true))
      })
      expect(hasFinishedGame(p)).toBe(false)
    })
  })

  describe('malformed or partial progress', () => {
    it('rejects truncated progress containing only a completed chapter 1', () => {
      const p = finishedProgress()
      p.chapters = [chapter(p, 1)]
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects progress where chapter 10 is missing', () => {
      const p = finishedProgress()
      p.chapters = p.chapters.filter((c) => c.id !== 10)
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects progress with an empty chapters list', () => {
      expect(
        hasFinishedGame({ chapters: [], currentChapter: 1, currentLesson: '' })
      ).toBe(false)
    })

    it('rejects progress with a chapter that has no lessons array', () => {
      expect(
        hasFinishedGame({ chapters: [{ id: 1 }] } as unknown as CourseProgress)
      ).toBe(false)
    })

    it('rejects a difficulty chapter whose tracks have no lessons', () => {
      const p = finishedProgress()
      difficultyChapter(p).difficulties.forEach((d) => (d.lessons = []))
      expect(hasFinishedGame(p)).toBe(false)
    })

    it('rejects undefined progress', () => {
      expect(hasFinishedGame(undefined)).toBe(false)
    })
  })
})

describe('verifyCompletion', () => {
  beforeEach(() => {
    mockGet.mockReset()
    mockPost.mockReset()
  })

  // Login returns a token
  const loginSucceeds = () =>
    mockPost.mockImplementation(async ({ url }) =>
      url === '/v1/auth/login' ? { token: 'session-token' } : {}
    )

  it('returns true for a player who finished the game', async () => {
    loginSucceeds()
    mockGet.mockResolvedValue({ progress_state: finishedProgress() })

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(true)
  })

  it('logs in with the private key', async () => {
    loginSucceeds()
    mockGet.mockResolvedValue({ progress_state: finishedProgress() })

    await verifyCompletion(VALID_KEY)

    expect(mockPost).toHaveBeenCalledWith({
      url: '/v1/auth/login',
      body: { private_key: VALID_KEY },
    })
  })

  it('reads progress with the session token passed explicitly (no localStorage)', async () => {
    loginSucceeds()
    mockGet.mockResolvedValue({ progress_state: finishedProgress() })

    await verifyCompletion(VALID_KEY)

    expect(mockGet).toHaveBeenCalledWith({
      url: '/v1/progress',
      headers: { Authorization: 'Bearer session-token' },
    })
    expect(mockGet.mock.calls[0][0]).not.toHaveProperty('includeToken')
  })

  it('returns false for a player who has not finished the game', async () => {
    loginSucceeds()
    mockGet.mockResolvedValue({ progress_state: freshProgress() })

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(false)
  })

  it('returns false when the progress response has no progress_state', async () => {
    loginSucceeds()
    mockGet.mockResolvedValue({})

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(false)
  })

  it('returns false when the backend rejects the key', async () => {
    mockPost.mockRejectedValue([{ message: 'invalid credentials' }])

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(false)
    expect(mockGet).not.toHaveBeenCalled()
  })

  it('returns false when login succeeds but returns no token', async () => {
    mockPost.mockResolvedValue({})

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(false)
    expect(mockGet).not.toHaveBeenCalled()
  })

  it('returns false when the backend returns an error reading progress', async () => {
    loginSucceeds()
    mockGet.mockRejectedValue([{ message: 'not found' }])

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(false)
  })

  it('throws when the backend cannot be reached during login', async () => {
    mockPost.mockRejectedValue(new TypeError('fetch failed'))

    await expect(verifyCompletion(VALID_KEY)).rejects.toThrow('fetch failed')
  })

  it('throws when the progress response is not JSON', async () => {
    loginSucceeds()
    mockGet.mockRejectedValue(new SyntaxError('Unexpected token <'))

    await expect(verifyCompletion(VALID_KEY)).rejects.toThrow(SyntaxError)
  })

  it('only calls login and progress (no logout)', async () => {
    loginSucceeds()
    mockGet.mockResolvedValue({ progress_state: finishedProgress() })

    await verifyCompletion(VALID_KEY)

    expect(mockPost).toHaveBeenCalledTimes(1)
    expect(mockPost.mock.calls[0][0].url).toBe('/v1/auth/login')
    expect(mockGet).toHaveBeenCalledTimes(1)
  })

  it('returns false when the account has no progress_state yet', async () => {
    // New accounts start with progress_state = null until their first save
    loginSucceeds()
    mockGet.mockResolvedValue({ progress: 'CH1INT1', progress_state: null })

    await expect(verifyCompletion(VALID_KEY)).resolves.toBe(false)
  })
})

describe('POST /api/boss-clue', () => {
  const DIOGENES_URL = 'https://diogenes.test/generate-invite'
  const mockFetch = vi.fn()

  // The route reads its env vars when the module loads, so stub them first
  // and import a fresh copy of the route for each test
  async function loadRoute(
    env = { endpoint: DIOGENES_URL, auth: 'secret' },
    enabled = 'true'
  ) {
    vi.stubEnv('DIOGENES_API_ENDPOINT', env.endpoint)
    vi.stubEnv('DIOGENES_AUTH', env.auth)
    vi.stubEnv('BOSS_CLUE_ENABLED', enabled)
    vi.resetModules()
    return import('app/api/boss-clue/route')
  }

  const request = (body: unknown) =>
    new NextRequest('http://localhost/api/boss-clue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    })

  const finishedPlayer = () => {
    mockPost.mockImplementation(async ({ url }) =>
      url === '/v1/auth/login' ? { token: 'session-token' } : {}
    )
    mockGet.mockResolvedValue({ progress_state: finishedProgress() })
  }

  const diogenesReturns = (status: number, body: unknown) =>
    mockFetch.mockResolvedValue(
      new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' },
      })
    )

  beforeEach(() => {
    mockGet.mockReset()
    mockPost.mockReset()
    mockFetch.mockReset()
    vi.stubGlobal('fetch', mockFetch)
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('opts out of Next fetch caching', async () => {
    const { dynamic } = await loadRoute()
    expect(dynamic).toBe('force-dynamic')
  })

  it('returns the clue for a player who finished the game', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    diogenesReturns(200, { data: 'deadbeef' })

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ data: 'deadbeef' })
  })

  it('sends the key to Diogenes with the server-side auth token', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    diogenesReturns(200, { data: 'deadbeef' })

    await POST(request({ private_key: VALID_KEY }))

    expect(mockFetch).toHaveBeenCalledWith(DIOGENES_URL, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer secret',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ private_key: VALID_KEY }),
      cache: 'no-store',
    })
  })

  it('accepts an uppercase hex key', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    diogenesReturns(200, { data: 'deadbeef' })

    const res = await POST(request({ private_key: 'A'.repeat(64) }))

    expect(res.status).toBe(200)
  })

  it.each([
    ['endpoint', { endpoint: '', auth: 'secret' }],
    ['auth token', { endpoint: DIOGENES_URL, auth: '' }],
  ])('returns 500 when the Diogenes %s is not configured', async (_, env) => {
    const { POST } = await loadRoute(env)

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(500)
    expect(mockPost).not.toHaveBeenCalled()
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it.each([
    ['turned off', 'false'],
    ['not set', ''],
  ])(
    'returns 404 and calls nothing when the switch is %s',
    async (_, enabled) => {
      const { POST } = await loadRoute(undefined, enabled)
      finishedPlayer()

      const res = await POST(request({ private_key: VALID_KEY }))

      expect(res.status).toBe(404)
      expect(mockPost).not.toHaveBeenCalled()
      expect(mockFetch).not.toHaveBeenCalled()
    }
  )

  it('checks the on/off switch before the Diogenes config (404, not 500)', async () => {
    const { POST } = await loadRoute({ endpoint: '', auth: '' }, '')

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(404)
  })

  it('returns 400 when the body is not JSON', async () => {
    const { POST } = await loadRoute()

    const res = await POST(request('not json'))

    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({ error: 'invalid body' })
  })

  it.each([
    ['missing', {}],
    ['not a string', { private_key: 12345 }],
    ['too short', { private_key: 'a'.repeat(63) }],
    ['too long', { private_key: 'a'.repeat(65) }],
    ['not hex', { private_key: 'g'.repeat(64) }],
    ['0x-prefixed', { private_key: '0x' + 'a'.repeat(64) }],
  ])('returns 400 when the private key is %s', async (_, body) => {
    const { POST } = await loadRoute()

    const res = await POST(request(body))

    expect(res.status).toBe(400)
    await expect(res.json()).resolves.toEqual({ error: 'invalid private_key' })
    expect(mockPost).not.toHaveBeenCalled()
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('returns 403 and does not call Diogenes when the game is not finished', async () => {
    const { POST } = await loadRoute()
    mockPost.mockImplementation(async ({ url }) =>
      url === '/v1/auth/login' ? { token: 'session-token' } : {}
    )
    mockGet.mockResolvedValue({ progress_state: freshProgress() })

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(403)
    await expect(res.json()).resolves.toEqual({ error: 'game not completed' })
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('returns 403 when the backend rejects the key', async () => {
    const { POST } = await loadRoute()
    mockPost.mockRejectedValue([{ message: 'invalid credentials' }])

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(403)
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('returns 502 when the backend cannot be reached', async () => {
    const { POST } = await loadRoute()
    mockPost.mockRejectedValue(new TypeError('fetch failed'))

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(502)
    await expect(res.json()).resolves.toEqual({ error: 'upstream unavailable' })
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('returns 502 without passing on details when Diogenes returns an error', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    diogenesReturns(401, { error: 'bad token', detail: 'internal info' })

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(502)
    await expect(res.json()).resolves.toEqual({ error: 'upstream error' })
  })

  it('returns 502 when Diogenes cannot be reached', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    mockFetch.mockRejectedValue(new TypeError('fetch failed'))

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(502)
    await expect(res.json()).resolves.toEqual({ error: 'upstream unavailable' })
  })

  it('returns 502 when Diogenes returns a non-JSON response', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    mockFetch.mockResolvedValue(
      new Response('<html>oops</html>', { status: 200 })
    )

    const res = await POST(request({ private_key: VALID_KEY }))

    expect(res.status).toBe(502)
  })

  it('never logs the private key', async () => {
    const { POST } = await loadRoute()
    finishedPlayer()
    mockFetch.mockRejectedValue(new TypeError('fetch failed'))

    await POST(request({ private_key: VALID_KEY }))

    const logged = JSON.stringify(vi.mocked(console.error).mock.calls)
    expect(logged).not.toContain(VALID_KEY)
  })
})
