import { memo } from 'react'
import ExploreButton from './explore-button'
import globals from 'styles/global.module.scss'
import styles from 'components/interactive-elements/interactiveElements.module.scss'

export default memo(function InteractiveElements(props) {
  return (
    <section>
      <h2 className={`${globals.numberedTitle}`}>
        <span>03</span>
        interactive elements
      </h2>
      <div>Header</div>

      <div className={`${styles.wrapper}`}>
        <ExploreButton />
        <div>hello peeps!</div>
      </div>
    </section>
  )
})
