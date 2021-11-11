import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, DesignPage } from 'pages'
import globals from 'styles/global.module.scss'

export function App() {
  return (
    <div className={`${globals.container}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="design" element={<DesignPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
