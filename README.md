# hqr

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

<!-- [![Codecov][codecov-src]][codecov-href] -->

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

## Usage

```ts
import {
  encode,
  renderANSI,
  renderSVG,
  renderUnicode,
  renderUnicodeCompact,
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
