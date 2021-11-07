import { memo } from 'react'
import { createBox, uid } from './colors.utils'
import styles from './colors.module.scss'
import globals from 'styles/global.module.scss'

export default memo(function Colors() {
  const boxColors = [
    {
      hex: '#0B0D17',
      rgb: '11, 13, 23',
      hsl: '230°, 35%, 7%',
      bg: globals.bgDark,
      text: globals.textWhite,
      span: globals.textAccent,
    },
    {
      hex: '#D0D6F9',
      rgb: '208, 214, 249',
      hsl: '231°, 77%, 90%',
      bg: globals.bgAccent,
      text: globals.textDark,
      span: globals.textAccent,
    },
    {
      hex: '#FFFFFF',
      rgb: '255, 255, 255',
      hsl: '0°, 0%, 100%',
      bg: globals.bgWhite,
      text: globals.textDark,
      span: globals.textAccent,
    },
  ]

  return (
    <section id="colors">
      <h2 className={`${globals.numberedTitle}`}>
        <span>01</span> colors
      </h2>

      <div className={`${styles.colors}`}>
        {boxColors.map((c) => {
          const key = uid()
          return createBox(c.hex, c.rgb, c.hsl, c.bg, c.text, c.span, key)
        })}
      </div>
    </section>
  )
})
