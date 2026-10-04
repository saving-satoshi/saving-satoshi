import { url } from 'utils'
import { FetchOptions } from 'types'
import { SAVING_SATOSHI_TOKEN } from 'config/keys'
import { toast } from 'state/ToastFunctions'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

function handleErrors(errors: any) {
  if (Array.isArray(errors)) {
    errors.forEach((err) => {
      const message =
        typeof err === 'string' ? err : err.message || 'An error occurred'
      toast.error(message)
    })
  } else if (typeof errors === 'string') {
    toast.error(errors)
  } else if (errors && typeof errors === 'object') {
    toast.error(errors.message || 'An error occurred')
  } else {
    toast.error('An unexpected error occurred')
  }
}

async function request(method: string, options: FetchOptions) {
  try {
    const fetchOptions: any = {
      method,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    if (options.includeToken) {
      const token = window.localStorage.getItem(SAVING_SATOSHI_TOKEN)
      if (token) {
        fetchOptions.headers['Authorization'] = `Bearer ${token}`
      }
    }

    if (options.body && method !== 'GET') {
      fetchOptions.body = JSON.stringify(options.body)
    }

    const res = await fetch(url(options.url), fetchOptions)

    if (!res.ok) {
      const errorText = await res.text()
      try {
        const errorJson = JSON.parse(errorText)
        handleErrors(errorJson.errors || errorJson.error || res.statusText)
      } catch {
        handleErrors(res.statusText || `Server error: ${res.status}`)
      }
      return null
    }

    const json = await res.json()

    if (json.errors) {
      handleErrors(json.errors)
      return null
    }

    return json
  } catch (ex) {
    if (ex instanceof TypeError && ex.message === 'Failed to fetch') {
      toast.error('Network error: please check your connection')
    } else {
      console.error(ex)
    }
    throw ex
  }
}

export async function get(options: FetchOptions) {
  return request('GET', options)
}

export async function post(options: FetchOptions) {
  return request('POST', options)
}

export async function put(options: FetchOptions) {
  return request('PUT', options)
}
