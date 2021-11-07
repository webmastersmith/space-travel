import styles from './colors.module.scss'

export function createBox(hex, rgb, hsl, bg, text, key) {
  return (
    <div key={key} className={`${styles.boxWrapper}`}>
      <div className={`${bg} ${text} ${styles.box}`}>{hex}</div>
      <p>
        <span>RGB</span>
        {rgb}
      </p>
      <p>
        <span>HSL</span>
        {hsl}
      </p>
    </div>
  )
}
