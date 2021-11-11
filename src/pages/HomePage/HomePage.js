import { memo } from 'react'
import { ExploreButton } from 'components'
import styles from './styles.module.scss'
import globals from 'styles/global.module.scss'

export const HomePage = memo(() => {
  return (
    <div className={`${styles.homePage}`}>
      <div className={`${styles.text}`}>
        <h1>So, you want to travel to</h1>
        <span className={`${globals.title}`}>Space</span>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={`${styles.explore}`}>
        <ExploreButton />
      </div>
    </div>
  )
})

// {/* <nav className={`${styles.nav}`}> */}
//  00 Home 01 Destination 02 Crew 03 Technology 04 Design</nav>
