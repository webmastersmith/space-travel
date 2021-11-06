import { memo } from 'react'
import globals from 'styles/global.module.scss'
import HeaderExample from 'components/design-typography/headerExample'

export default memo(function Typography(props) {
  return (
    <section id="typography">
      <h2 className={`${globals.uppercase}`}>
        <span className={`${globals.designH2}`}>02</span>
        typography
      </h2>
      <div>
        <HeaderExample />
      </div>
    </section>
  )
})
