import { memo } from 'react'
import HeadingsExample from 'components/DesignPage/Typography/headingsExample'
import BodyExample from 'components/DesignPage/Typography/bodyExample'
import globals from 'styles/global.module.scss'
import styles from 'components/DesignPage/Typography/typography.module.scss'

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
