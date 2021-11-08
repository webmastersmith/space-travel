import { memo } from 'react'
import Header from './header'
import ExploreButton from './explore-button'

import globals from 'styles/global.module.scss'
import styles from 'components/interactive-elements/InteractiveElements.module.scss'

export default memo(function InteractiveElements(props) {
  return (
    <section>
      <h2 className={`${globals.numberedTitle}`}>
        <span>03</span>
        interactive elements
      </h2>

      <Header />
      <div className={`${styles.wrapper}`}>
        <ExploreButton />
        <div>hello peeps!</div>
      </div>
    </section>
  )
})
