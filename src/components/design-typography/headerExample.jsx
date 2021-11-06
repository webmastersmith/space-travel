import { memo, useMemo, useCallback } from 'react'
import globals from 'styles/global.module.scss'

export default memo(function HeaderExample(props) {
  const headerArr = useMemo(
    () => [
      {
        p1textColor: globals.textAccent,
        p1words: 'Heading 1 - Bellefair Regular - 150px',
        p2Arr: [globals.fs900, globals.ffSerif, globals.uppercase],
        p2words: 'Earth',
      },
      {
        p1textColor: globals.textAccent,
        p1words: 'Heading 2 - Bellefair Regular - 100px',
        p2Arr: [globals.fs800, globals.ffSerif, globals.uppercase],
        p2words: 'Venus',
      },
      {
        p1textColor: globals.textAccent,
        p1words: 'Heading 3 - Bellefair Regular - 56px',
        p2Arr: [globals.fs700, globals.ffSerif, globals.uppercase],
        p2words: 'Jupiter & Saturn',
      },
      {
        p1textColor: globals.textAccent,
        p1words: 'Heading 4 - Bellefair Regular - 32px',
        p2Arr: [globals.fs600, globals.ffSerif, globals.uppercase],
        p2words: 'Uranus, Neptune, & Pluto',
      },
      {
        p1textColor: globals.textAccent,
        p1words:
          'Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space',
        p2Arr: [
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

  const createDiv = useCallback(function (
    p1textColor,
    p1words,
    p2Arr,
    p2words
  ) {
    return (
      <div>
        <p className={`${p1textColor}`}>{p1words}</p>
        <p className={p2Arr.join(' ')}>{p2words}</p>
      </div>
    )
  },
  [])

  // <div class="flow" style="flex-basis: 100%; --flow-space: 4rem;">
  return (
    <div>
      {headerArr.map((t) =>
        createDiv(t.p1textColor, t.p1words, t.p2Arr, t.p2words)
      )}
    </div>
  )
})
