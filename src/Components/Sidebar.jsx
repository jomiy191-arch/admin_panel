import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-[300px]  bg-green-500 p-6 text-white">
      <h1 className="text-4xl font-bold mb-10">Admin</h1>

      <ul className="space-y-4 text-lg">
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? 'text-black font-bold' : 'hover:text-black'
            }
          >
            Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              isActive ? 'text-black font-bold' : 'hover:text-black'
            }
          >
            Teachers
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
