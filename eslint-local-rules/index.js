/**
 * @fileoverview Requires that jsx text be wrapped for internationalization by react-intl
 * @author Ben Holt
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  'no-bare-strings': {
    meta: {
      type: 'problem',
      docs: {
        description:
          'Requires that jsx text be wrapped for internationalization by react-intl',
        category: 'Best Practices',
        recommended: true,
      },
      fixable: null,
      schema: [],
    },

    create: function (context) {
      return {
        JSXText: (node) => {
          const text = node.raw.trim()

          // Skip strings that do not contain translateable strings
          if (
            text.match(/^(&#[0-9a-zA-Z]+;)+$/) ||
            text.match(/^\d+\.$/) ||
            text.match(/^[0-9a-fA-F\s]+$/) ||
            text.match(/^&[a-zA-Z]+;\d+$/) ||
            text.match(/^[a-zA-Z]\^\d+ ?= ?[a-zA-Z]\^\d+ ?\+ ?\d+$/) ||
            text.match(/^[-!#$%&()*+,./:;<=>?@[\]^_`{|}~…•— ]$/)
          ) {
            return
          }

          if (text.match(/\w+/)) {
            let displayText = text
            if (displayText.length > 25) {
              displayText = `${displayText.substring(0, 26)}…`
            }
            context.report({
              node,
              message: `Bare string: "${displayText}"`,
            })
          }
        },
      }
    },
  },
}
