import { memo } from 'react'
import styles from './styles.module.scss'

export const ExploreButton = memo(() => {
  return (
    <button className={`${styles.exploreButton}`}>
      <span>Explore</span>
    </button>
  )
})
