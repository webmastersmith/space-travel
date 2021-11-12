import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import { uid } from 'utils'

export const NavBar = memo(({ links }) => {
  return (
    <ul className={`${styles.navBarExample}`}>
      {links.map((link, i) => {
        const key = uid()
        return (
          <li key={key}>
            {link === 'Home' ? (
              <NavLink end to="/">
                <span>{`0${i}`}</span>
                {link}
              </NavLink>
            ) : (
              <NavLink to={link.toLowerCase()}>
                <span>{`0${i}`}</span>
                {link}
              </NavLink>
            )}
          </li>
        )
      })}
    </ul>
  )
})
