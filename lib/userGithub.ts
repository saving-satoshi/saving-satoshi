// lib/github.ts

const GITHUB_API = 'https://api.github.com'

export interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
}

/**
 * 1. Safe Base64 Encoder
 * Handles UTF-8 characters (emojis, etc.) which standard btoa() fails on.
 */
function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

/**
 * 2. Smart Repo Parser
 * Handles: "contents", "user/contents", "https://github.com/user/contents"
 */
function parseRepoInput(username: string, input: string) {
  let clean = input.trim()

  // Remove URL prefix if present
  clean = clean.replace(/^https?:\/\/github\.com\//, '')
  // Remove .git suffix if present
  clean = clean.replace(/\.git$/, '')
  // Remove leading/trailing slashes
  clean = clean.replace(/^\/+|\/+$/g, '')

  const parts = clean.split('/')

  if (parts.length >= 2) {
    return { owner: parts[0], repo: parts[1] }
  }

  // Default to authenticated user if only repo name is given
  return { owner: username, repo: clean }
}

export async function verifyToken(token: string): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${GITHUB_API}/user`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })
    if (!res.ok) return null
    return await res.json()
  } catch (e) {
    console.error('GitHub Verification Failed', e)
    return null
  }
}

export async function exportCode(
  token: string,
  username: string,
  repoInput: string | undefined,
  filename: string,
  content: string,
  description: string
) {
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  }

  // --- OPTION A: Export to Repository ---
  if (repoInput) {
    const { owner, repo } = parseRepoInput(username, repoInput)
    const path = `solutions/${filename}`
    const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`

    // 1. Get SHA (if file exists)
    let sha: string | undefined
    try {
      const check = await fetch(url, { headers })
      if (check.ok) {
        const data = await check.json()
        sha = data.sha
      }
    } catch {}

    // 2. Write File
    const body = JSON.stringify({
      message: `Add solution: ${filename}`,
      content: utf8_to_b64(content), // Safe encoding
      sha,
    })

    const res = await fetch(url, { method: 'PUT', headers, body })

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}))

      if (res.status === 404) {
        throw new Error(
          `Repository "${owner}/${repo}" not found.\nEnsure it exists and your token has permissions.`
        )
      }
      if (res.status === 403 || res.status === 401) {
        throw new Error(
          `Permission denied for "${owner}/${repo}".\nCheck if your Token has 'repo' scope.`
        )
      }
      if (res.status === 409) {
        throw new Error('Conflict error. Try again in a few seconds.')
      }

      throw new Error(`GitHub Error: ${errData.message || res.statusText}`)
    }

    const data = await res.json()
    return data.content?.html_url || data.html_url
  }

  // --- OPTION B: Export to Gist ---
  else {
    const body = JSON.stringify({
      description,
      public: true,
      files: {
        [filename]: { content }, // Gist API handles plain text
      },
    })

    const res = await fetch(`${GITHUB_API}/gists`, {
      method: 'POST',
      headers,
      body,
    })
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}))
      throw new Error(
        `Failed to create Gist: ${errData.message || res.statusText}`
      )
    }

    const data = await res.json()
    return data.html_url
  }
}
