import { cac } from 'unprompts'
import { cyan, green, underline, white } from 'kolorist'
import boxen from 'boxen'
import { name, version } from '../package.json'
import { renderUnicodeCompact } from './render'
import { renderBase64 } from './base64'

const cli = cac(name || 'hqr')

cli
  .version(version)
  .option('--text <text>', 'Text to print')
  .help()

cli.command('').action(async (args) => {
  if (!args.text) {
    console.log(boxen(
      cyan('Usage: npx hqr --text <text>'),
      {
        title: green(underline('Please enter text')),
        titleAlignment: 'left',
      },
    ))

    process.exit(1)
  }

  const qr = renderUnicodeCompact(args.text)
  const qrUri = await renderBase64(args.text)

  const qrTunnelWhite = qr
    .split('\n')
    .map(it => white(it))
    .join('\n')

  console.log(boxen(`\n${qrTunnelWhite}`, { title: green(underline('QR Code')), titleAlignment: 'left' }))
  console.log(boxen(`\n${qrUri}`, { title: green(underline('Data URI')), titleAlignment: 'left', borderStyle: 'none' }))
})

cli.parse()
