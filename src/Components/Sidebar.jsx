import React from "react";
import { NavLink } from "react-router-dom";
import { Users, GraduationCap, BookOpen, Calendar } from "lucide-react";

const Sidebar = () => {
  const links = [
    { name: "Students", path: "/students", icon: <Users size={20} /> },
    { name: "Teachers", path: "/teachers", icon: <GraduationCap size={20} /> },
    { name: "Library", path: "/library", icon: <BookOpen size={20} /> },
    { name: "Events", path: "/events", icon: <Calendar size={20} /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-[280px] bg-gradient-to-b from-green-600 to-green-500 text-white shadow-xl flex flex-col">
      {/* Avatar */}
      <div className="flex flex-col items-center py-8 border-b border-white/20">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
          <Users className="text-green-600 w-10 h-10" />
        </div>
        <h2 className="mt-3 text-xl font-bold">Admin</h2>
        <p className="text-sm text-white/80">Administrator</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-6 py-6">
        <ul className="space-y-3 text-base">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-xl transition ${
                    isActive
                      ? "bg-white text-green-600 font-semibold shadow-md"
                      : "hover:bg-white/20"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-4 text-sm text-white/70 border-t border-white/20">
        © 2026 Admin Panel
      </div>
    </aside>
  );
};

export default Sidebar;
