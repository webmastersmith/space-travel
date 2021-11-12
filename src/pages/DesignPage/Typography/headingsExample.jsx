import { memo, useMemo, useCallback } from 'react'
import { createTypographyDiv } from './typography.utils'
import { uid } from 'utils'
import globals from 'styles/global.module.scss'
import styles from './styles.module.scss'

export default memo(function HeadingsExample(props) {
  const headingsArr = useMemo(
    () => [
      {
        p1Styles: globals.textAccent,
        p1words: 'Heading 1 - Bellefair Regular - 150px',
        p2StylesArr: [globals.fs900, globals.ffSerif, globals.uppercase],
        p2words: 'Earth',
      },
      {
        p1Styles: globals.textAccent,
        p1words: 'Heading 2 - Bellefair Regular - 100px',
        p2StylesArr: [globals.fs800, globals.ffSerif, globals.uppercase],
        p2words: 'Venus',
      },
      {
        p1Styles: globals.textAccent,
        p1words: 'Heading 3 - Bellefair Regular - 56px',
        p2StylesArr: [globals.fs700, globals.ffSerif, globals.uppercase],
        p2words: 'Jupiter & Saturn',
      },
      {
        p1Styles: globals.textAccent,
        p1words: 'Heading 4 - Bellefair Regular - 32px',
        p2StylesArr: [globals.fs600, globals.ffSerif, globals.uppercase],
        p2words: 'Uranus, Neptune, & Pluto',
      },
      {
        p1Styles: globals.textAccent,
        p1words:
          'Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space',
        p2StylesArr: [
          globals.textAccent,
          globals.fs500,
          globals.ffSanCond,
          globals.uppercase,
          globals.letterSpacing1,
        ],
        p2words: 'So, you want to travel to space',
      },
    ],
    []
  )

  const createTypographyDivMemo = useCallback(createTypographyDiv, [])

  return (
    <div className={`${styles.headingWrapper}`}>
      {headingsArr.map((t) => {
        const key = uid()
        return createTypographyDivMemo(
          t.p1Styles,
          t.p1words,
          t.p2StylesArr,
          t.p2words,
          key
        )
      })}
    </div>
  )
})
