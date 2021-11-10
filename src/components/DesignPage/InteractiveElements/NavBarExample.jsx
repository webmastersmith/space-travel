import { memo } from 'react'
import styles from 'components/DesignPage/InteractiveElements/InteractiveElements.module.scss'
import globals from 'styles/global.module.scss'

export default memo(function NavBarExample() {
  return (
    <div className={`${styles.navBarExample}`}>
      <ul>
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
      <p>Different States of Navigation Bar</p>
    </div>
  )
})
