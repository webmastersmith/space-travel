import { Colors, Typography, InteractiveElements } from 'components'
import globals from 'styles/global.module.scss'
import styles from 'components/DesignPage/DesignPage.module.scss'

export function DesignPage() {
  return (
    <div
      className={`${globals.container} ${styles.wrapper}`}
      style={{ marginBottom: '500vh' }}
    >
      <h1>Design System</h1>
      <Colors />
      <Typography />
      <InteractiveElements />
    </div>
  )
}
