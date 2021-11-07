import styles from 'components/design-typography/typography.module.scss'

export const uid = () =>
  new Date().getTime() + Math.random().toString(16).slice(2)

export function createTypographyDiv(
  p1Styles,
  p1words,
  p2StylesArr,
  p2words,
  key
) {
  return (
    <div className={`${styles.header}`} key={key}>
      <p className={`${p1Styles}`}>{p1words}</p>
      <p className={p2StylesArr.join(' ')}>{p2words}</p>
    </div>
  )
}
