import { Colors, Typography, InteractiveElements } from 'pages'
import styles from './styles.module.scss'

export function DesignPage() {
  return (
    <div className={`${styles.wrapper}`} style={{ marginBottom: '500vh' }}>
      <h1>Design System</h1>
      <Colors />
      <Typography />
      <InteractiveElements />
    </div>
  )
}
