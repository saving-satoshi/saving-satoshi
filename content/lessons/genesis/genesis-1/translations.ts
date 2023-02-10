export const translations = {
  genesis_one: {
    en: {
      title: 'Genesis',
      heading: 'Find block 0',
      paragraph_one: `Let's find the very first block in the Bitcoin blockchain. Go to a <Tooltip content="genesis_one.tooltip_block_explorer" href="https://blockstream.info" className="underline">block explorer</Tooltip> and search for ’0’. This will take you to the block at height 0. As you can see, this block only contains one transaction.`,
      paragraph_two: `Open up the transaction so you can take a closer look at the details. On the left is an input called 'Coinbase'. Inside that is a field called 'ScriptSig'. Find the <Tooltip content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip> representation and paste it below.`,
      tooltip_block_explorer: 'We recommend https://blockstream.info/',
      tooltip_hex:
        'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
      view_block_0: 'View Block 0',
      placeholder: 'Paste the ScriptSig HEX Representation',
    },

    nl: {
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
  },
}
