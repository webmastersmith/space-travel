import { memo } from 'react'
import styles from 'components/interactive-elements/InteractiveElements.module.scss'

export default memo(function TabExample(props) {
  return (
    <div className={`${styles.tabExample}`}>
      <ul>
        <li>
          <button>Moon</button>
        </li>
        <li>
          <button>Mars</button>
        </li>
        <li>
          <button>europa</button>
        </li>
      </ul>

      <p>Tabs(Active, Hover, & Idle)</p>

      <div className={`${styles.bullets}`}>
        <span></span>
      </div>
    </div>
  )
})
