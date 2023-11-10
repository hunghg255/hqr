import { Buffer } from 'node:buffer'
import { PNG } from 'pngjs'
import { encode } from './encode'
import type { QrCodeGenerateData, QrCodeGenerateImageOptions } from './types'

function hex2rgba(hex: any) {
  if (typeof hex === 'number')
    hex = hex.toString()

  if (typeof hex !== 'string')
    throw new Error('Color should be defined as hex string')

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8)
    throw new Error(`Invalid hex color: ${hex}`)

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map((c) => {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6)
    hexCode.push('F', 'F')

  const hexValue = Number.parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: `#${hexCode.slice(0, 6).join('')}`,
  }
}

function getOptions(options: any) {
  if (!options)
    options = {}
  if (!options.color)
    options.color = {}

  const margin = typeof options.margin === 'undefined'
    || options.margin === null
    || options.margin < 0
    ? 1
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width,
    scale: width ? 4 : scale,
    margin,
    color: {
      dark: hex2rgba('#000000ff'),
      light: hex2rgba('#ffffffff'),
    },
  }
}

const getScale = function getScale(qrSize: any, opts: any) {
  return opts.width && opts.width >= qrSize + 1 * 2
    ? opts.width / (qrSize + 1 * 2)
    : opts.scale
}

function getImageWidth(qrSize: any, opts: any) {
  const scale = getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

const qrToImageData = function qrToImageData(imgData: any, qrData: any, opts: any) {
  const data = qrData.data

  const scale = getScale(qrData.size, opts)
  const symbolSize = Math.floor((qrData.size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin
          && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)

        pxColor = palette[data[iSrc * qrData.size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}

function renderToBuffer(qrData: any, opts: any, cb: any) {
  const size = getImageWidth(qrData.size, opts)

  const png = new PNG({
    width: size,
    height: size,
  })

  qrToImageData(png.data, qrData, opts)

  const buffer: any = []

  png.on('error', cb)

  png.on('data', (data) => {
    buffer.push(data)
  })

  png.on('end', () => {
    cb(null, Buffer.concat(buffer))
  })

  png.pack()
}

/**
 * Render QR Code Base64 string
 */
export async function renderBase64(
  data: QrCodeGenerateData,
  options: QrCodeGenerateImageOptions = {},
) {
  const result = encode(data)

  const opts = getOptions(options)

  const v: any = []
  result.data.forEach((i) => {
    i.forEach((j) => {
      v.push(j ? 1 : 0)
    })
  })
  result.data = v

  return new Promise((resolve, reject) => {
    renderToBuffer(result, opts, (err: any, output: any) => {
      let url = 'data:image/png;base64,'
      url += output.toString('base64')

      if (err)
        reject(err)

      resolve(url)
    })
  })
}
