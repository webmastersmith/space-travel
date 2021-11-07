export function createTypographyDiv(
  p1Styles,
  p1words,
  p2StylesArr,
  p2words,
  key
) {
  return (
    <div key={key}>
      <p className={`${p1Styles}`}>{p1words}</p>
      <p className={p2StylesArr.join(' ')}>{p2words}</p>
    </div>
  )
}
