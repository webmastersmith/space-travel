import { memo } from 'react'
import { NavBar } from 'components'
import styles from './styles.module.scss'
import Logo from 'assets/shared/logo.svg'

export const Header = memo(() => {
  return (
    <header className={`${styles.header}`}>
      <img src={Logo} alt="logo" className={`${styles.logo}`} />
      <span className={`${styles.line}`}></span>
      <NavBar links={['Home', 'Destination', 'Crew', 'Technology']} />
    </header>
  )
})
