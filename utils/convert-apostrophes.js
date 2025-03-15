/**
 * # String Formatting Script
 *
 * ## Overview
 *
 * This script standardizes string formatting in the English localization file (en.ts).
 * It ensures consistent usage of quotes throughout the file by converting all string
 * definitions to use backticks.
 *
 * ## What the Script Does
 *
 * The script performs the following operations:
 *
 * 1. Reads the content of the en.ts file
 * 2. Uses regular expressions to identify all string values in key-value pairs
 * 3. Replaces any special apostrophes (´) within string values with standard single quotes (')
 * 4. Wraps all string values uniformly with backticks (`) instead of using a mix of different quote styles
 * 5. Writes the modified content back to the file
 *
 * ## How It Works
 *
 * ### Regular Expression Pattern
 *
 * The core of the script is this regular expression:
 * /(\w+):\s*(["'`])((?:\\[\s\S]|(?!\2)[\s\S])*?)\2/g
 *
 * This pattern:
 * - (\w+): - Captures the property key
 * - \s*(["'`]) - Matches and captures the opening quote character (", ', or `)
 * - ((?:\\[\s\S]|(?!\2)[\s\S])*?) - Captures the string value, handling escaped characters
 * - \2 - Ensures the closing quote matches the opening quote
 *
 * ### Benefits
 *
 * This standardization:
 * 1. Creates a consistent style throughout the localization file
 * 2. Eliminates issues with escaping quotes inside strings
 * 3. Makes the code more maintainable
 * 4. Facilitates easier diff comparisons in version control
 * 5. Prevents potential syntax errors from inconsistent quote usage
 */

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'i18n/locales/en.ts')
let content = fs.readFileSync(filePath, 'utf8')

// Standardize string definitions with backticks for all values
content = content.replace(
  /(\w+):\s*(["'`])((?:\\[\s\S]|(?!\2)[\s\S])*?)\2/g,
  function (match, key, quote, value) {
    // Replace any backticks within the value with single quotes
    let processedValue = value.replace(/’/g, "'")

    // Use backticks for all string definitions
    return key + ': `' + processedValue + '`'
  }
)

fs.writeFileSync(filePath, content, 'utf8')
console.log(
  'All values have been standardized with backticks and internal backticks have been replaced.'
)
