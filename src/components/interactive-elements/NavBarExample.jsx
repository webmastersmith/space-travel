import { memo } from 'react'
import styles from 'components/interactive-elements/InteractiveElements.module.scss'
import globals from 'styles/global.module.scss'

export default memo(function NavBarExample() {
  return (
    <ul className={`${styles.navBarExample}`}>
      <li>
        <button className={`${globals.numberedTitle}`}>
          <span>00</span>Active
        </button>
      </li>

      <li>
        <button className={`${globals.numberedTitle}`}>
          <span>01</span>Hovered
        </button>
      </li>

      <li>
        <button className={`${globals.numberedTitle}`}>
          <span>02</span>idle
        </button>
      </li>
    </ul>
  )
})
