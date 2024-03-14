export enum Language {
  Python,
  JavaScript,
  Cpp,
  Unknown,
}

export function detectLanguage(code: string): Language {
  if (
    code.includes('def ') ||
    code.includes('import ') ||
    code.match(/print\(.+\)/)
  ) {
    return Language.Python
  } else if (
    code.includes('function ') ||
    code.includes('const ') ||
    code.includes('let ') ||
    code.match(/console\.log\(.+\)/)
  ) {
    return Language.JavaScript
  } else if (
    code.includes('#include') ||
    code.includes('using namespace ') ||
    code.includes('int ')
  ) {
    return Language.Cpp
  }
  return Language.Unknown
}

export function organizeJavaScriptRequires(code: string): string {
  const requireLines = new Set<string>()
  const otherLines: string[] = []

  code.split('\n').forEach((line) => {
    if (
      line.trim().startsWith('const ') ||
      line.trim().startsWith('var ') ||
      line.trim().startsWith('let ')
    ) {
      if (line.includes('= require(')) {
        requireLines.add(line)
      } else {
        otherLines.push(line)
      }
    } else {
      otherLines.push(line)
    }
  })

  return Array.from(requireLines).join('\n') + '\n' + otherLines.join('\n')
}

export function organizePythonImports(code: string): string {
  const importLines = new Set<string>()
  const otherLines: string[] = []

  code.split('\n').forEach((line) => {
    if (line.trim().startsWith('import ') || line.trim().startsWith('from ')) {
      importLines.add(line)
    } else {
      otherLines.push(line)
    }
  })

  return Array.from(importLines).join('\n') + '\n' + otherLines.join('\n')
}

export function organizeImports(code: string): string {
  const language = detectLanguage(code)

  switch (language) {
    case Language.JavaScript:
      return organizeJavaScriptRequires(code)
    case Language.Python:
      return organizePythonImports(code)
    default:
      throw new Error('Unsupported language detected.')
  }
}

export function getLanguageString(language: Language): string {
  switch (language) {
    case Language.Python:
      return 'python'
    case Language.JavaScript:
      return 'javascript'
    case Language.Cpp:
      return 'cpp'
    case Language.Unknown:
    default:
      return 'unknown'
  }
}

export function getLanguageFromString(languageString: string): Language {
  switch (languageString.toLowerCase()) {
    case 'python':
      return Language.Python
    case 'javascript':
      return Language.JavaScript
    case 'cpp':
      return Language.Cpp
    default:
      return Language.Unknown
  }
}
