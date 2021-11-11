import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, DesignPage } from 'pages'
import { Header } from 'components'
import globals from 'styles/global.module.scss'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={`${globals.container}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="design" element={<DesignPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
