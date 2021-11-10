import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/reset.css'
import 'styles/global.module.scss'
import { App } from 'components'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
