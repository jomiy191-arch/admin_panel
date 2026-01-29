import React from "react";
import { Search, Bell, User } from "lucide-react";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="fixed top-0 left-[280px] right-0 h-[70px] bg-green-600 shadow flex items-center justify-between px-6 z-50">
      <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-white"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </div>

        {/* Bell */}
        <Bell className="w-6 h-6 text-white cursor-pointer" />

        {/* Profile */}
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-green-600">
          <User size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
