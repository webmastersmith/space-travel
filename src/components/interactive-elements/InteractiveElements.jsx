import { memo } from 'react'
import globals from 'styles/global.module.scss'
import styles from 'components/interactive-elements/interactiveElements.module.scss'

export default memo(function InteractiveElements(props) {
  return (
    <div>
      <h2 className={`${globals.numberedTitle}`}>
        <span>03</span>
        interactive elements
      </h2>

      <div className={`${styles.interactiveElements}`}>
        <button>
          {' '}
          <span>Explore</span>
        </button>
      </div>
    </div>
  )
})
