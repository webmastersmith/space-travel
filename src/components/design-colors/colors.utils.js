import styles from './colors.module.scss'

export function createBox(hex, rgb, hsl, bg, text, span) {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${bg} ${text} ${styles.box}`}>{hex}</div>
      <p>
        <span className={`${span} ${styles.colorCode}`}>RGB</span>
        {rgb}
      </p>
      <p>
        <span className={`${span} ${styles.colorCode}`}>HSL</span>
        {hsl}
      </p>
    </div>
  )
}
