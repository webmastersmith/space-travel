import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

export const NavBar = memo(({ links }) => {
  return (
    <ul className={`${styles.navBarExample}`}>
      {links.map((link, i) => {
        return (
          <li>
            {link === 'Home' ? (
              <NavLink end to="/" className="test">
                <span>{`0${i}`}</span>
                {link}
              </NavLink>
            ) : (
              <NavLink to={link.toLowerCase()} className="test">
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
