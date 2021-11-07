import { memo, useMemo } from 'react'
import { createTypographyDiv } from './typography.utils'
import { uid } from 'utils/global.utils'
import globals from 'styles/global.module.scss'
import styles from 'components/design-typography/typography.module.scss'

export default memo(function BodyExample(props) {
  const bodyArr = useMemo(
    () => [
      {
        p1Styles: globals.textAccent,
        p1words: 'Subheading 1 - Bellefair Regular - 28px',
        p2StylesArr: [globals.fs500, globals.ffSerif, globals.uppercase],
        p2words: '384,400 km',
      },
      {
        p1Styles: globals.textAccent,
        p1words:
          'Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space',
        p2StylesArr: [
          globals.fs200,
          globals.ffSansCond,
          globals.uppercase,
          globals.letterSpacing3,
        ],
        p2words: ' Avg. Distance',
      },
      {
        p1Styles: globals.textAccent,
        p1words:
          'Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space',
        p2StylesArr: [
          globals.fs300,
          globals.ffSansCond,
          globals.uppercase,
          globals.letterSpacing2,
        ],
        p2words: 'Europa',
      },
      {
        p1Styles: globals.textAccent,
        p1words: 'Body Text',
        p2StylesArr: [],
        p2words:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.',
      },
    ],
    []
  )

  return (
    <div className={`${styles.childWrapper}`}>
      {bodyArr.map((b) => {
        const key = uid()
        return createTypographyDiv(
          b.p1Styles,
          b.p1words,
          b.p2StylesArr,
          b.p2words,
          key
        )
      })}
    </div>
  )
})
