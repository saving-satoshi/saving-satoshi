import { url } from 'utils'
import { FetchOptions } from 'types'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

export async function get(options: FetchOptions) {
  try {
    const fetchOptions: any = {
      method: 'GET',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    if (options.includeToken) {
      const token = window.localStorage.getItem('saving-satoshi-token')
      if (token) {
        fetchOptions.headers['Authorization'] = `Bearer ${token}`
      }
    }

    const res = await fetch(url(options.url), fetchOptions)
    const json = await res.json()

    if (json.errors) {
      throw json.errors
    }

    return json
  } catch (ex) {
    throw ex
  }
}

export async function post(options: FetchOptions) {
  try {
    const fetchOptions: any = {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    if (options.includeToken) {
      const token = window.localStorage.getItem('saving-satoshi-token')
      if (token) {
        fetchOptions.headers['Authorization'] = `Bearer ${token}`
      }
    }

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body)
    }

    const res = await fetch(url(options.url), fetchOptions)
    const json = await res.json()

    if (json.errors) {
      throw json.errors
    }

    return json
  } catch (ex) {
    throw ex
  }
}

export async function put(options: FetchOptions) {
  try {
    const fetchOptions: any = {
      method: 'PUT',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    if (options.includeToken) {
      const token = window.localStorage.getItem('saving-satoshi-token')
      if (token) {
        fetchOptions.headers['Authorization'] = `Bearer ${token}`
      }
    }

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body)
    }

    const res = await fetch(url(options.url), fetchOptions)
    const json = await res.json()

    if (json.errors) {
      throw json.errors
    }

    return json
  } catch (ex) {
    throw ex
  }
}
