import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Components/Layout'
import Students from './Components/pages/Students'
import Teachers from './Components/pages/Teachers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          {/* Default page */}
          <Route index element={<Navigate to="/students" />} />

          {/* Pages */}
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
