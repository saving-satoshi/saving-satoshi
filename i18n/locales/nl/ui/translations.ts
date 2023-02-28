export const translations = {
  genesis_one: {
    title: 'Genesis',
    heading: 'Vind block 0',
    paragraph_one: `Laten we het allereerste block in de Bitcoin blockchain vinden. Gebruik een <Tooltip content="genesis_one.tooltip_block_explorer" href="https://blockstream.info" className="underline">block explorer</Tooltip> en zoek naar ’0’. Dit zal je naar het block op hoogte 0 nemen. Zoals je kunt zien bevat dit blok maar één transactie.`,
    paragraph_two: `Klap de transactie uit zodat u de details beter kunt bekijken. Aan de linkerzijde is er een input genaamd 'Coinbase'. Daarbinnen bevindt zich een veld met de naam 'ScriptSig'. Kopieer de <Tooltip content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip> versie van de ScriptSig en plak deze hieronder.`,
    tooltip_block_explorer: 'We recommend https://blockstream.info/',
    tooltip_hex:
      'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
    view_block_0: 'Vind Block 0',
    placeholder: 'Plak de HEX versie van de ScriptSig',
  },
  genesis_two: {
    title: 'Genesis',
    heading: 'Laten we dit duidelijk maken',
    waiting_for_input: 'Wachten tot de script wordt uitgevoerd...',
    success:
      'Interessant! Het bericht verwijst naar een nieuwsartikel dat op dezelfde dag dat Satoshi het genesis block heeft gemined, gepubliceerd is. Dit geeft ons een belangrijke aanwijzing over de motivatie van Satoshi voor het maken van Bitcoin. Je kunt er <Link href="https://bitcoinmagazine.com/culture/ten-years-later-reflection-bitcoins-genesis-and-satoshis-timing" className="underline">hier</Link> meer over lezen.',
  },
  transacting_one: {},
  transacting_two: {},
  transacting_three: {},
  done: {
    title: 'Je hebt het gedaan!!!',
    description:
      'Geweldig. Je hebt het eerste hoofdstuk afgerond en veel geleerd over hashes en transacties. Ben je klaar voor meer?',
  },
}
