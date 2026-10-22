import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { get, post, put } from 'utils'

describe('Fetch Wrappers Tests', () => {
  let mockFetch: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockFetch = vi.fn()
    vi.stubGlobal('fetch', mockFetch)
    vi.stubEnv('NEXT_PUBLIC_API_ENDPOINT', 'https://api.savingsatoshi.com')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  describe('200 Success Case', () => {
    it('should return the parsed JSON on a successful response', async () => {
      const mockData = { success: true, data: 'satoshi-saved' }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockData,
      })

      const result = await get({ url: '/success' })

      expect(result).toEqual(mockData)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.savingsatoshi.com/success',
        expect.objectContaining({
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
      )
    })
  })

  describe('Error Handling Cases', () => {
    it('should handle a server error with a non JSON body without throwing a SyntaxError', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        json: async () => {
          throw new SyntaxError('syntax error')
        },
      })

      await expect(get({ url: '/error' })).rejects.toEqual([
        { message: 'Internal Server Error', status: 500 },
      ])
    })

    it('should throw fallback status error when a !ok response has JSON but no errors field', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        json: async () => ({ message: 'Endpoint not found' }),
      })

      await expect(get({ url: '/error' })).rejects.toEqual([
        { message: 'Not Found', status: 404 },
      ])
    })

    it('should throw backend-provided errors unchanged when a !ok response includes an errors array', async () => {
      const customErrors = [
        { field: 'email', message: 'email is already taken' },
      ]

      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        json: async () => ({ errors: customErrors }),
      })

      await expect(
        post({ url: '/signup', body: { email: 'test@test.com' } })
      ).rejects.toEqual(customErrors)
    })
  })

  describe('Case with bodyData', () => {
    it('should correctly execute a POST request with serialized body', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => ({ id: 1 }),
      })

      const bodyData = { answer: 'satoshis' }
      await post({ url: '/submit', body: bodyData })

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.savingsatoshi.com/submit',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(bodyData),
          headers: { 'Content-Type': 'application/json' },
        })
      )
    })
  })
})
