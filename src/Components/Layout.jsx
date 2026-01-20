import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Teachers from './pages/Teachers'
import Students from './pages/Students'

const Layout = () => {
  return (
    <>
      <div className="content flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout