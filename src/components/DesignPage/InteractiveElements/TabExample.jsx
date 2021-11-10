import { memo } from 'react'
import styles from 'components/DesignPage/InteractiveElements/InteractiveElements.module.scss'

export default memo(function TabExample(props) {
  return (
    <div className={`${styles.tabExample}`}>
      <div className={`${styles.tabs}`}>
        <div>
          <button className={`${styles.active}`}>Moon</button>
          <button>Mars</button>
          <button>europa</button>
        </div>
        <p>Tabs (Active, Hover, & Idle)</p>
      </div>

      <div>
        <div className={`${styles.bullets}`}>
          <button className={`${styles.active}`}></button>
          <button></button>
          <button></button>
        </div>
        <p>Slider 1 States (Active, Hover, & Idle)</p>
      </div>

      <div className={`${styles.sliders}`}>
        <div className={`${styles.active}`}>
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
