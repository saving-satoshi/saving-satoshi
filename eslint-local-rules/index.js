/**
 * @fileoverview Requires that jsx text be wrapped for internationalization by react-intl
 * @author Ben Holt
 */
'use strict'

const DEFAULT_ALLOWLIST = [
  '&lpar;', // (
  '&rpar;', // )
  '&comma;', // ,
  '&period;', // .
  '&amp;', // &
  '&AMP;', // &
  '&plus;', // +
  '&minus;', // -
  '&equals;', // =
  '&ast;', // *
  '&midast;', // *
  '&sol;', // /
  '&num;', // #
  '&percnt;', // %
  '&excl;', // !
  '&quest;', // ?
  '&colon;', // :
  '&lsqb;', // [
  '&lbrack;', // [
  '&rsqb;', // ]
  '&rbrack;', // ]
  '&lcub;', // {
  '&lbrace;', // {
  '&rcub;', // }
  '&rbrace;', // }
  '&lt;', // <
  '&lowbar;',
  '&LT;', // <
  '&gt;', // >
  '&GT;', // >
  '&bull;', // •
  '&bullet;', // •
  '&mdash;', // —
  '&ndash;', // –
  '&nbsp;', // non-breaking space
  '&Tab;',
  '&NewLine;',
  '&verbar;', // |
  '&vert;', // |
  '&VerticalLine;', // |
  '(',
  ')',
  ',',
  '.',
  '&',
  '+',
  '-',
  '=',
  '*',
  '/',
  '#',
  '%',
  '!',
  '?',
  ':',
  '[',
  ']',
  '{',
  '}',
  '<',
  '>',
  '•',
  '—',
  '_',
  ' ',
  '|',
  '…',
]

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
      fixable: null, // or "code" or "whitespace"
      schema: [], // If needed, define your schema here
    },

    create: function (context) {
      return {
        JSXText: (node) => {
          const text = node.raw.trim()

          if (DEFAULT_ALLOWLIST.includes(text)) {
            return
          }

          if (/^\d+\.?$/.test(text) || /^[0-9a-fA-F]+$/.test(text)) {
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
