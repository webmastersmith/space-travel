import { memo } from 'react'
import styles from 'components/interactive-elements/InteractiveElements.module.scss'

export default memo(function TabExample(props) {
  return (
    <div className={`${styles.tabExample}`}>
      <div>
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
        <p>Tabs (Active, Hover, & Idle)</p>
      </div>

      <div>
        <div className={`${styles.bullets}`}>
          <div></div>
        </div>
        <p>Slider 1 States (Active, Hover, & Idle)</p>
      </div>

      <div className={`${styles.sliders}`}>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
        </div>
        <p>Slider 2 States (Active, Hover, & Idle)</p>
      </div>
    </div>
  )
})
