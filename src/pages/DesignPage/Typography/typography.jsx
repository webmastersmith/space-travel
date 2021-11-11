import { memo } from 'react'
import HeadingsExample from './headingsExample'
import BodyExample from './bodyExample'
import globals from 'styles/global.module.scss'
import styles from './styles.module.scss'

export const Typography = memo((props) => {
  return (
    <section id="typography">
      <h2 className={`${globals.numberedTitle}`}>
        <span>02</span>
        typography
      </h2>
      <div className={`${styles.typography}`}>
        <HeadingsExample />
        <BodyExample />
      </div>
    </section>
  )
})
