import { memo } from 'react'
import { NavBar } from './NavBarExample'
import ExploreButton from './explore-button'
import TabExample from './TabExample'

import globals from 'styles/global.module.scss'
import styles from 'components/DesignPage/InteractiveElements/InteractiveElements.module.scss'

export const InteractiveElements = memo((props) => {
  return (
    <section className={`${styles.interactiveElements}`}>
      <h2 className={`${globals.numberedTitle}`}>
        <span>03</span>
        interactive elements
      </h2>

      <NavBar />
      <p>Different States of Navigation Bar</p>

      <div className={`${styles.childWrapper}`}>
        <ExploreButton />
        <TabExample />
      </div>
    </section>
  )
})
