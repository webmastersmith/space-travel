import { memo } from 'react'
import styles from 'components/DesignPage/InteractiveElements/InteractiveElements.module.scss'

export default memo(function ExploreButton(props) {
  return (
    <div className={`${styles.exploreButton}`}>
      <button>
        <span>Explore</span>
      </button>
      <p>Landing Page Main Button - Idle</p>

      <button className={`${styles.largeButton}`}>
        <span>Explore</span>
      </button>
      <p>Landing Page Main Button - Hover</p>
    </div>
  )
})
