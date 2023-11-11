import { describe, expect, it } from 'vitest'
import { renderUnicode, renderUnicodeCompact } from '../src/render'
import { encode, renderSVG } from '../src'

describe('should', () => {
  it('generate', () => {
    const { data, types } = encode('qrcode', {
      minVersion: 2,
    })

    expect(data.map(i => i.map(j => j ? 1 : ' ').join(' ')))
      .toMatchInlineSnapshot(`
        [
          "                                                     ",
          "  1 1 1 1 1 1 1     1           1 1   1 1 1 1 1 1 1  ",
          "  1           1   1 1   1 1           1           1  ",
          "  1   1 1 1   1     1 1 1     1   1   1   1 1 1   1  ",
          "  1   1 1 1   1   1 1   1         1   1   1 1 1   1  ",
          "  1   1 1 1   1       1   1 1 1 1     1   1 1 1   1  ",
          "  1           1   1   1     1 1 1 1   1           1  ",
          "  1 1 1 1 1 1 1   1   1   1   1   1   1 1 1 1 1 1 1  ",
          "                          1 1   1                    ",
          "  1 1 1 1 1   1 1 1 1 1   1   1 1   1   1   1   1    ",
          "  1   1   1 1       1           1 1   1 1 1 1        ",
          "    1     1 1 1     1   1 1           1   1   1 1 1  ",
          "            1   1   1 1 1     1   1 1 1 1 1          ",
          "    1   1     1   1 1   1         1   1 1   1 1   1  ",
          "  1       1 1     1   1   1 1 1 1   1 1       1 1    ",
          "  1   1 1 1   1   1 1 1     1 1 1 1 1   1     1 1 1  ",
          "  1   1     1     1       1 1   1               1 1  ",
          "  1   1 1     1 1 1 1     1   1 1 1 1 1 1 1 1 1   1  ",
          "                  1 1 1         1 1       1     1    ",
          "  1 1 1 1 1 1 1   1   1 1 1     1 1   1   1 1   1 1  ",
          "  1           1     1 1 1     1   1       1          ",
          "  1   1 1 1   1   1     1         1 1 1 1 1 1 1 1 1  ",
          "  1   1 1 1   1   1       1 1 1 1 1 1             1  ",
          "  1   1 1 1   1   1   1     1 1   1   1 1 1       1  ",
          "  1           1   1 1     1 1         1   1 1     1  ",
          "  1 1 1 1 1 1 1   1   1   1   1 1   1 1 1 1 1   1 1  ",
          "                                                     ",
        ]
      `)

    expect(types.map(i => i.map(j => j < 1 ? ' ' : j).join(' ')))
      .toMatchInlineSnapshot(`
        [
          "                                                     ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 2 2 2 2 2 2 2 2  ",
          "  2 2 2 2 2 2 2 2 1                 2 2 2 2 2 2 2 2  ",
          "  1 1 1 1 1 1 3 1 1                 1 1 1 1 1 1 1 1  ",
          "              3                                      ",
          "              3                                      ",
          "              3                                      ",
          "              3                                      ",
          "              3                                      ",
          "              3                                      ",
          "              3                                      ",
          "              3                   4 4 4 4 4          ",
          "  2 2 2 2 2 2 2 2 1               4 4 4 4 4          ",
          "  2 2 2 2 2 2 2 2 1               4 4 4 4 4          ",
          "  2 2 2 2 2 2 2 2 1               4 4 4 4 4          ",
          "  2 2 2 2 2 2 2 2 1               4 4 4 4 4          ",
          "  2 2 2 2 2 2 2 2 1                                  ",
          "  2 2 2 2 2 2 2 2 1                                  ",
          "  2 2 2 2 2 2 2 2 1                                  ",
          "  2 2 2 2 2 2 2 2 1                                  ",
          "                                                     ",
        ]
      `)
  })

  it('render-unicode', () => {
    expect(`\n${renderUnicode('qrcode', {
      whiteChar: '██',
      blackChar: '░░',
    })}`)
      .toMatchInlineSnapshot(`
        "
        ██████████████████████████████████████████████
        ██░░░░░░░░░░░░░░██░░░░████░░██░░░░░░░░░░░░░░██
        ██░░██████████░░████░░████░░██░░██████████░░██
        ██░░██░░░░░░██░░██░░██░░██░░██░░██░░░░░░██░░██
        ██░░██░░░░░░██░░██░░████░░████░░██░░░░░░██░░██
        ██░░██░░░░░░██░░██░░░░░░██████░░██░░░░░░██░░██
        ██░░██████████░░██████████████░░██████████░░██
        ██░░░░░░░░░░░░░░██░░██░░██░░██░░░░░░░░░░░░░░██
        ████████████████████░░░░██████████████████████
        ██░░░░░░░░████░░██░░██░░████░░████░░░░░░██░░██
        ██████░░██░░████░░░░░░████░░████░░████░░░░░░██
        ██░░██░░░░████░░░░████████░░░░░░░░░░░░░░░░░░██
        ██░░░░██░░░░░░████████░░██░░░░██████░░████████
        ████░░██████░░░░██░░░░██░░██░░████░░██████████
        ██████████████████░░██░░████░░██████░░██░░████
        ██░░░░░░░░░░░░░░████████████░░░░██░░░░░░██████
        ██░░██████████░░██████░░░░░░░░░░████░░░░██░░██
        ██░░██░░░░░░██░░████░░██░░████░░░░██░░░░░░░░██
        ██░░██░░░░░░██░░██░░░░░░████░░██████░░░░░░████
        ██░░██░░░░░░██░░██░░██░░░░██░░██████░░████████
        ██░░██████████░░██░░░░██░░░░██░░██████████░░██
        ██░░░░░░░░░░░░░░██░░░░░░░░░░████░░░░██░░██████
        ██████████████████████████████████████████████"
      `)
  })

  it('render-unicode-compact', () => {
    const code = renderUnicodeCompact('qrcode', { invert: false })

    expect(`\n${code}`)
      .toMatchInlineSnapshot(`
        "
        █▀▀▀▀▀▀▀█▀▀██▀█▀▀▀▀▀▀▀█
        █ █▀▀▀█ █▀▄▀█ █ █▀▀▀█ █
        █ █   █ █ ▀▀▄██ █   █ █
        █ ▀▀▀▀▀ █▀█▀█▀█ ▀▀▀▀▀ █
        █▀▀▀▀██▀█▀▄ ██▀██▀▀▀█▀█
        █▀█ ▀▄█▀ ▄▄██ ▀▀ ▀▀   █
        █▄ █▄▄ ▀█▀▀▄▀▄ ██▀▄████
        █▀▀▀▀▀▀▀█▄█▄██ ▀█▀ ▀▄██
        █ █▀▀▀█ ██▀▄ ▄▄ ▀█  ▀ █
        █ █   █ █ ▄ ▀█ ███ ▄▄██
        █ ▀▀▀▀▀ █  ▀  █▄▀▀█▀█▄█
        ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀"
      `)
  })

  // it('render-ansi', () => {
  //   console.log(renderANSI('qrcode'))
  // })

  it('render-svg', () => {
    const svg = renderSVG('qrcode')

    expect(svg).toMatchFileSnapshot('./output/out1.svg')
  })
  it('render-base64', async () => {
    // const base64 = await renderBase64('HUNG')

    expect(base64).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAklEQVR4AewaftIAAAKMSURBVO3BQY4bQQwEwSxi/v/ltI889aIxspYGGBH/Yo1RrFGKNUqxRinWKMUapVijFGuUhx8k4ZtUTpLQqXRJOFHpkvBNKifFGqVYoxRrlIdLKp+UhDeScKJyQ+WTknCjWKMUa5RijfLwUhJuqNxIwolKl4QuCZ3KjSTcUHmjWKMUa5RijfIwnEqXhBsq/5NijVKsUYo1ysN/RqVLQqfSJaFTmaxYoxRrlGKN8vCSym9S+ZdUvqlYoxRrlGKN8nApCd+UhE6lS0Kn8kYSflOxRinWKMUa5eEHKpMkoVPpknBDZZJijVKsUYo1ysMPknBDpUvCv5SEE5UuCScqN5LQqbxRrFGKNUqxRnn4gcobKjeS8IbKiUqXhBtJuJGETuWkWKMUa5RijfJwKQn/kkqXhE6lS8JJEjqVTuUkCZ1Kl4QTlRvFGqVYoxRrlPgXLyShUzlJQqfSJeFE5ZOS0KmcJKFT+aRijVKsUYo1ysOlJHQqN1S6JJyonCShU+mS0KncSMIbSehUToo1SrFGKdYoD5dUPknlJAmdSqfSJaFT6ZLQqXRJ6FS+qVijFGuUYo3y8IMkfJPKSRI+KQmTFGuUYo1SrFEeLql8UhJuqJwkoUvCiUqXhC4JJypdEt4o1ijFGqVYozy8lIQbKm8koVM5UemS0CXhROUkCZ1Kl4QbxRqlWKMUa5SH4VRuqJyodEnoVN5IQqdyo1ijFGuUYo3yMFwSbqh0SehUOpWTJHQqncpJEjqVk2KNUqxRijXKw0sq36RyQ+UkCZ1Kp3KShE8q1ijFGqVYozxcSsJvSkKncpKETuVGEjqVE5UuCTeKNUqxRinWKPEv1hjFGqVYoxRrlGKNUqxRijVKsUb5AzIkEdnWdO42AAAAAElFTkSuQmCC')
  })
})
