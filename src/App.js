import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, DesignPage } from 'pages'
import { Header } from 'components'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="design" element={<DesignPage />} />
      </Routes>
    </BrowserRouter>
  )
}
