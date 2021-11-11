import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, DesignPage } from 'pages'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="design" element={<DesignPage />} />
      </Routes>
    </BrowserRouter>
  )
}
