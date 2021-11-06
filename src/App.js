import Colors from 'components/design-colors'
import Typography from 'components/design-typography/typography'
import globals from 'styles/global.module.scss'
import styles from './styles/App.module.scss'

export default function App() {
  return (
    <div className={`${globals.container} ${styles.wrapper}`}>
      <h1>Design System</h1>
      <Colors />
      <Typography />
    </div>
  )
}
