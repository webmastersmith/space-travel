import { Colors } from 'components'
import { Typography } from 'components'
import { InteractiveElements } from 'components'
import globals from 'styles/global.module.scss'
import styles from './App.module.scss'

export function App() {
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
