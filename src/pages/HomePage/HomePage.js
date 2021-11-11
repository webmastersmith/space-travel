import { memo } from 'react'
import { NavBar } from 'components'
import styles from './styles.module.scss'

export const HomePage = memo(() => {
  return (
    <div>
      <header className={`${styles.header}`}>
        <div className={`${styles.logo}`}>Logo</div>
        <NavBar links={['Home', 'Destination', 'Crew', 'Technology']} />
      </header>

      <p>
        So, you want to travel to Space Let’s face it; if you want to go to
        space, you might as well genuinely go to outer space and not hover kind
        of on the edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience! Explore
      </p>
    </div>
  )
})

// {/* <nav className={`${styles.nav}`}> */}
//  00 Home 01 Destination 02 Crew 03 Technology 04 Design</nav>
