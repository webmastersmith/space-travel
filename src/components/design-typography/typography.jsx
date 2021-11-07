import { memo } from 'react'
import HeadingsExample from 'components/design-typography/headingsExample'
import BodyExample from 'components/design-typography/bodyExample'
import globals from 'styles/global.module.scss'
import styles from 'components/design-typography/typography.module.scss'

export default memo(function Typography(props) {
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
