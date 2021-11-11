import { memo } from 'react'
import { NavBar } from './NavBarExample'
import { ExploreButton } from 'components'
import TabExample from './TabExample'

import globals from 'styles/global.module.scss'
import styles from './styles.module.scss'

export const InteractiveElements = memo((props) => {
  return (
    <section className={`${styles.interactiveElements}`}>
      <h2 className={`${globals.numberedTitle}`}>
        <span>03</span>
        interactive elements
      </h2>

      <NavBar />
      <p>Different States of Navigation Bar</p>

      <div className={`${styles.exploreTabsWrapper}`}>
        <div className={`${styles.exploreButtonDiv}`}>
          <ExploreButton />
          <p>Landing Page Main Button - Hover</p>
        </div>
        <TabExample />
      </div>
    </section>
  )
})
