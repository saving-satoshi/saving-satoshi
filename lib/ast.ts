const acorn = require('acorn')

export function findFunction(node, name) {
  if (node.type === 'FunctionDeclaration' && node.id.name === name) {
    return node
  }
  for (const key in node) {
    if (typeof node[key] === 'object' && node[key] !== null) {
      const result = findFunction(node[key], name)
      if (result) {
        return result
      }
    }
  }
  return null
}

export function findReturnValue(node) {
  if (node.type === 'ReturnStatement') {
    return node
  }

  for (const key in node) {
    if (typeof node[key] === 'object' && node[key] !== null) {
      const result = findReturnValue(node[key])
      if (result) {
        return result
      }
    }
  }
  return null
}

export function findIdentifier(node, name) {
  if (node.type === 'Identifier' && node.name === name) {
    return node
  }

  for (const key in node) {
    if (typeof node[key] === 'object' && node[key] !== null) {
      const result = findIdentifier(node[key], name)
      if (result) {
        return result
      }
    }
  }
  return null
}

export function parse(input) {
  return acorn.parse(input, { ecmaVersion: 2020 })
}
