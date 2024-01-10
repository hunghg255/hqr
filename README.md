<p align="center">
<a href="https://www.npmjs.com/package/hqr" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/streamline:qr-code.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library generate QR code from text
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/hqr" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/hqr" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=hqr" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/hqr" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/hqr/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/hqr/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/hqr" alt="License" /></a>
</p>

Generate QR Code universally, in any runtime, to ANSI, Unicode or SVG. ES module , zero dependency, tree-shakable.

## Install

```bash
# Using npm
npm install hqr

# Using yarn
yarn add hqr

# Using pnpm
pnpm add hqr
```

## Usage CLI
```bash
npx hqr --text "Hello, World!"
```

## Usage

```ts
import {
  encode,
  renderANSI,
  renderSVG,
  renderUnicode,
  renderUnicodeCompact,
  renderBase64
} from 'hqr'

const svg = renderSVG('Hello, World!')

const ansi = renderANSI('https://192.168.1.100:3000', {
  // Error correction level
  ecc: 'L',
  // Border width
  border: 2,
})

// display QR Code in terminal
console.log(ansi)
```

## API

### `encode`

Encode plain text or binary data into QR Code represented by a 2D array.

```ts
import { encode } from 'hqr'

const {
  data, // 2D array of boolean, representing the QR Code
  version, // QR Code version
  size, // size of the QR Code
} = encode(text, options)
```

### `renderANSI`

Render QR Code to [ANSI colored](https://ss64.com/nt/syntax-ansi.html) string.

```ts
import { renderANSI } from 'hqr'

const string = renderANSI(text, options)

console.log(string)
```

### `renderUnicode`

Render QR Code to Unicode string for each pixel. By default it uses `█` and `░` to represent black and white pixels, and it can be customizable.

```ts
import { renderUnicode } from 'hqr'

const string = renderUnicode(text, {
  blackChar: '█',
  whiteChar: '░',
  // ...other options
})
```

### `renderUnicodeCompact`

Render QR Code with two rows into one line with unicode `▀`, `▄`, `█`, ` `. It is useful when you want to display QR Code in terminal with limited height.

```ts
import { renderUnicodeCompact } from 'hqr'

const string = renderUnicodeCompact(text, options)

console.log(string)
```

### `renderSVG`

Render QR Code to SVG string.

```ts
import { renderSVG } from 'hqr'

const string = renderSVG(text, options)
```

### `renderBase64`

Render QR Code to SVG string.

```ts
import { renderBase64 } from 'hqr'

const string = renderBase64(text, options)
```

## Credits

QR Code generation algorithm is modified from [nayuki/QR-Code-generator](https://github.com/nayuki/QR-Code-generator/blob/master/typescript-javascript/qrcodegen.ts) by Project Nayuki.

CLI renders are inspired by [qrcode-terminal](https://github.com/gtanner/qrcode-terminal).

## License

[MIT](./LICENSE) License


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/hqr?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/hqr
[npm-downloads-src]: https://img.shields.io/npm/dm/hqr?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/hqr
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/hqr/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/hqr
[bundle-src]: https://img.shields.io/bundlephobia/minzip/hqr?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=hqr
[license-src]: https://img.shields.io/github/license/unjs/hqr.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/unjs/hqr/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/hqr
