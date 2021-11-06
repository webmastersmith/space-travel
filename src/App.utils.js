import styles from 'styles/App.module.scss'

export function createBox(hex, rgb, hsl, bg, text) {
  return (
    <div className={`${styles.boxWrapper}`}>
      <div className={`${bg} ${text} ${styles.box}`}>{hex}</div>
      <p>
        <span className={`${styles.colorCode}`}>RGB</span>
        {rgb}
      </p>
      <p>
        <span className={`text-accent ${styles.colorCode}`}>HSL</span>
        {hsl}
      </p>
    </div>
  )
}
