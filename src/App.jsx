import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Components/Layout'
import Students from './Components/pages/Students'
import Teachers from './Components/pages/Teachers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Navigate to="/students" />} />

          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
