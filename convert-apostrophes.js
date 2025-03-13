const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'i18n/locales/en.ts')
let content = fs.readFileSync(filePath, 'utf8')

// 1. Zuerst ersetzen wir Apostrophe zwischen Buchstaben wie im vorherigen Skript
content = content.replace(/([a-zA-Z])'([a-zA-Z])/g, '$1´$2')

// 2. Dann standardisieren wir die String-Definitionen
// Die Regex sucht nach Mustern wie key: "value", key: 'value' oder key: `value`
content = content.replace(
  /(\w+):\s*(["'`])((?:\\\2|(?!\2).)*?)\2/g,
  function (match, key, quote, value) {
    // Prüfen, ob ein einfaches Anführungszeichen im Wert vorkommt
    if (value.includes("'")) {
      // Wenn ja, verwende Backticks für die String-Definition
      return key + ': `' + value + '`'
    } else {
      // Wenn nicht, verwende einfache Anführungszeichen
      return key + ": '" + value + "'"
    }
  }
)

fs.writeFileSync(filePath, content, 'utf8')
console.log(
  'Anführungszeichen wurden erfolgreich standardisiert und Apostrophe aktualisiert.'
)
