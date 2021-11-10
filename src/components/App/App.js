import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DesignPage, HomePage } from 'components'
// import globals from 'styles/global.module.scss'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<DesignPage />} />
      </Routes>
    </BrowserRouter>
  )
}
